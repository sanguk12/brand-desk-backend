import { BasicColumn } from '/@/components/Table';

import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('AccessControl.dept.id'),
    dataIndex: 'id',
    width: 50,
  },
  {
    title: t('AccessControl.cate.selected'),
    dataIndex: 'selected',
    edit: true,
    editRow: false,
    editable: false,
    editComponent: 'Checkbox',
    editComponentProps: {},
    editValueMap: (value) => {
      return value ? 'Y' : 'N';
    },
    width: 200,
  },
  {
    title: t('AccessControl.cate.contain_child'),
    dataIndex: 'containChild',
    edit: true,
    editRow: false,
    editable: false,
    editComponent: 'Checkbox',
    editComponentProps: {},
    editValueMap: (value) => {
      return value ? 'Y' : 'N';
    },
    width: 200,
  },
  {
    title: t('AccessControl.cate.name'),
    dataIndex: 'name',
    width: 150,
    align: 'left',
  },
];
