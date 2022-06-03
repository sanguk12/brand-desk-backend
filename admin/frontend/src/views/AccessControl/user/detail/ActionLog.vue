<template>
  <BasicTable @register="registerTable" :searchInfo="searchInfo">
    <template #toolbar>
      <a-button type="primary" @click="handleReloadCurrent">{{
        t('common.reload_current')
      }}</a-button>
      <a-button type="primary" @click="handleReload">{{ t('common.reload') }}</a-button>
    </template>

    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            icon: 'clarity:info-standard-line',
            tooltip: t('AccessControl.user.detail_log'),
            onClick: handleDetailView.bind(null, record),
          },
        ]"
      />
    </template>
  </BasicTable>
  <ContentDetailModal @register="registerModal" />
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { getSearchFormSchema, getTableColumns } from './actionLogData';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getActionList } from '/@/api/log/log';
  import { useModal } from '/@/components/Modal';
  import { useUserStore } from '/@/store/modules/user';
  import ContentDetailModal from './ContentDetailModal.vue';
  import { formatToDate } from '/@/utils/dateUtil';

  export default defineComponent({
    components: { BasicTable, TableAction, ContentDetailModal },
    setup() {
      const { t } = useI18n();
      const userStore = useUserStore();

      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});

      const [registerTable, { reload }] = useTable({
        api: getActionList,
        fetchSetting: {
          listField: 'list',
          totalField: 'totalCount',
          sizeField: 'pageSize',
          pageField: 'pageIndex',
        },
        columns: getTableColumns(),
        formConfig: {
          labelWidth: 120,
          schemas: getSearchFormSchema(),
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          info.userId = userStore.getUserInfo?.userId;
          info.startCreateDate = formatToDate(info.startCreateDate);
          info.endCreateDate = formatToDate(info.endCreateDate);
          return info;
        },
        actionColumn: {
          width: 120,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }

      function handleDetailView(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      return {
        t,
        registerTable,
        registerModal,
        handleDetailView,
        handleReloadCurrent,
        handleReload,
        searchInfo,
      };
    },
  });
</script>
