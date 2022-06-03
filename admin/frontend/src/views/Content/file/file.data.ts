import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDate } from '/@/utils/dateUtil';
import { h } from 'vue';
import { Icon } from '/@/components/Icon';
import { humanFileSize } from '/@/utils/file/humanReadable';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: '',
    dataIndex: 'directory',
    width: 150,
    customRender: ({ record }) => {
      return record.directory
        ? h(Icon, { icon: 'clarity:directory-solid', class: 'mr-1' })
        : h(Icon, { icon: 'ant-design:file-text-filled', class: 'mr-1' });
    },
  },
  {
    title: t('Content.file.name'),
    dataIndex: 'fileName',
    width: 150,
    align: 'left',
  },
  {
    title: t('Content.file.create_date'),
    dataIndex: 'creationTime',
    format: (_text, record, _index) => {
      if (record.createDate === null) {
        return '';
      }
      return formatToDate(record.createDate, 'YYYY-MM-DD HH:mm:ss');
    },
    width: 130,
  },
  {
    title: t('Content.file.update_date'),
    dataIndex: 'lastModifiedTime',
    format: (_text, record, _index) => {
      if (record.createDate === null) {
        return '';
      }
      return formatToDate(record.createDate, 'YYYY-MM-DD HH:mm:ss');
    },
    width: 130,
  },
  {
    title: t('Content.file.size'),
    dataIndex: 'size',
    format: (_text, record, _index) => {
      return humanFileSize(record.size);
    },
    width: 130,
  },
];
