<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './account.data';
  import { getDeptList } from '/@/api/sys/dept';
  import { isUserExist, saveUser } from '/@/api/sys/user';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        let rules: Rule[] = [];
        if (!unref(isUpdate)) {
          rules = [
            {
              required: true,
              message: 'please enter user name',
            },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  isUserExist(value)
                    .then(() => {
                      resolve();
                    })
                    .catch((err) => {
                      reject(err.message || 'verification failed');
                    });
                });
              },
            },
          ];
        }

        const treeData = await getDeptList();
        updateSchema([
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
          {
            field: 'deptId',
            componentProps: { treeData },
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? 'Add account' : 'Edit account'));

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

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
