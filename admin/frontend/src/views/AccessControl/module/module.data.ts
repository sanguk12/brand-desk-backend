import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { ModuleTypeEnum, moduleTypeTextMap } from '/@/enums/moduleEnum';
import { formatToDate } from '/@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('AccessControl.module.id'),
    dataIndex: 'id',
    width: 150,
  },
  {
    title: t('AccessControl.module.koName'),
    dataIndex: 'koName',
    width: 150,
    align: 'left',
  },
  {
    title: t('AccessControl.module.enName'),
    dataIndex: 'enName',
    width: 150,
    align: 'left',
  },
  {
    title: t('AccessControl.module.type'),
    dataIndex: 'type',
    width: 120,
    customRender: ({ record }) => {
      return moduleTypeTextMap.get(record.type);
    },
  },
  {
    title: t('AccessControl.module.sort'),
    dataIndex: 'sort',
    width: 120,
  },
  {
    title: t('AccessControl.module.hidden'),
    dataIndex: 'hidden',
    width: 120,
    customRender: ({ record }) => {
      const hidden = record.hidden;
      return ~~hidden === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('AccessControl.module.createDate'),
    dataIndex: 'createDate',
    format: (_text, record, _index) => {
      if (record.createDate === null) {
        return '';
      }
      return formatToDate(record.createDate, 'YYYY-MM-DD HH:mm:ss');
    }, // 'date|YYYY-MM-DD HH:mm:ss',
    width: 130,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('AccessControl.module.id'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'hidden',
    label: t('AccessControl.module.hidden'),
    component: 'Select',
    componentProps: {
      options: [
        { label: t('AccessControl.module.show'), value: 1 },
        { label: t('AccessControl.module.hidden'), value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'type',
    label: t('AccessControl.module.type'),
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        {
          label: moduleTypeTextMap.get(ModuleTypeEnum.MENU),
          value: ModuleTypeEnum.MENU,
          key: ModuleTypeEnum.MENU,
        },
        {
          label: moduleTypeTextMap.get(ModuleTypeEnum.ACTION),
          value: ModuleTypeEnum.ACTION,
          key: ModuleTypeEnum.ACTION,
        },
      ],
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'oldId',
    label: t('AccessControl.module.id'),
    component: 'Input',
    show: false,
  },
  {
    field: 'parentId',
    label: t('AccessControl.module.parentId'),
    component: 'Input',
    show: false,
  },
  {
    field: 'id',
    label: t('AccessControl.module.id'),
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'enName',
    label: t('AccessControl.module.enName'),
    labelWidth: 100,
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'koName',
    label: t('AccessControl.module.koName'),
    labelWidth: 100,
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'component',
    label: t('AccessControl.module.component'),
    labelWidth: 100,
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'url',
    label: t('AccessControl.module.url'),
    labelWidth: 100,
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'icon',
    label: t('AccessControl.module.icon'),
    labelWidth: 100,
    component: 'IconPicker',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'meta',
    label: t('AccessControl.module.meta'),
    labelWidth: 100,
    component: 'CodeEditor',
    componentProps: {
      mode: 'application/json',
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'alias',
    label: t('AccessControl.module.alias'),
    labelWidth: 100,
    component: 'InputTextArea',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'redirect',
    label: t('AccessControl.module.redirect'),
    labelWidth: 100,
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'hidden',
    label: t('AccessControl.module.hidden'),
    labelWidth: 100,
    component: 'Checkbox',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'menu',
    label: t('AccessControl.module.menu'),
    labelWidth: 100,
    component: 'Checkbox',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'authorizedUrl',
    component: 'InputTextArea',
    label: t('AccessControl.module.authorizedUrl'),
    labelWidth: 100,
    componentProps: {
      minRows: 5,
      maxRows: 15,
    },
    colProps: {
      span: 24,
    },
  },
  {
    label: t('AccessControl.module.sort'),
    labelWidth: 100,
    field: 'sort',
    component: 'InputNumber',
    colProps: {
      span: 24,
    },
  },
];
