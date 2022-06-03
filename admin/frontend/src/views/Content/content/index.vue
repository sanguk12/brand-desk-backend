<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <CateTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar v-if="modelList.length > 0">
        <a-button type="primary" @click="handleCreate">{{ t('Content.content.add') }}</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: t('Content.content.detail'),
              onClick: handleView.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: t('Content.content.edit'),
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <ContentModal @register="registerModal" @success="handleSuccess" />
    <ModelSelectModal @register="registerSelectModelModal" @success="handleSelectModelSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import CateTree from './CateTree.vue';

  import { useModal } from '/@/components/Modal';
  import ContentModal from './ContentModal.vue';
  import ModelSelectModal from './ModelSelectModal.vue';

  import { columns, searchFormSchema } from './content.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getContentList } from '/@/api/cms/content';
  import { ContentModelListItem } from '/@/api/cms/model/contentModel';
  import { getCategoryModeList } from '/@/api/cms/category';

  export default defineComponent({
    name: 'ContentManagement',
    components: { BasicTable, PageWrapper, CateTree, ContentModal, ModelSelectModal, TableAction },
    setup() {
      const go = useGo();
      const { t } = useI18n();

      const [registerModal, { openModal }] = useModal();
      const [registerSelectModelModal, { openModal: openSelectModelModal }] = useModal();

      const searchInfo = reactive<Recordable>({});
      const modelList = ref<ContentModelListItem[]>([]);

      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: t('Content.content.list'),
        api: getContentList,
        fetchSetting: {
          listField: 'list',
          totalField: 'totalCount',
          sizeField: 'pageSize',
          pageField: 'pageIndex',
        },
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        if (modelList.value.length === 1) {
          openModal(true, {
            isUpdate: false,
            record: { modelId: modelList.value[0].id, categoryId: searchInfo.categoryIds[0] },
          });
        } else {
          openSelectModelModal(true, {
            modelList: modelList,
          });
        }
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      async function handleSelect(categoryId: number) {
        searchInfo.categoryIds = [categoryId];
        modelList.value = await getCategoryModeList(categoryId);

        await reload();
      }

      function handleSelectModelSuccess({ modeId }) {
        openModal(true, {
          isUpdate: false,
          record: { modelId: modeId, categoryId: searchInfo.categoryIds[0] },
        });
      }

      function handleView(record: Recordable) {
        go('/content/content/' + record.id);
      }

      return {
        t,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleSuccess,
        handleSelect,
        handleView,
        registerSelectModelModal,
        handleSelectModelSuccess,
        searchInfo,
        modelList,
      };
    },
  });
</script>
