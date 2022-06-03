<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { userFormSchema } from './user.data';
  import { isUserExist, saveUser } from '/@/api/sys/user';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'UserModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: userFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          await setFieldsValue({
            ...data.record,
          });
        }
        let rules: Rule[] = [];
        if (!unref(isUpdate)) {
          rules = [
            {
              required: true,
              message: t('AccessControl.user.guide_input_username'),
            },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  isUserExist(value)
                    .then(() => {
                      resolve();
                    })
                    .catch((err) => {
                      reject(err.message || t('common.verify_failed'));
                    });
                });
              },
            },
          ];
        }

        await updateSchema([
          {
            field: 'username',
            componentProps: { disabled: unref(isUpdate) },
            rules: rules,
          },
          {
            field: 'password',
            ifShow: !unref(isUpdate),
          },
          {
            field: 'repassword',
            ifShow: !unref(isUpdate),
          },
        ]);
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('AccessControl.user.add') : t('AccessControl.user.edit'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const result = await saveUser(values);
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
