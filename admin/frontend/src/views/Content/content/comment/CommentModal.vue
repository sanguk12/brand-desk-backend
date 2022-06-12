<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import {  getFormSchema } from './comment.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getCommentDetail, saveComment} from "/@/api/cms/comment";

  export default defineComponent({
    name: 'CommentModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const isUpdate = ref(true);


      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: getFormSchema(),
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const commentDetail = await getCommentDetail(data.record.id);
          await setFieldsValue({
            ...commentDetail,
            isUpdate: isUpdate.value,
          });
        } else {
          await setFieldsValue({
            ...data.record,
            isUpdate: isUpdate.value,
          });
        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.comment.add') : t('Content.comment.edit'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const result = await saveComment(values);
          console.log(result);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      const managerList = ref<any[]>([]);
      const managerId = ref();

      return {
        t,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        managerList,
        managerId,
      };
    },
  });
</script>
