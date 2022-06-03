<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #userSearch="{ model, field }">
        <a-select
          v-model:value="model[field]"
          showSearch
          allowClear
          :placeholder="t('AccessControl.dept.search_user')"
          style="width: 200px"
          :default-active-first-option="false"
          :show-arrow="false"
          :filter-option="false"
          :not-found-content="null"
          :options="managerList"
          @search="handleManagerSearch"
          @change="handleManagerChange"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './dept.data';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getDeptTree, saveDept } from '/@/api/sys/dept';
  import { getManagerList } from '/@/api/sys/user';
  import { Select } from 'ant-design-vue';
  import { filterDeep } from 'deepdash-es/standalone';

  export default defineComponent({
    name: 'DeptModal',
    components: { BasicModal, BasicForm, ASelect: Select },
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
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        const treeData = await getDeptTree();

        if (unref(isUpdate)) {
          await setFieldsValue({
            ...data.record,
          });

          filterDeep(
            treeData,
            function (o) {
              o.disabled = data.record.id === o.id;
              return true;
            },
            { childrenPath: ['children'] },
          );

          await handleManagerSearch(data.record.managerName);
        }

        await updateSchema({
          field: 'parentId',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() =>
        !unref(isUpdate) ? t('AccessControl.dept.add') : t('AccessControl.dept.edit'),
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          const result = await saveDept(values);
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
