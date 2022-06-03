import { getRoleList } from '/@/api/sys/role';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { getDeptList } from '/@/api/sys/dept';
import { useI18n } from '/@/hooks/web/useI18n';
import { Switch, Tag } from 'ant-design-vue';
import { h } from 'vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { enableUser, disableUser } from '/@/api/sys/user';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('AccessControl.user.username'),
    dataIndex: 'username',
    width: 100,
  },
  {
    title: t('AccessControl.user.nickname'),
    dataIndex: 'nickname',
    width: 100,
  },
  {
    title: t('AccessControl.user.email'),
    dataIndex: 'email',
    width: 120,
  },
  {
    title: t('AccessControl.user.dept'),
    dataIndex: 'deptName',
    width: 130,
  },
  {
    title: t('AccessControl.user.role'),
    dataIndex: 'roles',
    width: 150,
    customRender: ({ record }) => {
      const roles = record.roles;
      const items: any[] = [];
      for (const role of roles) {
        items.push(
          <Tag key="{value.id}" color="blue">
            {role.name}
          </Tag>,
        );
      }
      return <span>{items}</span>;
    },
  },
  {
    title: t('AccessControl.user.status'),
    dataIndex: 'disabled',
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'disabled')) {
        record.disabled = false;
      }
      return h(Switch, {
        checked: record.disabled,
        checkedChildren: t('AccessControl.user.status_disabled'),
        unCheckedChildren: t('AccessControl.user.status_enabled'),
        loading: record.pendingStatus,
        async onChange(checked: boolean) {
          record.pendingStatus = true;

          const { createMessage } = useMessage();
          if (checked) {
            await disableUser(record.id);
            record.disabled = true;
          } else {
            await enableUser(record.id);
            record.disabled = false;
          }
          createMessage.success(t('AccessControl.user.status_updated'));
          record.pendingStatus = false;
        },
      });
    },
  },
  {
    title: t('AccessControl.user.locked'),
    dataIndex: 'locked',
    width: 100,
    customRender: ({ record }) => {
      return record.locked ? t('AccessControl.user.invalid') : t('AccessControl.user.valid');
    },
  },
  {
    title: t('AccessControl.user.create_date'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('AccessControl.user.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: t('AccessControl.user.nickname'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const userFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('AccessControl.user.id'),
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: t('AccessControl.user.username'),
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
    field: 'admin',
    component: 'Checkbox',
    label: t('AccessControl.user.admin'),
    colProps: {
      span: 24,
    },
  },
  {
    field: 'ownsAllContent',
    component: 'Checkbox',
    label: t('AccessControl.user.all_content'),
    colProps: {
      span: 24,
    },
  },
  {
    field: 'password',
    label: t('AccessControl.user.password'),
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
    label: t('AccessControl.user.password_confirm'),
    labelWidth: 200,
    component: 'InputPassword',
    required: true,
    ifShow: false,
    colProps: {
      span: 24,
    },
  },
  {
    label: t('AccessControl.user.role'),
    field: 'roleIds',
    component: 'ApiSelect',
    componentProps: {
      mode: 'multiple',
      api: getRoleList,
      resultField: 'list',
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
    },
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'deptId',
    label: t('AccessControl.user.dept'),
    component: 'ApiTreeSelect',
    componentProps: {
      resultField: 'list',
      api: getDeptList,
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
    },
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'nickname',
    label: t('AccessControl.user.nickname'),
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },

  {
    label: t('AccessControl.user.email'),
    field: 'email',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    label: t('AccessControl.user.email_verified'),
    field: 'email',
    component: 'Checkbox',
    required: true,
    colProps: {
      span: 24,
    },
  },
];
