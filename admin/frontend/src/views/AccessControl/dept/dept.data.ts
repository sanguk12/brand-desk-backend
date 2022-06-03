import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('AccessControl.dept.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('AccessControl.dept.name'),
    dataIndex: 'name',
    width: 150,
    align: 'left',
  },
  {
    title: t('AccessControl.dept.ownsAllCategory'),
    dataIndex: 'ownsAllCategory',
    width: 120,
    customRender: ({ record }) => {
      const ownsAllCategory = record.ownsAllCategory;
      return ~~ownsAllCategory === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.dept.ownsAllPage'),
    dataIndex: 'ownsAllPage',
    width: 120,
    customRender: ({ record }) => {
      const ownsAllPage = record.ownsAllPage;
      return ~~ownsAllPage === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.dept.ownsAllConfig'),
    dataIndex: 'ownsAllConfig',
    width: 120,
    customRender: ({ record }) => {
      const ownsAllConfig = record.ownsAllConfig;
      return ~~ownsAllConfig === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.dept.manager'),
    dataIndex: 'managerName',
  },
  {
    title: t('AccessControl.dept.description'),
    dataIndex: 'description',
  },
  {
    title: t('AccessControl.dept.status'),
    dataIndex: 'status',
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? t('AccessControl.dept.enabled') : t('AccessControl.dept.disabled');
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: t('AccessControl.dept.createDate'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('AccessControl.dept.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: t('AccessControl.dept.status'),
    component: 'Select',
    componentProps: {
      options: [
        { label: t('AccessControl.dept.enabled'), value: 1 },
        { label: t('AccessControl.dept.disabled'), value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('AccessControl.role.id'),
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: t('AccessControl.dept.name'),
    labelWidth: 200,
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('AccessControl.dept.status'),
    labelWidth: 200,
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('AccessControl.dept.enabled'), value: 1 },
        { label: t('AccessControl.dept.disabled'), value: 0 },
      ],
    },
    required: true,
  },
  {
    field: 'parentId',
    label: t('AccessControl.dept.parent'),
    labelWidth: 200,
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'managerId',
    component: 'Select',
    label: t('AccessControl.dept.manager'),
    labelWidth: 200,
    slot: 'userSearch',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'ownsAllCategory',
    component: 'Checkbox',
    label: t('AccessControl.dept.ownsAllCategory'),
    labelWidth: 200,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'ownsAllPage',
    component: 'Checkbox',
    label: t('AccessControl.dept.ownsAllPage'),
    labelWidth: 200,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'ownsAllConfig',
    component: 'Checkbox',
    label: t('AccessControl.dept.ownsAllConfig'),
    labelWidth: 200,
    colProps: {
      span: 24,
    },
  },
  {
    label: t('AccessControl.dept.description'),
    labelWidth: 200,
    field: 'description',
    component: 'InputTextArea',
  },
];
