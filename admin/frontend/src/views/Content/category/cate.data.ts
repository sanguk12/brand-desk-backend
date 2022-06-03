import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { getContentModelList } from '/@/api/cms/contentModel';
import { getCategoryTypeDetail, getCategoryTypeList } from '/@/api/cms/categoryType';
import { verifyCategory } from '/@/api/cms/category';
import { isEmpty } from 'lodash-es';
import getComponent from '/@/utils/contentUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.cate.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('Content.cate.name'),
    dataIndex: 'name',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.cate.code'),
    dataIndex: 'code',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.cate.type'),
    dataIndex: 'typeName',
    width: 120,
  },
  {
    title: t('Content.cate.allowContribute'),
    dataIndex: 'allowContribute',
    width: 120,
    customRender: ({ record }) => {
      const allowContribute = record.allowContribute;
      return ~~allowContribute === 1 ? 'Y' : 'N';
    },
  },
  {
    title: t('Content.cate.sort'),
    dataIndex: 'sort',
    width: 120,
  },
  {
    title: t('Content.cate.hidden'),
    dataIndex: 'hidden',
    width: 120,
    customRender: ({ record }) => {
      const hidden = record.hidden;
      return ~~hidden === 1 ? 'Y' : 'N';
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
    label: t('Content.cate.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'hidden',
    label: t('Content.cate.hidden'),
    component: 'Select',
    componentProps: {
      options: [
        { label: t('Content.cate.show'), value: 1 },
        { label: t('Content.cate.hidden'), value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'typeId',
    label: t('Content.cate.type'),
    component: 'Select',
    colProps: { span: 8 },
  },
];

export function getFormSchema() {
  const formSchema: FormSchema[] = [
    {
      field: 'id',
      label: t('Content.cate.id'),
      component: 'Input',
      show: false,
    },
    {
      field: 'parentId',
      label: t('Content.cate.parentId'),
      component: 'Input',
      show: false,
    },
    {
      field: 'name',
      label: t('Content.cate.name'),
      labelWidth: 200,
      component: 'Input',
      required: true,
    },
    {
      field: 'code',
      label: t('Content.cate.code'),
      labelWidth: 200,
      component: 'Input',
      required: true,
    },
    {
      field: 'hidden',
      label: t('Content.cate.hidden'),
      labelWidth: 200,
      component: 'RadioButtonGroup',
      defaultValue: 1,
      componentProps: {
        options: [
          { label: t('Content.cate.hidden'), value: true },
          { label: t('Content.cate.show'), value: false },
        ],
      },
      required: true,
    },
    {
      field: 'typeId',
      component: 'ApiSelect',
      label: t('Content.cate.type'),
      labelWidth: 200,
      colProps: {
        span: 24,
      },
      componentProps: {
        api: getCategoryTypeList,
        mode: 'single',
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
    },
    {
      field: 'modelList',
      component: 'ApiSelect',
      label: t('Content.cate.model'),
      labelWidth: 200,
      colProps: {
        span: 24,
      },
      componentProps: {
        api: getContentModelList,
        mode: 'multiple',
        labelField: 'name',
        valueField: 'id',
      },
    },
    {
      field: 'allowContribute',
      component: 'Checkbox',
      label: t('Content.cate.allowContribute'),
      labelWidth: 200,
      colProps: {
        span: 24,
      },
    },
    {
      label: t('Content.cate.sort'),
      labelWidth: 200,
      field: 'sort',
      component: 'InputNumber',
    },
  ];

  return formSchema;
}

export function getFormCodeSchema(id?: number) {
  const codeSchema: FormSchema = {
    field: 'code',
    label: t('Content.cate.code'),
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
            const exist = await verifyCategory(value, id);
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

export function getCateFormSchema(typeId: number) {
  return new Promise<FormSchema[]>((resolve) => {
    getCategoryTypeDetail(typeId).then((cateType) => {
      const formSchema: FormSchema[] = [
        {
          field: 'categoryId',
          label: t('Content.cate.id'),
          component: 'Input',
          show: false,
        },
      ];

      if (!isEmpty(cateType?.extend?.fieldList)) {
        cateType?.extend?.fieldList!.forEach((extendField) => {
          formSchema.push(getComponent(extendField, ''));
        });
      }

      resolve(formSchema);
    });
  });
}
