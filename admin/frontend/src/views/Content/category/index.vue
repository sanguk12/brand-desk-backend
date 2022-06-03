<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('Content.cate.add') }} </a-button>
        <a-button
          type="primary"
          preIcon="bi:file-arrow-up"
          @click="handleUp"
          v-if="searchInfo.cateId"
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
              icon: 'el:file-edit-alt',
              onClick: handleContentEdit.bind(null, record),
              ifShow: record.typeId != null,
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
    <CateModal @register="registerModal" @success="handleSuccess" />
    <CateContentModal @register="registerContentModal" @success="handleContentSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import CateModal from './CateModal.vue';
  import CateContentModal from './CateContentModal.vue';

  import { columns, searchFormSchema } from './cate.data';
  import { deleteCate, getCategoryList } from '/@/api/cms/category';
  import { CategoryListGetResultModel } from '/@/api/cms/model/category';
  import { isEmpty } from 'lodash-es';

  export default defineComponent({
    name: 'CateManagement',
    components: { BasicTable, CateModal, CateContentModal, TableAction },
    setup() {
      const { t } = useI18n();
      const searchInfo = reactive<Recordable>({ parentId: null, name: null, hidden: null });

      const { createSuccessModal } = useMessage();

      async function getCategoryData() {
        return new Promise<CategoryListGetResultModel>(async (resolve) => {
          const cateList = await getCategoryList(searchInfo);
          if (!isEmpty(cateList)) {
            const cate = cateList[0];
            searchInfo.cateId = cate.parentId;
            searchInfo.parentCate = false;
          }

          resolve(cateList);
        });
      }

      const [registerModal, { openModal }] = useModal();
      const [registerContentModal, { openModal: openContentModal }] = useModal();

      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('Content.cate.list'),
        isTreeTable: false,
        api: getCategoryData,
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
          width: 115,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          record: { parentId: searchInfo.cateId },
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleContentEdit(record: Recordable) {
        openContentModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        const result = await deleteCate(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('Content.cate.deleted'),
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleContentSuccess() {
        reload();
      }

      function handleUp() {
        searchInfo.parentCate = true;
        reload();
      }

      function handleDown(record: Recordable) {
        searchInfo.cateId = record.id;
        searchInfo.parentCate = false;
        reload();
      }

      return {
        t,
        expandAll,
        collapseAll,
        registerTable,
        registerModal,
        registerContentModal,
        handleCreate,
        handleEdit,
        handleContentEdit,
        handleDelete,
        handleSuccess,
        handleContentSuccess,
        handleUp,
        handleDown,
        searchInfo,
      };
    },
  });
</script>
