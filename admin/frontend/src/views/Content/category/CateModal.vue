<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { getFormCodeSchema, getFormSchema } from './cate.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getManagerList } from '/@/api/sys/user';
  import { saveCate, getCategoryDetail } from '/@/api/cms/category';

  export default defineComponent({
    name: 'CateModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const isUpdate = ref(true);

      const handleManagerSearch = async (val: string) => {
        const result = await getManagerList({ name: val });
        managerList.value = result.list.map((user) => ({
          label: `${user.nickname}`,
          value: user.id,
        }));
      };

      const handleManagerChange = (val: string) => {
        console.log(val);
        managerId.value = val;
      };

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
          const cateDetail = await getCategoryDetail(data.record.id);
          await setFieldsValue({
            ...cateDetail,
            isUpdate: isUpdate.value,
          });

          await updateSchema(getFormCodeSchema(data.record.id));

          await handleManagerSearch(data.record.managerName);
        } else {
          await setFieldsValue({
            ...data.record,
            isUpdate: isUpdate.value,
          });

          await updateSchema(getFormCodeSchema());
        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.cate.add') : t('Content.cate.edit'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const result = await saveCate(values);
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
        handleManagerSearch,
        handleManagerChange,
        managerList,
        managerId,
      };
    },
  });
</script>
