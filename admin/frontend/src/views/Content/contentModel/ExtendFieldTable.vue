<template>
  <div class="p-4">
    <BasicTable @register="registerTable" ref="extendFieldTableRef" :pagination="false">
      <template #toolbar>
        <a-button type="primary" @click="addNewField">
          {{ t('Content.contentModel.add_field') }}
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
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, unref } from 'vue';
  import { BasicTable, TableActionType, TableAction, useTable } from '/@/components/Table';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { extendFields } from './content.model.data';
  import { ExtendFieldItem } from '/@/api/cms/model/model';
  import { InputTypeEnum } from '/@/enums/inputTypeEnum';
  import { v4 as uuid } from 'uuid';
  import { cloneDeep } from 'lodash-es';

  export default defineComponent({
    components: { BasicTable, TableAction },
    props: {
      value: Object as PropType<ExtendFieldItem[]>,
    },
    setup(props) {
      const { t } = useI18n();

      const extendFieldList = ref<ExtendFieldItem[]>([]);
      const extendFieldTableRef = ref<Nullable<TableActionType>>(null);

      const fieldList = cloneDeep(props.value);
      const newFieldList = fieldList ? fieldList : ([] as any[]);
      newFieldList.map((f) => {
        f.inputType = f.inputType ? f.inputType : InputTypeEnum.TEXT;
        f.editRow = true;
        f.editable = true;
        f.uuid = uuid();
      });
      extendFieldList.value = newFieldList;

      const [registerTable] = useTable({
        title: t('Content.contentModel.field_list'),
        titleHelpMessage: [t('Content.contentModel.field_list_desc')],
        dataSource: extendFieldList,
        columns: extendFields,
        showIndexColumn: false,
        showTableSetting: false,
        tableSetting: { fullScreen: true },
        actionColumn: {
          width: 100,
          title: t('common.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function getTableAction() {
        const tableAction = unref(extendFieldTableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }

      function addNewField() {
        getTableAction().insertTableDataRecord({
          editRow: true,
          editable: true,
          inputType: InputTypeEnum.TEXT,
          uuid: uuid(),
        });
      }

      function handleDelete(record: Recordable) {
        getTableAction().deleteTableDataRecordByQuery({uuid: record.uuid});
      }

      function validate() {
        let extendFields = getTableAction().getDataSource();

        extendFields = extendFields.map(function (obj) {
          return { ...obj.editValueRefs };
        });

        return extendFields;
      }

      return {
        t,
        extendFieldTableRef,
        registerTable,
        extendFieldList,
        validate,
        handleDelete,
        addNewField,
      };
    },
  });
</script>
