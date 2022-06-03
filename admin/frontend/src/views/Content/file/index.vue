<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <BasicUpload
          :api="uploadApi"
          :maxNumber="100"
          :uploadParams="{ path: pathList.join('/') }"
          :emptyHidePreview="true"
          @change="handleUploadChange"
          v-model:value="uploadedList"
        />
        <a-button
          type="primary"
          preIcon="bi:file-arrow-up"
          @click="handleUp"
          v-if="pathList.length > 0"
          >{{ t('Content.file.go_parent') }}
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: 'Deletion Confirm',
                confirm: handleDelete.bind(null, record),
              },
            },
            {
              icon: 'ph:file-zip-fill',
              onClick: handleZip.bind(null, record),
              ifShow: record.directory,
            },
            {
              icon: 'ph:file-zip-light',
              onClick: handleUnzip.bind(null, record),
              ifShow: endsWith(record.fileName, '.zip'),
            },
            {
              icon: 'tabler:file-arrow-right',
              onClick: handleDown.bind(null, record),
              ifShow: record.directory,
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { useMessage } from '/@/hooks/web/useMessage';
  import { uploadApi } from '/@/api/sys/upload';

  import { columns } from './file.data';
  import { createZip, deleteFile, getFileList, unzip } from '/@/api/cms/webFile';
  import BasicUpload from '/@/components/Upload/src/BasicUpload.vue';
  import { UploadListProps } from 'ant-design-vue';
  import { cloneDeep, endsWith } from 'lodash-es';

  export default defineComponent({
    name: 'ModuleManagement',
    components: { BasicUpload, BasicTable, TableAction },
    setup() {
      const { t } = useI18n();
      const uploadedList = ref<UploadListProps[]>([]);
      const pathList = ref<string[]>([]);

      const { createSuccessModal } = useMessage();

      async function getModuleData() {
        return getFileList({ path: pathList.value.join('/') });
      }

      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: t('Content.file.list'),
        isTreeTable: false,
        api: getModuleData,
        columns,
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

      async function handleDelete(record: Recordable) {
        const path = cloneDeep(pathList.value);
        path.push(record.fileName);
        const result = await deleteFile(path.join('/'));
        console.log(result);
        createSuccessModal({
          title: t('common.info'),
          content: t('Content.file.deleted'),
        });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleUp() {
        if (pathList.value.length > 0) {
          pathList.value.pop();
        }
        reload();
      }

      async function handleZip(record: Recordable) {
        const path = cloneDeep(pathList.value);
        path.push(record.fileName);
        await createZip(path.join('/'));

        reload();
      }

      async function handleUnzip(record: Recordable) {
        const path = cloneDeep(pathList.value);
        path.push(record.fileName);
        await unzip(path.join('/'));

        reload();
      }

      function handleDown(record: Recordable) {
        pathList.value.push(record.fileName);
        reload();
      }

      function handleUploadChange(_record: Recordable) {
        uploadedList.value = [];
        reload();
      }

      return {
        t,
        expandAll,
        collapseAll,
        registerTable,
        handleDelete,
        handleSuccess,
        handleUp,
        handleUnzip,
        handleZip,
        handleDown,
        uploadApi,
        handleUploadChange,
        uploadedList,
        pathList,
        endsWith,
      };
    },
  });
</script>
