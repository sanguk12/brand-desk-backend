import { BasicColumn, FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import {h, Ref} from "vue";
import { ApiSelect } from '/@/components/Form';
import {DescriptionsItem, Input, List, ListItem, Space} from 'ant-design-vue';
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

export function getBaseSchema(type1: Ref, type2: Ref) {
  const baseSchema: DescItem[] = [
    {
      field: 'nickname',
      label: '신청자',
      span: 12,
    },
    {
      field: 'email',
      label: '이메일',
      span: 12,
    },
    {
      field: 'type1',
      label: '유형 1',
      span: 12,
      render: (val, data) => {
        type1.value = data.type1;
        type2.value = data.type2;

        return h(Space, {},
          () => [h(ApiSelect, {
            placeholder: '유형 1',
            api: getTypeList,
            labelField: 'text',
            valueField: 'id',
            value: data.type1,
            params: null,
            allowClear: true,
            style: {
              width: "200px"
            },
            onChange: async (value) => {
              type1.value = value;
            },
          }),
            h(ApiSelect, {
              placeholder: '유형 2',
              api: getType2List,
              labelField: 'text',
              valueField: 'id',
              alwaysLoad: true,
              value: data.type2,
              params: {parentData: type1.value},
              allowClear: true,
              style: {
                width: "200px"
              },
              onChange: (value) => {
                type2.value = value;
              },
            })]);
      },
    },
    {
      field: 'createDate',
      label: '요청일시',
      span: 12,
    },
    {
      field: 'title',
      label: '제목',
      span: 24,
    },
    {
      field: 'content',
      label: '내용',
      span: 24,
    },
    {
      field: 'files',
      label: '첨부파일',
      span: 24,
      render: (val, data) => {
        if(data.files)
        {
          const itemList = data.files.map((f) => h(ListItem, {}, [h('a', { href: '/webfile' + f.filePath, innerText: f.filePath })]));
          return h(List, {}, itemList);
        }else{
          return '';
        }
      },
    },
    {
      field: 'survey',
      label: '만족도',
      span: 24,
      render: (val, data) => {
        return (data.survey ? data.survey : '') + (data.surveyComment? '(' + data.surveyComment  + ')': '');
      },
    },
  ];

  return baseSchema;
}


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
