<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="t('AccessControl.dept.edit_category')"
    @ok="handleOk"
    :cancelButtonProps="{ hidden: true }"
    :width="800"
    :min-height="400"
  >
    <Row>
      <Col :span="24">
        <Checkbox v-model:checked="ownsAllCategory" @change="handleOwnsAllCategory">{{
          t('AccessControl.dept.own_all_cate')
        }}</Checkbox>
      </Col>
      <Divider />
      <Col :span="24">
        <BasicTable
          ref="deptCateTable"
          @register="registerTable"
          :searchInfo="searchInfo"
          :beforeEditSubmit="beforeEditSubmit"
        >
          <template #action="{ record }">
            <TableAction
              :stop-button-propagation="true"
              :actions="[
                {
                  icon: 'bi:file-arrow-up',
                  onClick: handleUp.bind(null, record),
                  ifShow: record.parentId != null,
                },
                {
                  icon: 'bi:file-arrow-down',
                  onClick: handleDown.bind(null, record),
                  ifShow: !record.isLeaf,
                },
              ]"
            />
          </template>
        </BasicTable>
      </Col>
    </Row>
  </BasicModal>
</template>
<script lang="ts">
  import { Checkbox, Col, Divider, Row } from 'ant-design-vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { defineComponent, reactive, ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';

  import { isEmpty } from 'lodash-es';

  import { columns } from './dept.category.data';
  import { getDeptCateList, saveDeptCate, saveOwnAllCategory } from '/@/api/sys/dept';

  export default defineComponent({
    name: 'DeptCategoryManagement',
    components: { BasicTable, BasicModal, TableAction, Checkbox, Col, Divider, Row },
    setup() {
      const { t } = useI18n();

      const searchInfo = reactive<Recordable>({ deptId: null, cateId: null, parentCate: false });
      const checkedKeys = ref<Array<string | number>>([]);
      const loading = ref(false);
      const deptCateTable = ref<ElRef>(null);

      const ownsAllCategory = ref(false);

      async function getDeptCategoryList() {
        return getDeptCateList(searchInfo);
      }

      const [registerTable, { reload }] = useTable({
        isTreeTable: false,
        api: getDeptCategoryList,
        columns,
        rowKey: 'id',
        pagination: false,
        striped: false,
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        immediate: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 80,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        ownsAllCategory.value = data.record.ownsAllCategory;
        searchInfo.deptId = data.record.id;
        searchInfo.cateId = null;
        await reload();
      });

      function handleOk() {
        closeModal();
      }

      function handleUp(record: Recordable) {
        searchInfo.cateId = record.parentId;
        searchInfo.parentCate = true;
        reload();
      }

      function handleDown(record: Recordable) {
        searchInfo.cateId = record.id;
        searchInfo.parentCate = false;
        reload();
      }

      function beforeEditSubmit({ record, key, value }) {
        try {
          setModalProps({ confirmLoading: true });
          loading.value = true;

          saveDeptCate(searchInfo.deptId, [
            {
              id: record.id,
              selected: key === 'selected' ? value : record.selected,
              containChild: key === 'containChild' ? value : record.containChild,
            },
          ]);
        } finally {
          setModalProps({ confirmLoading: false });
          loading.value = false;
        }
      }

      function handleOwnsAllCategory() {
        try {
          setModalProps({ confirmLoading: true });
          loading.value = true;

          saveOwnAllCategory(searchInfo.deptId, ownsAllCategory.value);
        } finally {
          setModalProps({ confirmLoading: false });
          loading.value = false;
        }
      }

      return {
        t,
        isEmpty,
        loading,
        deptCateTable,
        ownsAllCategory,
        registerTable,
        registerModal,
        handleOk,
        handleUp,
        handleDown,
        beforeEditSubmit,
        handleOwnsAllCategory,
        checkedKeys,
        searchInfo,
      };
    },
  });
</script>
