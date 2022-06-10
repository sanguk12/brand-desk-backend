import { BasicColumn, FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { computed, h, Ref } from 'vue';
import { ApiRadioGroup, ApiSelect } from '/@/components/Form';
import {
  CheckboxGroup,
  Input,
  List,
  ListItem,
  RadioGroup,
  Row,
  Space,
  Upload,
} from 'ant-design-vue';
import { getLevelList, getStatusList, getType2List, getTypeList } from '/@/api/ds/review';
import { getFilename } from '/@/utils/filename';
import { DictionaryItem } from '/@/api/cms/model/dictionary';
import { ReviewDetailItem } from '/@/api/ds/model/review';
import { Tinymce } from '/@/components/Tinymce';
import { BasicUpload } from '/@/components/Upload';
import { uploadApi } from '/@/api/sys/upload';
import dayjs from 'dayjs';
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
      colProps: { span: 8 },
      componentProps: {
        format: 'YYYY-MM-DD',
      },
    },
    {
      field: 'type1',
      component: 'Select',
      label: '유형',
      colProps: {
        span: 8,
      },
      render: ({ model, field }) => {
        return h(Space, {}, () => [
          h(ApiSelect, {
            placeholder: '유형 1',
            api: getTypeList,
            labelField: 'text',
            valueField: 'id',
            params: null,
            allowClear: true,
            style: {
              width: '200px',
            },
            onChange: async (value) => {
              model[field] = value;
            },
          }),
          h(ApiSelect, {
            placeholder: '유형 2',
            api: getType2List,
            labelField: 'text',
            valueField: 'id',
            alwaysLoad: true,
            params: { parentData: model['type1'] },
            allowClear: true,
            style: {
              width: '200px',
            },
            onChange: (value) => {
              model['type2'] = value;
            },
          }),
        ]);
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
        return h(Space, {}, () => [
          h(ApiSelect, {
            placeholder: '검색 유형',
            api: () => {
              return new Promise((resolve) => {
                resolve([
                  { label: '전체', value: '' },
                  { label: '제목', value: 'title' },
                  { label: '신청자', value: 'user' },
                  { label: '이메일', value: 'email' },
                ]);
              });
            },
            style: {
              width: '200px',
            },
            onChange: async (value) => {
              model[field] = value;
            },
          }),
          h(Input, {
            placeholder: '검색어',
            allowClear: true,
            style: {
              width: '200px',
            },
            onChange: (e) => {
              model['text'] = e.target.value;
            },
          }),
        ]);
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

export function getBaseSchema(reviewResult: any) {
  const baseSchema: DescItem[] = [
    {
      field: 'nickname',
      label: '신청자',
      span: 2,
    },
    {
      field: 'email',
      label: '이메일',
      span: 2,
    },
    {
      field: 'type1',
      label: '유형 1',
      span: 2,
      render: (val, data) => {
        reviewResult.type1 = data.type1;
        reviewResult.type2 = data.type2;

        return h(Space, {}, () => [
          h(ApiSelect, {
            placeholder: '유형 1',
            api: getTypeList,
            labelField: 'text',
            valueField: 'id',
            value: data.type1,
            params: null,
            allowClear: true,
            style: {
              width: '200px',
            },
            onChange: async (value) => {
              reviewResult.type1 = value;
            },
          }),
          h(ApiSelect, {
            placeholder: '유형 2',
            api: getType2List,
            labelField: 'text',
            valueField: 'id',
            alwaysLoad: true,
            value: data.type2,
            params: { parentData: reviewResult.type1 },
            allowClear: true,
            style: {
              width: '200px',
            },
            onChange: (value) => {
              reviewResult.type2 = value;
            },
          }),
        ]);
      },
    },
    {
      field: 'createDate',
      label: '요청일시',
      span: 2,
    },
    {
      field: 'title',
      label: '제목',
      span: 4,
    },
    {
      field: 'content',
      label: '내용',
      span: 4,
    },
    {
      field: 'files',
      label: '첨부파일',
      span: 4,
      render: (val, data) => {
        if (data.files) {
          const itemList = data.files.map((f) =>
            h(ListItem, {}, () => [
              h('a', {
                download: getFilename(f.filePath),
                href: '/webfile/upload' + f.filePath,
                innerText: getFilename(f.filePath),
              }),
            ]),
          );
          return h(List, {}, () => itemList);
        } else {
          return '';
        }
      },
    },
    {
      field: 'survey',
      label: '만족도',
      span: 4,
      render: (val, data) => {
        return (
          (data.survey ? data.survey : '') +
          (data.surveyComment ? '(' + data.surveyComment + ')' : '')
        );
      },
    },
  ];

  return baseSchema;
}

export function getElements(data: any, elementTypeList: DictionaryItem[]) {
  const elements: number[] = [];
  if (data.lettermark) {
    const element = elementTypeList.find((element) => element.value == 'Lettermark');
    elements.push(element!.id);
  }

  if (data.color) {
    const element = elementTypeList.find((element) => element.value == 'Color');
    elements.push(element!.id);
  }
  if (data.naming) {
    const element = elementTypeList.find((element) => element.value == 'Naming');
    elements.push(element!.id);
  }
  if (data.typography) {
    const element = elementTypeList.find((element) => element.value == 'Typography');
    elements.push(element!.id);
  }
  if (data.imagery) {
    const element = elementTypeList.find((element) => element.value == 'Imagery');
    elements.push(element!.id);
  }
  if (data.illustration) {
    const element = elementTypeList.find((element) => element.value == 'Illustration');
    elements.push(element!.id);
  }

  return elements;
}
export function getDetailSchema(reviewResult: any, elementTypeList: DictionaryItem[]) {
  const detailSchema: DescItem[] = [
    {
      field: 'status',
      label: '검수상태',
      span: 4,
      render: (val, data) => {
        return data.statusText;
      },
    },
    {
      field: 'level',
      label: 'Level',
      span: 2,
      render: (val, data) => {
        return h(ApiSelect, {
          placeholder: 'Level',
          api: getLevelList,
          labelField: 'text',
          valueField: 'id',
          value: data.level,
          params: null,
          allowClear: true,
          style: {
            width: '200px',
          },
          onChange: async (value) => {
            reviewResult.level = value;
          },
        });
      },
    },
    {
      field: 'lettermark',
      label: 'Elements',
      span: 2,
      render: (val, data) => {
        const defaultValue: number[] = getElements(data, elementTypeList);
        console.log(defaultValue);
        const options = elementTypeList.map((et) => {
          return { label: et.text, value: et.id };
        });
        return h(CheckboxGroup, {
          options: options,
          defaultValue: defaultValue,
          onChange: async (value) => {
            reviewResult.elements = value;
          },
        });
      },
    },
  ];

  return detailSchema;
}

export function getFirstReviewSchema(reviewData: ReviewDetailItem, reviewResult: any) {
  const uploadPath = `/request/${reviewData.userId}/${dayjs().format('YYYYMMDDHHmm')}`;

  const schema: DescItem[] = [
    {
      field: 'status1st',
      label: null,
      span: 4,
      render: (val, data) => {
        return h(ApiRadioGroup, {
          options: [
            { label: '검수 완료', value: 'FIRST_REVIEW' },
            { label: '반려', value: 'REJECT' },
          ],
          onChange: async (value) => {
            reviewResult.status1st = value;
          },
        });
      },
    },
    {
      field: 'reviewComment11st',
      label: null,
      span: 4,
      render: (val, data) => {
        return h(Input, {
          style: 'width: 500px',
          placeholder: '반려사유를 입력하세요',
          value: data.reviewComment11st,
          onChange: (e) => {
            data.reviewComment11st = e.target.value;
            reviewResult.reviewComment11st = e.target.value;
          },
        });
      },
    },
    {
      field: 'reviewComment21st',
      label: '피드백 의견',
      span: 4,
      render: (val, data) => {
        return h(Tinymce, {
          showImageUpload: false,
          value: data.reviewComment21st,
          onChange: (value) => {
            reviewResult.reviewComment21st = value;
          },
        });
      },
    },
    {
      field: 'files1st',
      label: '파일 첨부',
      span: 4,
      render: (val, data) => {
        return h(BasicUpload, {
          api: uploadApi,
          emptyHidePreview: true,
          uploadParams: { path: uploadPath },
          value: [],
          onChange: (list: any[]) => {
            if (data.files1st == null) {
              data.files1st = [];
            }
            list.forEach((f) => {
              data.files1st.push({
                step: 2,
                filePath: f.filePath,
                fileType: 'Other',
                sort: data.files1st.length + 1,
              });
            });
          },
        });
      },
    },
    {
      field: 'files1st',
      label: '파일목록',
      span: 4,
      render: (val, data) => {
        if (data.files1st) {
          const itemList = data.files1st.map((f) =>
            h(ListItem, {}, () => [
              h('a', {
                download: getFilename(f.filePath),
                href: '/webfile/upload' + f.filePath,
                innerText: getFilename(f.filePath),
              }),
            ]),
          );
          return h(List, {}, () => itemList);
        } else {
          return '';
        }
      },
    },
    {
      field: 'nickname1st',
      label: '승인자',
      span: 4,
    },
    {
      field: 'review1stDate',
      label: '승인일시',
      span: 4,
    },
  ];

  return schema;
}

export function getFirstReviewReadonlySchema(reviewData: ReviewDetailItem, reviewResult: any) {
  const schema: DescItem[] = [
    {
      field: 'reviewComment11st',
      label: '반려사유',
      span: 4,
    },
    {
      field: 'reviewComment21st',
      label: '피드백 의견',
      span: 4,
    },
    {
      field: 'files1st',
      label: '파일목록',
      span: 4,
      render: (val, data) => {
        if (data.files1st) {
          const itemList = data.files1st.map((f) =>
            h(ListItem, {}, () => [
              h('a', {
                download: getFilename(f.filePath),
                href: '/webfile/upload' + f.filePath,
                innerText: getFilename(f.filePath),
              }),
            ]),
          );
          return h(List, {}, () => itemList);
        } else {
          return '';
        }
      },
    },
    {
      field: 'nickname1st',
      label: '승인자',
      span: 4,
    },
    {
      field: 'review1stDate',
      label: '승인일시',
      span: 4,
    },
  ];

  return schema;
}

export function getSecondReviewSchema(reviewData: ReviewDetailItem, reviewResult: any) {
  const uploadPath = `/request/${reviewData.userId}/${dayjs().format('YYYYMMDDHHmm')}`;

  const schema: DescItem[] = [
    {
      field: 'status2st',
      label: null,
      span: 4,
      render: (val, data) => {
        return h(ApiRadioGroup, {
          options: [
            { label: '검수 완료', value: 'SECOND_REVIEW' },
            { label: '반려', value: 'REJECT' },
          ],
          onChange: async (value) => {
            reviewResult.status2st = value;
          },
        });
      },
    },
    {
      field: 'reviewComment12st',
      label: null,
      span: 4,
      render: (val, data) => {
        return h(Input, {
          style: 'width: 500px',
          placeholder: '반려사유를 입력하세요',
          value: data.reviewComment12st,
          onChange: (e) => {
            data.reviewComment12st = e.target.value;
            reviewResult.reviewComment12st = e.target.value;
          },
        });
      },
    },
    {
      field: 'reviewComment22st',
      label: '피드백 의견',
      span: 4,
      render: (val, data) => {
        return h(Tinymce, {
          showImageUpload: false,
          value: data.reviewComment22st,
          onChange: (value) => {
            reviewResult.reviewComment22st = value;
          },
        });
      },
    },
    {
      field: 'files2st',
      label: '파일 첨부',
      span: 4,
      render: (val, data) => {
        return h(BasicUpload, {
          api: uploadApi,
          emptyHidePreview: true,
          uploadParams: { path: uploadPath },
          value: [],
          onChange: (list: any[]) => {
            if (data.files2st == null) {
              data.files2st = [];
            }
            list.forEach((f) => {
              data.files2st.push({
                step: 2,
                filePath: f.filePath,
                fileType: 'Other',
                sort: data.files2st.length + 1,
              });
            });
          },
        });
      },
    },
    {
      field: 'files2st',
      label: '파일목록',
      span: 4,
      render: (val, data) => {
        if (data.files2st) {
          const itemList = data.files2st.map((f) =>
            h(ListItem, {}, () => [
              h('a', {
                download: getFilename(f.filePath),
                href: '/webfile/upload' + f.filePath,
                innerText: getFilename(f.filePath),
              }),
            ]),
          );
          return h(List, {}, () => itemList);
        } else {
          return '';
        }
      },
    },
    {
      field: 'nickname2st',
      label: '승인자',
      span: 4,
    },
    {
      field: 'review2stDate',
      label: '승인일시',
      span: 4,
    },
  ];

  return schema;
}

export function getSecondReviewReadonlySchema(reviewData: ReviewDetailItem, reviewResult: any) {
  const schema: DescItem[] = [
    {
      field: 'reviewComment12st',
      label: '반려 사유',
      span: 4,
    },
    {
      field: 'reviewComment22st',
      label: '피드백 의견',
      span: 4,
    },
    {
      field: 'files2st',
      label: '파일목록',
      span: 4,
      render: (val, data) => {
        if (data.files2st) {
          const itemList = data.files2st.map((f) =>
            h(ListItem, {}, () => [
              h('a', {
                download: getFilename(f.filePath),
                href: '/webfile/upload' + f.filePath,
                innerText: getFilename(f.filePath),
              }),
            ]),
          );
          return h(List, {}, () => itemList);
        } else {
          return '';
        }
      },
    },
    {
      field: 'nickname2st',
      label: '승인자',
      span: 4,
    },
    {
      field: 'review2stDate',
      label: '승인일시',
      span: 4,
    },
  ];

  return schema;
}
