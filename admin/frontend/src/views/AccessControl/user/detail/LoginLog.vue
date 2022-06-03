<template>
  <BasicTable @register="registerTable" :searchInfo="searchInfo">
    <template #toolbar>
      <a-button type="primary" @click="handleReloadCurrent">{{
        t('common.reload_current')
      }}</a-button>
      <a-button type="primary" @click="handleReload">{{ t('common.reload') }}</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getSearchFormSchema, getTableColumns } from './loginLogData';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getLoginList } from '/@/api/log/log';
  import { useUserStore } from '/@/store/modules/user';
  import { formatToDate } from '/@/utils/dateUtil';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const { t } = useI18n();
      const userStore = useUserStore();

      const searchInfo = reactive<Recordable>({});

      const [registerTable, { reload }] = useTable({
        api: getLoginList,
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
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }

      return {
        t,
        registerTable,
        handleReloadCurrent,
        handleReload,
        searchInfo,
      };
    },
  });
</script>
