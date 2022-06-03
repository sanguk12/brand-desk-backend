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
      <template #extend="{ model, field }">
        <ExtendFieldTable
          v-model:value="cateType.extend.fieldList"
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
  import { formSchema } from './cate.type.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import ExtendFieldTable from './ExtendFieldTable.vue';
  import { getCategoryTypeDetail, saveCateType } from '/@/api/cms/categoryType';
  import { CategoryTypeDetailItem } from '/@/api/cms/model/categoryType';

  export default defineComponent({
    name: 'CateTypeModal',
    components: { ExtendFieldTable, BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_props, { emit }) {
      const { t } = useI18n();

      const extendFieldTableRef = ref(null);
      const isUpdate = ref(true);
      const cateType = ref<CategoryTypeDetailItem>({
        extend: { fieldList: [] },
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
          await fetchDetail(data.record.id);
        } else {
          cateType.value = { extend: { fieldList: [] } };
        }
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.cateType.add') : t('Content.cateType.edit'),
      );

      async function handleSubmit() {
        try {
          const newCateType = await validate();
          const fields = extendFieldTableRef.value?.validate();
          newCateType.extend = { fieldList: fields };

          await saveCateType(newCateType);

          setModalProps({ confirmLoading: true });
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      async function fetchDetail(id) {
        const detail = await getCategoryTypeDetail(id);
        cateType.value = detail;
      }

      return {
        t,
        extendFieldTableRef,
        cateType,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
