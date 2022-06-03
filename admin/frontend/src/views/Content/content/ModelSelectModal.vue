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
    <a-select
      :options="modelList"
      v-model:modelId="modelId"
      :field-names="{ label: 'name', value: 'id' }"
    />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType, ref} from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Select } from 'ant-design-vue';

  export default defineComponent({
    name: 'ModelSelectModal',
    components: { BasicModal, ASelect: Select },
    emits: ['success', 'register'],
    props: {
      modelList: Object as PropType<string>,
    },
    setup(_, { emit }) {
      const { t } = useI18n();

      const modelId = ref(null as string|null);

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async () => {
        modelId.value = null;
      });

      const getTitle = computed(() => t('Content.content.select_model') );

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });

          closeModal();
          emit('success', { modelId });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { t, registerModal, getTitle, handleSubmit, modelId };
    },
  });
</script>
