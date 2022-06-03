import { FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

import { ContentStatusEnum, contentStatusTextMap } from '/@/enums/statusEnum';
import { uploadApi } from '/@/api/sys/upload';
import { getContentModelDetail } from '/@/api/cms/contentModel';
import { isEmpty } from 'lodash-es';
import getComponent from '/@/utils/contentUtil';

const { t } = useI18n();

function getBasicContentFormSchema() {
  const contentFormSchema: FormSchema[] = [
    {
      field: 'id',
      label: t('Content.content.id'),
      component: 'Input',
      show: false,
    },
    {
      field: 'modelId',
      label: t('Content.content.modelId'),
      component: 'Input',
      show: false,
    },
    {
      field: 'categoryId',
      label: t('Content.content.categoryId'),
      component: 'Input',
      show: false,
    },
    {
      field: 'title',
      label: t('Content.content.title'),
      component: 'Input',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'cover',
      label: t('Content.content.cover'),
      component: 'Upload',
      colProps: {
        span: 24,
      },
      componentProps: {
        api: uploadApi,
        accept: ['image/*'],
        maxNumber: 1,
        multiple: false,
        uploadParams: { path: '/content/cover/' },
      },
    },
    {
      field: 'description',
      label: t('Content.content.description'),
      component: 'InputTextArea',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'publishDate',
      component: 'DatePicker',
      label: t('Content.content.publish_date'),
      colProps: {
        span: 24,
      },
    },
    {
      field: 'expiryDate',
      component: 'DatePicker',
      label: t('Content.content.expiry_date'),
      colProps: {
        span: 24,
      },
    },
    {
      field: 'sort',
      component: 'InputNumber',
      label: t('Content.content.sort'),
      colProps: {
        span: 24,
      },
    },
    {
      field: 'status',
      component: 'RadioGroup',
      label: t('Content.content.status'),
      colProps: {
        span: 24,
      },
      componentProps: {
        options: [
          {
            label: contentStatusTextMap.get(ContentStatusEnum.DRAFT),
            value: ContentStatusEnum.DRAFT,
          },
          {
            label: contentStatusTextMap.get(ContentStatusEnum.NORMAL),
            value: ContentStatusEnum.NORMAL,
          },
          {
            label: contentStatusTextMap.get(ContentStatusEnum.PEND),
            value: ContentStatusEnum.PEND,
          },
          {
            label: contentStatusTextMap.get(ContentStatusEnum.REJECT),
            value: ContentStatusEnum.REJECT,
          },
        ],
      },
    },
  ];

  return contentFormSchema;
}

export default async function getContentFormSchema(modelId: string) {
  const model = await getContentModelDetail(modelId);

  const formSchema = getBasicContentFormSchema();

  if (!isEmpty(model.extendList)) {
    model.extendList!.forEach((extendField) => {
      formSchema.push(getComponent(extendField));
    });
  }

  if (model.hasImages) {
    formSchema.push({
      field: 'images',
      label: t('Content.content.images'),
      component: 'Upload',
      colProps: {
        span: 24,
      },
      componentProps: {
        api: uploadApi,
        accept: ['image/*'],
        multiple: true,
        uploadParams: { path: '/content/images/' },
      },
    });
  }

  if (model.hasFiles) {
    formSchema.push({
      field: 'files',
      label: t('Content.content.files'),
      component: 'Upload',
      colProps: {
        span: 24,
      },
      componentProps: {
        api: uploadApi,
        multiple: true,
        uploadParams: { path: '/content/files/' },
      },
    });
  }

  if (!isEmpty(model.extendList)) {
  }

  return formSchema;
}
