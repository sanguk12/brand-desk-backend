<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('AccessControl.role.add') }} </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ic:baseline-view-module',
              onClick: handleEditModule.bind(null, record),
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
    <RoleModal @register="registerModal" @success="handleSuccess" />
    <RoleModuleModal @register="registerRoleModuleModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { getRoleList, deleteRole } from '/@/api/sys/role';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import RoleModal from './RoleModal.vue';
  import RoleModuleModal from './RoleModuleModal.vue';

  import { columns, searchFormSchema } from './role.data';

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, RoleModal, RoleModuleModal, TableAction },
    setup() {
      const { t } = useI18n();
      const { createSuccessModal } = useMessage();

      const [registerModal, { openModal }] = useModal();
      const [registerRoleModuleModal, { openModal: openModalRoleModuleModal }] = useModal();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('AccessControl.role.list'),
        isTreeTable: false,
        api: getRoleList,
        fetchSetting: {
          listField: 'list',
          totalField: 'totalCount',
          sizeField: 'pageSize',
          pageField: 'pageIndex',
        },
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

      function handleEditModule(record: Recordable) {
        openModalRoleModuleModal(true, {
          record,
        });
      }

      async function handleDelete(record: Recordable) {
        const result = await deleteRole(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('AccessControl.role.deleted'),
        });
        await reload();
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
        registerRoleModuleModal,
        handleCreate,
        handleEdit,
        handleEditModule,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
