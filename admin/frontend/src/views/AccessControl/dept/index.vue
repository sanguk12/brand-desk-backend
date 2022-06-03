<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('AccessControl.dept.add') }} </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'carbon:category',
              onClick: handleEditCategory.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: 'Deletion Confirm',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <DeptModal @register="registerModal" @success="handleSuccess" />
    <DeptCategoryModal @register="registerDeptCategoryModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { getDeptTree, deleteDept } from '/@/api/sys/dept';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import DeptModal from './DeptModal.vue';
  import DeptCategoryModal from './DeptCategoryModal.vue';

  import { columns, searchFormSchema } from './dept.data';

  export default defineComponent({
    name: 'DeptManagement',
    components: { BasicTable, DeptModal, DeptCategoryModal, TableAction },
    setup() {
      const { t } = useI18n();
      const { createSuccessModal } = useMessage();

      const [registerModal, { openModal }] = useModal();
      const [registerDeptCategoryModal, { openModal: openModalDeptCategoryModal }] = useModal();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('AccessControl.dept.list'),
        isTreeTable: true,
        api: getDeptTree,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
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
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleEditCategory(record: Recordable) {
        openModalDeptCategoryModal(true, {
          record,
        });
      }

      async function handleDelete(record: Recordable) {
        const result = await deleteDept(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('AccessControl.dept.deleted'),
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      return {
        t,
        expandAll,
        collapseAll,
        registerTable,
        registerModal,
        registerDeptCategoryModal,
        handleCreate,
        handleEdit,
        handleEditCategory,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
