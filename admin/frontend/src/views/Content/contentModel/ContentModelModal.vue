<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    :width="1100"
    :min-height="600"
  >
    <BasicForm @register="registerForm">
      <template #cover>
        <Input
          v-model:value="contentModel.coverLabel"
          :placeholder="t('Content.contentModel.field.cover_label')"
        >
          <template #addonBefore>
            <Checkbox v-model:checked="contentModel.useCover">{{
              t('Content.contentModel.field.useCover')
            }}</Checkbox>
          </template>
        </Input>
      </template>
      <template #title>
        <Input
          v-model:value="contentModel.titleLabel"
          :placeholder="t('Content.contentModel.field.title_label')"
        >
          <template #addonBefore>
            <Checkbox v-model:checked="contentModel.useTitle">
              {{ t('Content.contentModel.field.useTitle') }}
            </Checkbox>
          </template>
        </Input>
      </template>
      <template #description>
        <Input
          v-model:value="contentModel.descriptionLabel"
          :placeholder="t('Content.contentModel.field.description_label')"
        >
          <template #addonBefore>
            <Checkbox v-model:checked="contentModel.useDescription">{{
              t('Content.contentModel.field.useDescription')
            }}</Checkbox>
          </template>
        </Input>
      </template>
      <template #extend="{ model, field }">
        <ExtendFieldTable
          v-model:value="contentModel.extendList"
          :model="model"
          :field="field"
          ref="extendFieldTableRef"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './content.model.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import ExtendFieldTable from './ExtendFieldTable.vue';

  import { Checkbox, Input } from 'ant-design-vue';
  import { ContentModelDetailItem } from '/@/api/cms/model/contentModel';
  import { getContentModelDetail, saveContentModel } from '/@/api/cms/contentModel';

  export default defineComponent({
    name: 'CateTypeModal',
    components: { ExtendFieldTable, BasicModal, BasicForm, Checkbox, Input },
    emits: ['success', 'register'],
    setup(_props, { emit }) {
      const { t } = useI18n();

      const modelId = ref('');

      const extendFieldTableRef = ref(null);
      const isUpdate = ref(true);
      const contentModel = ref<ContentModelDetailItem>({
        extendList: [],
      });

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          await setFieldsValue({
            ...data.record,
          });
          modelId.value = data.record.id;

          await fetchDetail(data.record.id);
        } else {
          contentModel.value = { extendList: [] };
        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.contentModel.add') : t('Content.contentModel.edit'),
      );

      async function handleSubmit() {
        try {
          const newContentModel = await validate();
          const fields = extendFieldTableRef.value?.validate();

          newContentModel.extendList = fields;
          newContentModel.coverLabel = contentModel.value.coverLabel;
          newContentModel.descriptionLabel = contentModel.value.descriptionLabel;
          newContentModel.titleLabel = contentModel.value.titleLabel;
          newContentModel.useCover = contentModel.value.useCover;
          newContentModel.useDescription = contentModel.value.useDescription;
          newContentModel.useTitle = contentModel.value.useTitle;

          await saveContentModel(newContentModel, modelId.value);

          setModalProps({ confirmLoading: true });
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      async function fetchDetail(id) {
        const detail = await getContentModelDetail(id);
        contentModel.value = detail;
      }

      return {
        t,
        extendFieldTableRef,
        contentModel,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
