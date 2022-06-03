<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('Content.dict.add') }} </a-button>
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
              ifShow: record.hasChild,
            },
          ]"
        />
      </template>
    </BasicTable>
    <DictModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import DictModal from './DictModal.vue';

  import { columns, searchFormSchema } from './dict.data';
  import { deleteCate } from '/@/api/cms/category';
  import { isEmpty } from 'lodash-es';
  import { getDictionaryList } from '/@/api/cms/dictionary';
  import { DictionaryListGetResultModel } from '/@/api/cms/model/dictionary';

  export default defineComponent({
    name: 'DictManagement',
    components: { BasicTable, DictModal, TableAction },
    setup() {
      const { t } = useI18n();
      const searchInfo = reactive<Recordable>({
        parent: false,
        parentId: null,
        name: null,
        code: null,
      });

      const { createSuccessModal } = useMessage();

      async function getDictionaryData() {
        return new Promise<DictionaryListGetResultModel>(async (resolve) => {
          const dictionary = await getDictionaryList(searchInfo);
          if (!isEmpty(dictionary.list)) {
            const dict = dictionary.list[0];
            searchInfo.parentId = dict.parentId;
            searchInfo.parent = false;
          }

          resolve(dictionary);
        });
      }

      const [registerModal, { openModal }] = useModal();

      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('Content.dict.list'),
        isTreeTable: false,
        api: getDictionaryData,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        fetchSetting: {
          listField: 'list',
          totalField: 'totalCount',
          sizeField: 'pageSize',
          pageField: 'pageIndex',
        },
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        pagination: true,
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

      async function handleDelete(record: Recordable) {
        const result = await deleteCate(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('Content.dict.deleted'),
        });
        await reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleUp() {
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
