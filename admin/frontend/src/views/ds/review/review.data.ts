import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import {DescItem} from "/@/components/Description";
export const columns: BasicColumn[] = [
  {
    title: '아이디',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: '이메일',
    dataIndex: 'email',
    width: 150,
    align: 'left',
  },
  {
    title: '이름',
    dataIndex: 'nickname',
    width: 150,
    align: 'left',
  },
  {
    title: '회사명',
    dataIndex: 'company',
    width: 150,
    align: 'left',
  },
  {
    title: '부서명',
    dataIndex: 'dept',
    width: 150,
    align: 'left',
  },
  {
    title: '역할',
    dataIndex: 'role',
    width: 150,
    align: 'left',
  },
  {
    title: '전화번호',
    dataIndex: 'phone',
    width: 150,
    align: 'left',
  },
  {
    title: '다운로드 요청',
    dataIndex: 'download',
    width: 120,
    customRender: ({ record }) => {
      const download = record.download;
      return ~~download === 1 ? 'Y' : 'N';
    },
  },
  {
    title: '상태',
    dataIndex: 'status',
    customRender: ({ record }) => {
      const approved = record.status == 2;
      const rejected = record.status == 3;

      let color = '';
      let text = '요청';

      if(approved) {
        text = '승인';
        color =  'green';
      }
      if(rejected) {
        text = '반려';
        color =  'red';
      }

      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '가입 신청일',
    dataIndex: 'createDate',
    format: 'date|YYYY-MM-DD HH:mm:ss',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'text',
    label: '검색어',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '상태',
    component: 'Select',
    componentProps: {
      options: [
        { label: '요청', value: 1 },
        { label: '승인', value: 2 },
        { label: '반려', value: 3 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'download',
    label: '다운로드 여부',
    component: 'Checkbox',
    colProps: { span: 8 },
  },
];

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
