import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { InputTypeEnum, InputTypeTextMap } from '/@/enums/inputTypeEnum';
import { getDictionaryTree } from '/@/api/cms/dictionary';
import { getContentModelList } from '/@/api/cms/contentModel';
import { Badge, Switch } from 'ant-design-vue';
import { h } from 'vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { setRoleStatus } from '/@/api/demo/system';
import { ApiSelect } from '/@/components/Form';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.contentModel.id'),
    dataIndex: 'id',
  },
  {
    title: t('Content.contentModel.name'),
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: t('Content.contentModel.description'),
    dataIndex: 'description',
    align: 'left',
  },
  {
    title: t('Content.contentModel.hasChild'),
    dataIndex: 'hasChild',
    customRender: ({ record }) => {
      return record.hasChild ? 'Y' : 'N';
    },
  },
  {
    title: t('Content.contentModel.hasImages'),
    dataIndex: 'hasImages',
    customRender: ({ record }) => {
      return record.hasImages ? 'Y' : 'N';
    },
  },
  {
    title: t('Content.contentModel.hasFiles'),
    dataIndex: 'hasFiles',
    customRender: ({ record }) => {
      return record.hasFiles ? 'Y' : 'N';
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('Content.contentModel.id'),
    component: 'Input',
    required: true,
    colProps: {
      span: 8,
    },
  },
  {
    field: 'name',
    label: t('Content.contentModel.name'),
    component: 'Input',
    required: true,
    colProps: {
      span: 8,
    },
  },
  {
    field: 'description',
    label: t('Content.contentModel.description'),
    component: 'Input',
    colProps: {
      span: 8,
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
    field: 'hasChild',
    label: t('Content.contentModel.hasChild'),
    component: 'Checkbox',
    colProps: {
      span: 3,
    },
  },
  {
    field: 'hasImages',
    label: t('Content.contentModel.hasImages'),
    component: 'Checkbox',
    colProps: {
      span: 3,
    },
  },
  {
    field: 'hasFiles',
    label: t('Content.contentModel.hasFiles'),
    component: 'Checkbox',
    colProps: {
      span: 3,
    },
  },
  {
    field: 'parentId',
    label: t('Content.contentModel.parent'),
    component: 'ApiSelect',
    componentProps: {
      api: getContentModelList,
      showSearch: true,
      optionFilterProp: 'label',
      resultField: 'list',
      labelField: 'name',
      valueField: 'id',
    },
    colProps: {
      span: 6,
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
    field: 'useTitle',
    label: t('Content.contentModel.title'),
    component: 'Input',
    colSlot: 'title',
    colProps: {
      span: 5,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
    colProps: {
      span: 1,
    },
  },
  {
    field: 'useDescription',
    label: t('Content.contentModel.description'),
    component: 'Input',
    colSlot: 'description',
    colProps: {
      span: 5,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
    colProps: {
      span: 1,
    },
  },
  {
    field: 'useCover',
    label: t('Content.contentModel.cover'),
    component: 'Input',
    colSlot: 'cover',
    colProps: {
      span: 5,
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
    title: t('Content.contentModel.field.code'),
    dataIndex: 'code',
    editComponent: 'Input',
    editRow: true,
  },
  {
    title: t('Content.contentModel.field.type'),
    dataIndex: 'inputType',
    editComponent: 'Select',
    editComponentProps: {
      options: inputTypeOptions,
    },
    editRow: true,
  },
  {
    title: t('Content.contentModel.field.name'),
    dataIndex: 'name',
    editRow: true,
    editComponent: 'Input',
    align: 'left',
    editRule: true,
    width: 150,
  },
  {
    title: t('Content.contentModel.field.default_value'),
    dataIndex: 'defaultValue',
    editComponent: 'Input',
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.contentModel.field.dict'),
    dataIndex: 'dictionaryId',
    editComponent: 'ApiSelect',
    editComponentProps: {
      api: getDictionaryTree,
      resultField: 'list',
      labelField: 'name',
      valueField: 'id',
    },
    editRow: true,
    align: 'left',
    customRender: ({ record }) => {
      if (record.inputType == InputTypeEnum.DICTIONARY) {
        return h('ApiTreeSelect', {
          api: getDictionaryTree,
          resultField: 'list',
          labelField: 'name',
          valueField: 'id',
        });
      } else {
        return '';
      }
    },
  },
  {
    title: t('Content.contentModel.field.required'),
    dataIndex: 'required',
    editComponent: 'Checkbox',
    editRow: true,
  },
  {
    title: t('Content.contentModel.field.searchable'),
    dataIndex: 'searchable',
    editComponent: 'Checkbox',
    editRow: true,
  },
  {
    title: t('Content.contentModel.field.max_length'),
    dataIndex: 'maxlength',
    editComponent: 'InputNumber',
    editComponentProps: {
      min: 1,
    },
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.contentModel.field.desc'),
    dataIndex: 'description',
    editComponent: 'Textarea',
    editComponentProps: {
      autoSize: true,
    },
    editRow: true,
    align: 'left',
  },
  {
    title: t('Content.contentModel.field.sort'),
    dataIndex: 'sort',
    editComponent: 'InputNumber',
    editRow: true,
  },
];
