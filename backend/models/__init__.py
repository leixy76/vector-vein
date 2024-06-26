# -*- coding: utf-8 -*-
# @Author: Bi Ying
# @Date:   2023-05-15 12:42:01
# @Last Modified by:   Bi Ying
# @Last Modified time: 2024-04-30 02:35:36
from .base import database, model_serializer
from .user_models import User, Setting
from .database_models import (
    UserObject,
    UserVectorDatabase,
    UserRelationalDatabase,
    UserRelationalTable,
    DatabaseStatus,
    Status,
)
from .workflow_models import WorkflowTag, Workflow, WorkflowRunRecord, WorkflowRunSchedule, WorkflowTemplate


def create_tables():
    database.create_tables(
        [
            User,
            Setting,
            WorkflowTag,
            Workflow,
            Workflow.tags.get_through_model(),
            WorkflowRunRecord,
            WorkflowRunSchedule,
            WorkflowTemplate,
            WorkflowTemplate.tags.get_through_model(),
            UserObject,
            UserVectorDatabase,
            UserRelationalDatabase,
            UserRelationalTable,
        ]
    )
