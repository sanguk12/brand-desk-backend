<template>
  <div>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: 'View user',
              onClick: handleView.bind(null, record),
            },
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
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';

  import { columns, getSearchFormSchema } from './review.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { getReviewList } from '/@/api/ds/review';
  import moment from 'moment';

  export default defineComponent({
    name: 'ReviewRequestManagement',
    components: { BasicTable, TableAction },
    setup: function () {
      const { t } = useI18n();
      const go = useGo();

      const searchInfo = reactive<Recordable>({
        createDate: [
          moment().format('YYYY-MM-DD HH:mm:ss'),
          moment().subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss'),
        ],
        type1: null,
        type2: null,
        status: null,
        searchType: null,
        text: null,
      });

      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: '요청 목록',
        isTreeTable: false,
        api: getReviewList,
        fetchSetting: {
          listField: 'list',
          totalField: 'totalCount',
          sizeField: 'pageSize',
          pageField: 'pageIndex',
        },
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: getSearchFormSchema(),
          model: searchInfo,
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

      async function handleDelete(record: Recordable) {
        reload();
      }

      function handleView(record: Recordable) {
        go('/ds/request/reviewDetail/' + record.id);
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
        handleCreate,
        handleEdit,
        handleDelete,
        handleView,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
