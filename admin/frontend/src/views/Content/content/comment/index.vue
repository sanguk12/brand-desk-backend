<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">{{ t('Content.comment.add') }} </a-button>
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
          ]"
        />
      </template>
    </BasicTable>
    <CommentModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import CommentModal from './CommentModal.vue';

  import { columns, searchFormSchema } from './comment.data';
  import {deleteComment, getCommentList} from "/@/api/cms/comment";
  import {CommentListGetResultModel} from "/@/api/cms/model/comment";
  import {useRoute} from "vue-router";

  export default defineComponent({
    name: 'CommentManagement',
    components: { BasicTable, CommentModal, TableAction },
    setup() {
      const route = useRoute();
      const { t } = useI18n();

      const contentId = route.params?.id as unknown as number;

      const searchInfo = reactive<Recordable>({ status: null, contentId });

      const { createSuccessModal } = useMessage();

      async function getCommentData() {
        return new Promise<CommentListGetResultModel>(async (resolve) => {
          const commentList = await getCommentList(searchInfo);
          resolve(commentList);
        });
      }

      const [registerModal, { openModal }] = useModal();

      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('Content.comment.list'),
        isTreeTable: false,
        api: getCommentData,
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

      async function handleDelete(record: Recordable) {
        const result = await deleteComment(record.id);
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('Content.comment.deleted'),
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
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
