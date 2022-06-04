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
      <template #itemList="{ model, field }">
        <ItemListTable
          v-model:value="dictionary.itemList"
          :model="model"
          :field="field"
          :has-child="dictionary.hasChild"
          @add-child="handleAddChild"
          ref="itemListTableRef"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import {computed, defineComponent, ref, unref} from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { getFormCodeSchema, getFormSchema } from './dict.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getDictionaryChild, getDictionaryDetail, saveDictionary } from '/@/api/cms/dictionary';
  import ItemListTable from './ItemListTable.vue';
  import { Dictionary } from '/@/api/cms/model/dictionary';

  export default defineComponent({
    name: 'DictModal',
    components: { BasicModal, BasicForm, ItemListTable },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const isUpdate = ref(true);
      const itemListTableRef = ref(null);

      const dictionary = ref<Dictionary>({
        itemList: [],
      });

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: getFormSchema(),
        showActionButtonGroup: false,
      });

      async function initModal(data) {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const dictDetail = await getDictionaryDetail(data.record.id);
          dictionary.value = dictDetail;

          await setFieldsValue({
            ...dictDetail,
            isUpdate: isUpdate.value,
          });

          await updateSchema(getFormCodeSchema(data.record.id));
        } else {
          dictionary.value = { itemList: [] };
          await setFieldsValue({
            ...data.record,
            isUpdate: isUpdate.value,
          });

          await updateSchema(getFormCodeSchema());
        }
      }
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        initModal(data);
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('Content.dict.add') : t('Content.dict.edit'),
      );

      async function handleAddChild(parentData: number) {
        const id = dictionary.value.id!;
        let childDetail = await getDictionaryChild(id, parentData);
        let hasChild = true;
        if (childDetail === null) {
          childDetail = { parentId: id, parentData };
          hasChild = false;
        }

        initModal({
          record: childDetail,
          isUpdate: hasChild,
        });
      }

      async function handleSubmit() {
        try {
          const dictionary = await validate();
          const itemList = await itemListTableRef.value?.validate();
          dictionary.itemList = itemList;

          setModalProps({ confirmLoading: true });
          const result = await saveDictionary(dictionary);
          console.log(result);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        t,
        registerModal,
        registerForm,
        getTitle,
        dictionary,
        itemListTableRef,
        handleSubmit,
        handleAddChild,
      };
    },
  });
</script>
