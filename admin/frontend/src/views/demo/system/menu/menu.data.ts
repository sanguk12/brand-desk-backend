import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [
  {
    title: 'menu name',
    dataIndex: 'menuName',
    width: 200,
    align: 'left',
  },
  {
    title: 'icon',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: 'Permission',
    dataIndex: 'permission',
    width: 180,
  },
  {
    title: 'components',
    dataIndex: 'component',
  },
  {
    title: 'Sort',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? 'Enabled' : 'Disabled';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: 'creation time',
    dataIndex: 'createTime',
    width: 180,
  },
];

const isDir = (type: string) => type === '0';
const isMenu = (type: string) => type === '1';
const isButton = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'menuName',
    label: 'menu name',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: 'state',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'Enabled', value: '0' },
        { label: 'Disabled', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: 'menu Type',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'content', value: '0' },
        { label: 'menu', value: '1' },
        { label: 'button', value: '2' },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'menuName',
    label: 'menu name',
    component: 'Input',
    required: true,
  },

  {
    field: 'parentMenu',
    label: 'Parent Menu',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'menuName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },

  {
    field: 'orderNo',
    label: 'Sort',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'icon',
    label: 'Icon',
    component: 'IconPicker',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'routePath',
    label: 'routing address',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'component',
    label: 'component path',
    component: 'Input',
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'permission',
    label: 'Permission',
    component: 'Input',
    ifShow: ({ values }) => !isDir(values.type),
  },
  {
    field: 'status',
    label: 'Status',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'Enabled', value: '0' },
        { label: 'Disabled', value: '1' },
      ],
    },
  },
  {
    field: 'isExt',
    label: 'Whether external chain',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'no', value: '0' },
        { label: 'Yes', value: '1' },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'keepalive',
    label: 'Whether to cache',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'No', value: '0' },
        { label: 'Yes', value: '1' },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },

  {
    field: 'show',
    label: 'whether to display',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'No', value: '0' },
        { label: 'Yes', value: '1' },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
];
