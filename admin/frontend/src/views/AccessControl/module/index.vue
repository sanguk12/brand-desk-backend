<template>
  <div>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"
          >{{ t('AccessControl.module.add') }}
        </a-button>
        <a-button
          type="primary"
          preIcon="bi:file-arrow-up"
          @click="handleUp"
          v-if="searchInfo.parentId"
          >{{ t('AccessControl.module.go_parent') }}
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: 'Deletion Confirm',
                confirm: handleDelete.bind(null, record),
              },
            },
            {
              icon: 'bi:file-arrow-down',
              onClick: handleDown.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <ModuleModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import ModuleModal from './ModuleModal.vue';

  import { columns, searchFormSchema } from './module.data';
  import { deleteModule, getModuleList } from '/@/api/sys/module';
  import {CategoryListGetResultModel} from "/@/api/cms/model/category";
  import {getCategoryList} from "/@/api/cms/category";
  import {isEmpty} from "lodash-es";
  import {ModuleListGetResultModel} from "/@/api/sys/model/module";

  export default defineComponent({
    name: 'ModuleManagement',
    components: { BasicTable, ModuleModal, TableAction },
    setup() {
      const { t } = useI18n();
      const searchInfo = reactive<Recordable>({
        id: null,
        type: null,
        hidden: null,
        parentId: null,
        parent: null,
      });

      const { createSuccessModal } = useMessage();

      async function getModuleData() {
        return new Promise<ModuleListGetResultModel>(async (resolve) => {
          const moduleList = await getModuleList(searchInfo);
          if (!isEmpty(moduleList)) {
            const module = moduleList[0];
            searchInfo.parentId = module.parentId;
            searchInfo.parentCate = false;
          }

          resolve(moduleList);
        });
      }

      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('AccessControl.module.list'),
        isTreeTable: false,
        api: getModuleData,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        rowKey: 'id',
        actionColumn: {
          width: 100,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          record: { parentId: searchInfo.parentId },
        });
      }

      function handleEdit(record: Recordable) {
        record.parentId = searchInfo.parentId;

        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        const result = await deleteModule(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('AccessControl.module.deleted'),
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleUp(record: Recordable) {
        searchInfo.parent = true;
        reload();
      }

      function handleDown(record: Recordable) {
        searchInfo.parentId = record.id;
        searchInfo.parent = false;
        reload();
      }

      return {
        t,
        expandAll,
        collapseAll,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleUp,
        handleDown,
        searchInfo,
      };
    },
  });
</script>
