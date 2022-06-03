import { FormSchema } from '/@/components/Form';
import { InputTypeEnum } from '/@/enums/inputTypeEnum';
import { h } from 'vue';
import { Divider, Input, InputGroup, Row } from 'ant-design-vue';
import { BasicUpload } from '/@/components/Upload';
import { uploadApi } from '/@/api/sys/upload';
import { UploadApiResultProps } from '/@/api/sys/model/uploadModel';
import { Tinymce } from '/@/components/Tinymce';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export default function getComponent(extendField, prefix = 'extend.'): FormSchema {
  switch (extendField.inputType) {
    case InputTypeEnum.TEXT:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Input',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.NUMBER:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'InputNumber',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.FILE:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Input',
        colProps: {
          span: 24,
        },
        render: ({ model, field }) => {
          return h(InputGroup, { compact: true }, () => [
            h(Row, { gutter: 8 }, () => [
              h(BasicUpload, {
                api: uploadApi,
                maxNumber: 1,
                multiple: false,
                uploadParams: { path: '/content/files/' },
                value: model[field] === undefined ? [] : [model[field]],
                onChange: (value: UploadApiResultProps[]) => {
                  model[field] = value[0];
                },
              }),
            ]),
            h(Row, {}, () => [h(Divider, { type: 'vertical' })]),
            h(Row, {}, () => [
              h(Input, {
                placeholder: t('Content.content.file_path'),
                disabled: model[field] === undefined,
                value: model[field]?.filePath,
                onChange: (e: ChangeEvent) => {
                  model[field].filePath = e.target.value;
                },
              }),
            ]),
            h(Row, {}, () => [h(Divider, { type: 'vertical' })]),
            h(Row, {}, () => [
              h(Input, {
                placeholder: t('Content.content.file_name'),
                disabled: model[field] === undefined,
                value: model[field]?.fileName,
                onChange: (e: ChangeEvent) => {
                  model[field].fileName = e.target.value;
                },
              }),
            ]),
            h(Row, {}, () => [h(Divider, { type: 'vertical' })]),
            h(Row, {}, () => [
              h(Input, {
                placeholder: t('Content.content.file_type'),
                disabled: model[field] === undefined,
                value: model[field]?.fileType,
                onChange: (e: ChangeEvent) => {
                  model[field].fileType = e.target.value;
                },
              }),
            ]),
            h(Row, {}, () => [h(Divider, { type: 'vertical' })]),
            h(Row, {}, () => [
              h(Input.TextArea, {
                placeholder: t('Content.content.description'),
                disabled: model[field] === undefined,
                value: model[field]?.description,
                onChange: (e: ChangeEvent) => {
                  model[field].description = e.target.value;
                },
              }),
            ]),
          ]);
        },
      };
    case InputTypeEnum.IMAGE:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Upload',
        colProps: {
          span: 24,
        },
        componentProps: {
          api: uploadApi,
          accept: ['image/*'],
          maxNumber: 1,
          multiple: false,
          uploadParams: { path: '/content/images/' },
        },
      };
    case InputTypeEnum.VIDEO:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Upload',
        colProps: {
          span: 24,
        },
        componentProps: {
          api: uploadApi,
          accept: ['video/*'],
          maxNumber: 1,
          multiple: false,
          uploadParams: { path: '/content/videos/' },
        },
      };
    case InputTypeEnum.PASSWORD:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'InputPassword',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.EDITOR:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Input',
        colProps: {
          span: 24,
        },
        render: ({ model, field }) => {
          return h(Tinymce, {
            value: model[field],
            onChange: (value: string) => {
              model[field] = value;
            },
          });
        },
      };
    case InputTypeEnum.TEXTAREA:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'InputTextArea',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.DATE:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'DatePicker',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.DATETIME:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'DatePicker',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.BOOLEAN:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'Checkbox',
        colProps: {
          span: 24,
        },
      };
    case InputTypeEnum.DICTIONARY:
      return {
        field: prefix + extendField.code,
        label: extendField.name,
        required: extendField.required,
        component: 'ApiTreeSelect',
        colProps: {
          span: 24,
        },
      };
  }

  return {
    field: prefix + extendField.code,
    label: extendField.name,
    required: extendField.required,
    component: 'Input',
    colProps: {
      span: 24,
    },
  };
}
