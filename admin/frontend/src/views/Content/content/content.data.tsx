import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

import { ContentStatusEnum, contentStatusTextMap } from '/@/enums/statusEnum';
import { formatToDate } from '/@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('Content.content.id'),
    dataIndex: 'id',
    width: 100,
  },
  {
    title: t('Content.content.title'),
    dataIndex: 'title',
    width: 100,
  },
  {
    title: t('Content.content.cate'),
    dataIndex: 'category.name',
    width: 120,
  },
  {
    title: t('Content.content.model'),
    dataIndex: 'modelId',
    width: 130,
  },
  {
    title: t('Content.content.status'),
    dataIndex: 'status',
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'status')) {
        record.status = ContentStatusEnum.DRAFT;
      }
      return contentStatusTextMap.get(record.status);
    },
  },
  {
    title: t('Content.content.publish_date'),
    dataIndex: 'publishDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
  {
    title: t('Content.content.expiry_date'),
    dataIndex: 'expiryDate',
    format: (_text, record, _index) => {
      if (record.expiryDate === null) {
        return '';
      }
      return formatToDate(record.expiryDate, 'YYYY-MM-DD HH:mm:ss');
    },
    width: 180,
  },
  {
    title: t('Content.content.create_date'),
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: t('Content.content.title'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'publishDate',
    label: t('Content.content.publish_date'),
    component: 'RangePicker',
    colProps: { span: 8 },
  },
];
