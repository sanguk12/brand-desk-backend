import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { InputTypeTextMap } from '/@/enums/inputTypeEnum';
import { getDictionaryTree } from '/@/api/cms/dictionary';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.cateType.id'),
    dataIndex: 'id',
  },
  {
    title: t('Content.cateType.name'),
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: t('Content.cateType.code'),
    dataIndex: 'code',
    align: 'left',
  },
  {
    title: t('Content.cateType.sort'),
    dataIndex: 'sort',
  },
  {
    title: t('AccessControl.dept.createDate'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('Content.cateType.id'),
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: t('Content.cateType.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: t('Content.cateType.code'),
    component: 'Input',
    required: true,
  },
  {
    label: t('Content.cateType.sort'),
    field: 'sort',
    component: 'InputNumber',
  },
  {
    field: 'extend',
    component: 'Input',
    label: t('Content.cateType.extend'),
    colSlot: 'extend',
    colProps: {
      span: 24,
    },
  },
];

const inputTypeOptions = Array.from(InputTypeTextMap, ([value, label]) => ({ label, value }));

export const extendFields: BasicColumn[] = [
  {
    title: t('Content.contentModel.field.id'),
    dataIndex: 'uuid',
    editComponent: 'Input',
    ifShow: false,
  },
  {
    title: t('Content.cateType.field.type'),
    dataIndex: 'inputType',
    editComponent: 'Select',
    editComponentProps: {
      options: inputTypeOptions,
    },
    editRow: true,
  },
  {
    title: t('Content.cateType.field.name'),
    dataIndex: 'name',
    editRow: true,
    editComponent: 'Input',
    align: 'left',
    editRule: true,
    width: 150,
  },
  {
    title: t('Content.cateType.field.code'),
    dataIndex: 'code',
    editComponent: 'Input',
    editRow: true,
  },
  {
    title: t('Content.cateType.field.default_value'),
    dataIndex: 'defaultValue',
    editComponent: 'Input',
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.cateType.field.dict'),
    dataIndex: 'dictionaryId',
    editComponent: 'ApiTreeSelect',
    editComponentProps: {
      api: getDictionaryTree,
      resultField: 'list',
    },
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.cateType.field.required'),
    dataIndex: 'required',
    editComponent: 'Checkbox',
    editRow: true,
  },
  {
    title: t('Content.cateType.field.max_length'),
    dataIndex: 'maxlength',
    editComponent: 'InputNumber',
    editComponentProps: {
      min: 1,
    },
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.cateType.field.desc'),
    dataIndex: 'description',
    editComponent: 'Textarea',
    editComponentProps: {
      autoSize: true,
    },
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.cateType.field.sort'),
    dataIndex: 'sort',
    editComponent: 'InputNumber',
    editRow: true,
  },
];
