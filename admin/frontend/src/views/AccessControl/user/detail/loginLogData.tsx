import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: t('Log.channel'),
      dataIndex: 'channel',
      width: 150,
    },
    {
      title: t('Log.ip'),
      dataIndex: 'ip',
      width: 150,
    },
    {
      title: t('Log.result'),
      dataIndex: 'result',
      customRender: ({ record }) => {
        return record.result ? 'Y' : 'N';
      },
      width: 150,
    },
    {
      title: t('Log.login_date'),
      dataIndex: 'createDate',
      format: 'date|YYYY-MM-DD HH:mm:ss',
      width: 150,
    },
  ];
}
export function getSearchFormSchema(): FormSchema[] {
  return [
    {
      field: 'channel',
      label: t('Log.channel'),
      component: 'Input',
      isAdvanced: false,
    },
    {
      field: 'ip',
      label: t('Log.ip'),
      component: 'Input',
      isAdvanced: false,
    },
    {
      field: 'success',
      label: t('Log.result'),
      component: 'Select',
      isAdvanced: false,
      componentProps: {
        options: [
          {
            label: 'Y',
            value: true,
            key: 'true',
          },
          {
            label: 'N',
            value: false,
            key: 'false',
          },
        ],
      },
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
