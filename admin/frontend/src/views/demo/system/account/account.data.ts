import { getRoleList } from '/@/api/sys/role';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { getDeptList } from '/@/api/sys/dept';

export const columns: BasicColumn[] = [
  {
    title: 'Username',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: 'Mail',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: 'Creation time',
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
  {
    title: 'Role',
    dataIndex: 'roles',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: 'Name',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: 'Nick name',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: 'Username',
    component: 'Input',
    helpMessage: [
      'This field demonstrates asynchronous validation',
      'Cannot enter username with admin',
    ],
    colProps: {
      span: 24,
    },
  },
  {
    field: 'isAdmin',
    component: 'Checkbox',
    label: 'Administrator',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'ownsAllContent',
    component: 'Checkbox',
    label: 'Manage all contents',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'password',
    label: 'Password',
    labelWidth: 200,
    component: 'InputPassword',
    required: true,
    ifShow: false,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'repassword',
    label: 'Password Confirm',
    labelWidth: 200,
    component: 'InputPassword',
    required: true,
    ifShow: false,
    colProps: {
      span: 24,
    },
  },
  {
    label: 'Role',
    field: 'roles',
    component: 'ApiTreeSelect',
    componentProps: {
      mode: 'multiple',
      api: getRoleList,
      resultField: 'list',
      labelField: 'name',
      valueField: 'id',
    },
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'deptId',
    label: 'Department',
    component: 'ApiTreeSelect',
    componentProps: {
      api: getDeptList,
      resultField: 'list',
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'nickname',
    label: 'Nickname',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },

  {
    label: 'Mail',
    field: 'email',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
];
