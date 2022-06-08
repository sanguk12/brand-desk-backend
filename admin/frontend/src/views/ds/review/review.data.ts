import { BasicColumn, FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { h } from "vue";
import { ApiSelect } from '/@/components/Form';
import {Input, Space} from 'ant-design-vue';
import { getStatusList, getType2List, getTypeList } from '/@/api/ds/review';
export const columns: BasicColumn[] = [
  {
    title: '아이디',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: '유형1',
    dataIndex: 'type1Text',
    width: 150,
    align: 'left',
  },
  {
    title: '유형2',
    dataIndex: 'type2Text',
    width: 150,
    align: 'left',
  },
  {
    title: '제목',
    dataIndex: 'title',
    width: 150,
    align: 'left',
  },
  {
    title: '신청자',
    dataIndex: 'nickname',
    width: 150,
    align: 'left',
  },
  {
    title: '이메일',
    dataIndex: 'email',
    width: 150,
    align: 'left',
  },
  {
    title: '요청일시',
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
  {
    title: '검수 완료 예정일',
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
  {
    title: '검수 상태',
    dataIndex: 'statusText',
    width: 180,
  },
  {
    title: '만족도',
    dataIndex: 'survey',
    width: 150,
    align: 'left',
  },
];

export function getSearchFormSchema() {

  const searchFormSchema: FormSchema[] = [
    {
      field: 'createDate',
      label: '요청기간',
      component: 'RangePicker',
      colProps: {span: 8},
      componentProps: {
        format: 'YYYY-MM-DD',
      }
    },
    {
      field: 'type1',
      component: 'Select',
      label: '유형',
      colProps: {
        span: 8,
      },
      render: ({ model, field }) => {
        return h(Space, {},
          () => [h( ApiSelect, {
          placeholder: '유형 1',
          api: getTypeList,
          labelField: 'text',
          valueField: 'id',
          params: null,
          allowClear: true,
          style: {
            width: "200px"
          },
          onChange: async (value) => {
            model[field] = value;
          },
        }),
          h( ApiSelect, {
            placeholder: '유형 2',
            api: getType2List,
            labelField: 'text',
            valueField: 'id',
            alwaysLoad: true,
            params: { parentData: model['type1']},
            allowClear: true,
            style: {
              width: "200px"
            },
            onChange: (value) => {
              model['type2'] = value;
            },
          })]);
      },
    },
    {
      field: 'type2',
      component: 'Input',
      label: '유형 2',
      show: false,
    },
    {
      field: 'status',
      component: 'ApiSelect',
      componentProps: {
        placeholder: '검수 상태',
        api: getStatusList,
        labelField: 'text',
        valueField: 'id',
      },
      label: '검수 상태',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'searchType',
      component: 'Select',
      label: '검색어',
      colProps: {
        span: 8,
      },
      render: ({ model, field }) => {
        return h(Space, {},
          () => [h( ApiSelect, {
            placeholder: '검색 유형',
            api: () => {
              return new Promise((resolve) => {
                resolve([
                  {label: '전체', value:''},
                  {label: '제목', value:'title'},
                  {label: '신청자', value:'user'},
                  {label: '이메일', value:'email'},
                ]);
              })

            },
            style: {
              width: "200px"
            },
            onChange: async (value) => {
              model[field] = value;
            },
          }),
            h( Input, {
              placeholder: '검색어',
              allowClear: true,
              style: {
                width: "200px"
              },
              onChange: (e) => {
                model['text'] = e.target.value;
              },
            })]);
      },
    },
    {
      field: 'text',
      component: 'Input',
      label: ' 검색어',
      show: false,
    },
  ];
  return searchFormSchema;
}

export const baseSchema: DescItem[] = [
  {
    field: 'email',
    label: '이메일',
  },
  {
    field: 'nickname',
    label: ' 이름',
  },
];


export const detailSchema: DescItem[] = [
  {
    field: 'company',
    label: '회사명',
  },
  {
    field: 'dept',
    label: '부서명',
  },
  {
    field: 'role',
    label: '역할',
  },
  {
    field: 'phone',
    label: '전화번호',
  },
  {
    field: 'staffName',
    label: '담당임직원',
  },
  {
    field: 'download',
    label: '다운로드 권한 요청',
    render: (curVal) => {
      return curVal ? '요청' : '요청 안함';
    },
  },
];
