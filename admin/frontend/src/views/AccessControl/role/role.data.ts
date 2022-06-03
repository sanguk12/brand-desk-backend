import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('AccessControl.role.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('AccessControl.role.name'),
    dataIndex: 'name',
    width: 150,
    align: 'left',
  },
  {
    title: t('AccessControl.role.ownsAllRight'),
    dataIndex: 'ownsAllRight',
    width: 120,
    customRender: ({ record }) => {
      const ownsAllRight = record.ownsAllRight;
      return ~~ownsAllRight === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.role.showAllModule'),
    dataIndex: 'ownsAllPage',
    width: 120,
    customRender: ({ record }) => {
      const showAllModule = record.showAllModule;
      return ~~showAllModule === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.role.description'),
    dataIndex: 'description',
  },
  {
    title: t('AccessControl.role.status'),
    dataIndex: 'status',
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? t('AccessControl.role.enabled') : t('AccessControl.role.disabled');
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: t('AccessControl.role.createDate'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('AccessControl.role.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: t('AccessControl.role.status'),
    component: 'Select',
    componentProps: {
      options: [
        { label: t('AccessControl.role.enabled'), value: 1 },
        { label: t('AccessControl.role.disabled'), value: 0 },
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
    label: t('AccessControl.role.name'),
    labelWidth: 200,
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: t('AccessControl.role.code'),
    labelWidth: 200,
    component: 'Input',
    required: true,
  },
  {
    field: 'status',
    label: t('AccessControl.role.status'),
    labelWidth: 200,
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('AccessControl.role.enabled'), value: 1 },
        { label: t('AccessControl.role.disabled'), value: 0 },
      ],
    },
    required: true,
  },
  {
    field: 'ownsAllRight',
    component: 'Checkbox',
    label: t('AccessControl.role.ownsAllRight'),
    labelWidth: 200,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'showAllModule',
    component: 'Checkbox',
    label: t('AccessControl.role.showAllModule'),
    labelWidth: 200,
    colProps: {
      span: 24,
    },
  },
  {
    label: t('AccessControl.role.description'),
    labelWidth: 200,
    field: 'description',
    component: 'InputTextArea',
  },
];
