import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { verifyDictionary } from '/@/api/cms/dictionary';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.dict.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('Content.dict.name'),
    dataIndex: 'name',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.dict.code'),
    dataIndex: 'code',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.dict.parentId'),
    dataIndex: 'parentId',
    width: 120,
  },
  {
    title: t('Content.dict.parentData'),
    dataIndex: 'parentData',
    width: 120,
  },
  {
    title: t('Content.dict.multiple'),
    dataIndex: 'multiple',
    width: 120,
    customRender: ({ record }) => {
      const multiple = record.multiple;
      return ~~multiple === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('Content.dict.hasChild'),
    dataIndex: 'hasChild',
    width: 120,
    customRender: ({ record }) => {
      const hasChild = record.hasChild;
      return ~~hasChild === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('Content.dict.createDate'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('Content.dict.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'code',
    label: t('Content.dict.code'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export function getFormSchema() {
  const formSchema: FormSchema[] = [
    {
      field: 'id',
      label: t('Content.dict.id'),
      component: 'Input',
      show: false,
    },
    {
      field: 'parentId',
      label: t('Content.dict.parentId'),
      component: 'Input',
      show: false,
    },
    {
      field: 'parentData',
      label: t('Content.dict.parentData'),
      component: 'Input',
      show: false,
    },
    {
      field: 'code',
      label: t('Content.dict.code'),
      labelWidth: 200,
      component: 'Input',
      required: true,
    },
    {
      field: 'name',
      label: t('Content.dict.name'),
      labelWidth: 200,
      component: 'Input',
    },
    {
      field: 'multiple',
      component: 'Checkbox',
      label: t('Content.dict.multiple'),
      labelWidth: 200,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'hasChild',
      component: 'Checkbox',
      label: t('Content.dict.hasChild'),
      labelWidth: 200,
      colProps: {
        span: 12,
      },
    },
    {
      field: '',
      component: 'Divider',
      label: '',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'itemList',
      component: 'Input',
      label: t('Content.cateType.itemList'),
      colSlot: 'itemList',
      colProps: {
        span: 24,
      },
    },
  ];

  return formSchema;
}

export function getFormCodeSchema(id?: number) {
  const codeSchema: FormSchema = {
    field: 'code',
    label: t('Content.dict.code'),
    labelWidth: 200,
    component: 'Input',
    required: true,
    dynamicRules: ({}) => {
      return [
        {
          required: true,
          validator: async (_, value) => {
            if (!value) {
              return Promise.reject(t('common.not_empty'));
            }
            const exist = await verifyDictionary(value, id);
            if (!exist) {
              return Promise.reject(t('common.exist'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
  };

  return codeSchema;
}

export const itemColumns: BasicColumn[] = [
  {
    title: t('Content.dict.item.uuid'),
    dataIndex: 'uuid',
    editComponent: 'Input',
    ifShow: false,
  },
  {
    title: t('Content.dict.item.id'),
    dataIndex: 'id',
    editComponent: 'Input',
    ifShow: false,
  },
  {
    title: t('Content.dict.item.parentId'),
    dataIndex: 'parentId',
    editComponent: 'Input',
    ifShow: false,
  },
  {
    title: t('Content.dict.item.parentData'),
    dataIndex: 'parentData',
    editComponent: 'Input',
    ifShow: false,
  },
  {
    title: t('Content.dict.item.value'),
    dataIndex: 'value',
    editRow: true,
    editComponent: 'Input',
    align: 'left',
    editRule: true,
    width: 100,
  },
  {
    title: t('Content.dict.item.text'),
    dataIndex: 'text',
    editRow: true,
    editComponent: 'Input',
    align: 'left',
    editRule: true,
    width: 100,
  },
  {
    title: t('Content.dict.item.sort'),
    dataIndex: 'sort',
    editComponent: 'InputNumber',
    width: 100,
    editRow: true,
  },
];
