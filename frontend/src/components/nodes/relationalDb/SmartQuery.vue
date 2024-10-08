<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { message } from 'ant-design-vue'
import { Refresh } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { useUserRelationalDatabasesStore } from "@/stores/userRelationalDatabase"
import BaseNode from '@/components/nodes/BaseNode.vue'
import BaseField from '@/components/nodes/BaseField.vue'
import BaseFieldsCollapse from '@/components/nodes/BaseFieldsCollapse.vue'
import { relationalDatabaseTableAPI } from '@/api/database'
import { createTemplateData } from './SmartQuery'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
const userDatabasesStore = useUserRelationalDatabasesStore()
const { userRelationalDatabases } = storeToRefs(userDatabasesStore)

const fieldsData = ref(props.data.template)
const templateData = createTemplateData()
Object.entries(templateData.template).forEach(([key, value]) => {
  fieldsData.value[key] = fieldsData.value[key] || value
  if (value.is_output) {
    fieldsData.value[key].is_output = true
  }
})
fieldsData.value.database.options = userRelationalDatabases.value.filter((database) => {
  return database.status == 'VALID'
}).map((item) => {
  return {
    value: item.rid,
    label: item.name,
  }
})

const databaseChanged = (value) => {
  fieldsData.value.tables.options = []
  fieldsData.value.tables.value = []
  loadTables(value)
}

const loadingTables = ref(false)
const loadTables = async (rid) => {
  if (!rid) {
    message.error(t('components.nodes.relationalDb.SmartQuery.select_database'))
    return
  }
  loadingTables.value = true
  const response = await relationalDatabaseTableAPI('list', {
    rid: rid,
    status: ['VA'],
    page_size: 100,
  })
  if (response.status != 200) {
    loadingTables.value = false
    return
  }
  fieldsData.value.tables.options = response.data.tables.map((item) => {
    return {
      value: item.tid,
      label: item.name,
    }
  })
  loadingTables.value = false
}

const collapseChanged = (data) => {
  for (const key in fieldsData.value) {
    if (fieldsData.value[key].group === 'default') {
      fieldsData.value[key].group_collpased = data.collpased
    }
  }
}
</script>

<template>
  <BaseNode :nodeId="id" :debug="props.data.debug" :fieldsData="fieldsData"
    translatePrefix="components.nodes.relationalDb.SmartQuery" documentPath="/help/docs/relational-db#node-SmartQuery">
    <template #main>
      <a-flex vertical gap="small">
        <BaseField :name="t('components.nodes.relationalDb.SmartQuery.query')" required type="target"
          v-model:data="fieldsData.query">
          <a-textarea class="nodrag" v-model:value="fieldsData.query.value"
            :placeholder="fieldsData.query.placeholder" />
        </BaseField>

        <BaseField :name="t('components.nodes.relationalDb.SmartQuery.model')" required type="target"
          v-model:data="fieldsData.model">
          <a-select style="width: 100%;" class="nodrag" v-model:value="fieldsData.model.value"
            :options="fieldsData.model.options" />
        </BaseField>

        <BaseField :name="t('components.nodes.relationalDb.SmartQuery.database')" required type="target"
          v-model:data="fieldsData.database">
          <a-select style="width: 100%;" class="nodrag" v-model:value="fieldsData.database.value"
            :options="fieldsData.database.options" @change="databaseChanged" />
        </BaseField>

        <a-tooltip placement="left" :title="t('components.nodes.relationalDb.SmartQuery.select_all_if_empty')">
          <BaseField :name="t('components.nodes.relationalDb.SmartQuery.tables')" type="target"
            v-model:data="fieldsData.tables">
            <a-spin :spinning="loadingTables">
              <a-flex gap="small" align="center">
                <a-select style="width: 100%;" class="nodrag" v-model:value="fieldsData.tables.value"
                  :options="fieldsData.tables.options" mode="tags" />
                <a-tooltip :title="t('components.nodes.relationalDb.SmartQuery.load_tables')">
                  <a-button type="text" @click="loadTables(fieldsData.database.value)">
                    <template #icon>
                      <Refresh />
                    </template>
                  </a-button>
                </a-tooltip>
              </a-flex>
            </a-spin>
          </BaseField>
        </a-tooltip>

        <BaseFieldsCollapse id="default" :collapse="fieldsData.use_sample_data.group_collpased"
          :name="t('common.more_settings')" @collapseChanged="collapseChanged">

          <a-tooltip placement="left" :title="t('components.nodes.relationalDb.SmartQuery.use_sample_data_tip')">
            <BaseField :name="t('components.nodes.relationalDb.SmartQuery.use_sample_data')" name-only type="target"
              v-model:data="fieldsData.use_sample_data">
              <template #inline>
                <a-checkbox v-model:checked="fieldsData.use_sample_data.value">
                </a-checkbox>
              </template>
            </BaseField>
          </a-tooltip>

          <template v-show="fieldsData.output_type.value == 'list'">
            <a-tooltip placement="left" :title="t('components.nodes.relationalDb.SmartQuery.include_column_names_tip')">
              <BaseField :name="t('components.nodes.relationalDb.SmartQuery.include_column_names')" name-only
                type="target" v-model:data="fieldsData.include_column_names">
                <template #inline>
                  <a-checkbox v-model:checked="fieldsData.include_column_names.value">
                  </a-checkbox>
                </template>
              </BaseField>
            </a-tooltip>
          </template>

          <BaseField :name="t('components.nodes.relationalDb.SmartQuery.max_count')" type="target"
            v-model:data="fieldsData.max_count">
            <a-input-number style="width: 100%;" class="nodrag" v-model:value="fieldsData.max_count.value"
              :placeholder="fieldsData.max_count.placeholder" />
          </BaseField>

          <BaseField :name="t('components.nodes.relationalDb.SmartQuery.output_type')" type="target"
            v-model:data="fieldsData.output_type">
            <a-select style="width: 100%;" class="nodrag" v-model:value="fieldsData.output_type.value"
              :options="fieldsData.output_type.options" />
          </BaseField>

        </BaseFieldsCollapse>
      </a-flex>
    </template>
  </BaseNode>
</template>