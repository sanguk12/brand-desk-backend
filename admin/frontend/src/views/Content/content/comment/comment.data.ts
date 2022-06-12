import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.comment.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('Content.comment.status'),
    dataIndex: 'status',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.comment.contentId'),
    dataIndex: 'contentId',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.comment.userId'),
    dataIndex: 'userId',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: t('Content.comment.status'),
    component: 'Select',
    componentProps: {
      options: [
        { label: t('Content.comment.show'), value: 1 },
        { label: t('Content.comment.hidden'), value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
];

export function getFormSchema() {
  const formSchema: FormSchema[] = [
    {
      field: 'id',
      label: t('Content.comment.id'),
      component: 'Input',
      show: false,
    },
    {
      field: 'status',
      label: t('Content.comment.status'),
      labelWidth: 200,
      component: 'RadioButtonGroup',
      defaultValue: 1,
      componentProps: {
        options: [
          { label: t('Content.comment.hidden'), value: true },
          { label: t('Content.comment.show'), value: false },
        ],
      },
      required: true,
    },
    {
      label: t('Content.comment.text'),
      labelWidth: 200,
      field: 'text',
      component: 'InputTextArea',
    },
  ];

  return formSchema;
}
