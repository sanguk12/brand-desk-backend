import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';

import { truncate } from 'lodash-es';

const { t } = useI18n();

export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: t('Log.channel'),
      dataIndex: 'channel',
      width: 150,
    },
    {
      title: t('Log.action'),
      dataIndex: 'operate',
      width: 150,
    },
    {
      title: t('Log.ip'),
      dataIndex: 'ip',
      width: 150,
    },
    {
      title: t('Log.action_date'),
      dataIndex: 'createDate',
      format: 'date|YYYY-MM-DD HH:mm:ss',
      width: 150,
    },
    {
      title: t('Log.content'),
      dataIndex: 'content',
      width: 150,
      customRender: ({ record }) => {
        return truncate(record.content, {
          length: 20,
          omission: '***',
        });
      },
    },
  ];
}
export function getSearchFormSchema(): FormSchema[] {
  return [
    {
      field: 'operate',
      label: t('Log.action'),
      component: 'Input',
    },
    {
      field: 'channel',
      label: t('Log.channel'),
      component: 'Input',
    },
    {
      field: 'ip',
      label: t('Log.ip'),
      component: 'Input',
    },
    {
      field: '[startCreateDate, endCreateDate]',
      label: t('Log.action_date'),
      component: 'RangePicker',
      componentProps: {
        format: 'YYYY-MM-DD',
      },
    },
  ];
}
