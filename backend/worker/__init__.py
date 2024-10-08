# -*- coding: utf-8 -*-
# @Author: Bi Ying
# @Date:   2023-05-15 16:56:55
# @Last Modified by:   Bi Ying
# @Last Modified time: 2024-08-07 18:02:57
import time
import inspect
import traceback
from pathlib import Path
from threading import Thread

from diskcache import Deque

from utilities.config import config
from utilities.general import mprint
from utilities.workflow import Workflow
from worker.tasks import chain, on_finish, TaskError
from worker.tasks import (
    llms,
    tools,
    output,
    triggers,
    vector_db,
    web_crawlers,
    media_editing,
    relational_db,
    control_flows,
    file_processing,
    text_processing,
    image_generation,
    media_processing,
)


task_functions = {}
task_modules = [
    llms,
    tools,
    output,
    triggers,
    vector_db,
    web_crawlers,
    media_editing,
    relational_db,
    control_flows,
    file_processing,
    text_processing,
    image_generation,
    media_processing,
]
for module in task_modules:
    functions = {}
    module_name = module.__name__.split(".")[-1]
    for name, obj in inspect.getmembers(module):
        if (
            callable(obj)
            and not inspect.isclass(obj)
            and not inspect.ismethod(obj)
            and obj.__class__.__name__ == "Task"
        ):
            functions[name] = obj
    task_functions[module_name] = functions


class WorkflowServer:
    def __init__(self, cache_dir: str | Path | None = None, num_workers: int = 2):
        if cache_dir is None:
            cache_dir = Path(config.data_path) / "cache"
        self.cache_dir = Path(cache_dir)
        self.workflow_tasks_queue_directory = self.cache_dir / "workflow_task"
        self.num_workers = num_workers
        self.threads = []

    def start(self):
        thread = Thread(target=self.run, args=(self.workflow_tasks_queue_directory,), daemon=True)
        thread.start()
        self.threads.append(thread)

    def stop(self):
        mprint("Stopping workflow task server...")
        for thread in self.threads:
            if thread and thread.is_alive():
                thread.join()
        self.threads = []

    @staticmethod
    def run(workflow_tasks_queue_directory: str | Path | None = None):
        workflow_tasks_queue = Deque(directory=workflow_tasks_queue_directory)
        sleep_time = 1
        workflow = None

        mprint("Workflow task server started.")
        while True:
            try:
                if len(workflow_tasks_queue) > 0:
                    task_data = workflow_tasks_queue.pop()
                    if task_data is None or not isinstance(task_data, dict):
                        continue
                    mprint("Worker received workflow request.")
                    data: dict = task_data.get("data", {})
                    if not isinstance(data, dict):
                        mprint.error(f"Invalid task data: {data}")
                        continue
                    workflow = Workflow(data)
                    sorted_tasks = workflow.get_sorted_task_order()
                    func_list = []
                    for task in sorted_tasks:
                        module, function = task["task_name"].split(".")
                        func_list.append(task_functions[module][function].s(task["node_id"]))
                    task_chain = chain(*func_list, on_finish.s())
                    task_chain(workflow.data)
                    sleep_time = 0.01
                else:
                    sleep_time = 1
            except TaskError as e:
                mprint.error(traceback.format_exc())
                mprint.error(f"workflow worker error: {e}")
                mprint.error(f"error_task: {e.task_name}")
                for module_name, functions in task_functions.items():
                    if e.task_name in functions:
                        mprint.error(f"error_module: {module_name}")
                        break
                else:
                    module_name = "unknown"
                    mprint.error(f"unknown error: {e.task_name}")
                if workflow:
                    workflow.report_workflow_status(500, f"{module_name}.{e.task_name}")

            time.sleep(sleep_time)
