<template>
  <div class="p-4">
    <BasicTable @register="registerTable" ref="itemTableRef" :pagination="false">
      <template #toolbar>
        <a-button type="primary" @click="addNewField">
          {{ t('Content.dict.add_row') }}
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
              icon: 'carbon:parent-child',
              color: 'error',
              ifShow: hasChild && record.id != null,
              popConfirm: {
                title: 'Add Child',
                confirm: handleAddChild.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType, ref, unref, watch} from 'vue';
  import { BasicTable, TableActionType, TableAction, useTable } from '/@/components/Table';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { v4 as uuid } from 'uuid';
  import { DictionaryItem } from '/@/api/cms/model/dictionary';
  import { itemColumns } from './dict.data';
  import {cloneDeep} from "lodash-es";

  export default defineComponent({
    components: { BasicTable, TableAction },
    props: {
      value: Object as PropType<DictionaryItem[]>,
      hasChild: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['add-child'],
    setup(props, { emit }) {
      const { t } = useI18n();

      const itemList = ref<DictionaryItem[]>([]);
      const itemTableRef = ref<Nullable<TableActionType>>(null);

      const dictItemList = cloneDeep(props.value);

      const newItemList = dictItemList ? dictItemList : ([] as any[]);
      newItemList.map((f) => {
        f.editRow = true;
        f.editable = true;
        f.uuid = uuid();
      });
      itemList.value = newItemList;

      const [ registerTable, { setTableData, reload } ] = useTable({
        title: t('Content.dict.item_list'),
        titleHelpMessage: [t('Content.dict.item_list_desc')],
        dataSource: itemList,
        columns: itemColumns,
        showIndexColumn: false,
        showTableSetting: false,
        tableSetting: { fullScreen: true },
        // rowKey: 'uuid',
        actionColumn: {
          width: 100,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function getTableAction() {
        const tableAction = unref(itemTableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }

      function addNewField() {
        getTableAction().insertTableDataRecord({
          id: null,
          editRow: true,
          editable: true,
          uuid: uuid(),
        });
      }

      function handleDelete(record: Recordable) {
        getTableAction().deleteTableDataRecordByQuery({uuid: record.uuid});
      }

      function handleAddChild(record: Recordable) {
        emit('add-child', record.id);
      }

      function validate() {
        const dataSource = getTableAction().getDataSource();
        const itemList = dataSource.map(function (obj) {
          return { ...obj.editValueRefs, id: obj.id };
        });
        return itemList;
      }

      watch(
        () => props.value,
        (dictItemList: DictionaryItem[]) => {
          const newItemList = dictItemList ? dictItemList : ([] as any[]);
          newItemList.map((f) => {
            f.editRow = true;
            f.editable = true;
            f.uuid = uuid();
          });
          itemList.value = newItemList;
          setTableData(itemList.value);
          reload();
        },
      );
      return {
        t,
        itemTableRef,
        registerTable,
        itemList,
        validate,
        handleDelete,
        addNewField,
        handleAddChild,
      };
    },
  });
</script>
