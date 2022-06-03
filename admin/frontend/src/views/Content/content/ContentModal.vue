<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    :centered="true"
    @ok="handleSubmit"
    :width="1100"
    :min-height="700"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { Divider, Input, Select } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { saveContent } from '/@/api/cms/content';
  import getContentFormSchema from '/@/views/Content/content/content.form';

  export default defineComponent({
    name: 'ContentModal',
    components: {
      BasicModal,
      BasicForm,
      [Select.name]: Select,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
    },
    emits: ['success', 'register'],
    props: {
      value: Object as PropType<string>,
    },
    setup(_, { emit }) {
      const { t } = useI18n();

      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: [],
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        const contentFormSchema = await getContentFormSchema(data.record.modelId);

        await resetSchema(contentFormSchema);

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
        }

        await setFieldsValue({
          ...data.record,
        });
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.content.add') : t('Content.content.edit'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const result = await saveContent(values);
          console.log(result);
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { t, registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
