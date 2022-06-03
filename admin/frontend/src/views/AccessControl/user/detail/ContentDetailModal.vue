<template>
  <BasicModal @register="registerModal" title="Log Detail View" width="50%">
    <JsonPreview :data="jsonData" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { JsonPreview } from '/@/components/CodeEditor';

  export default defineComponent({
    name: 'JSONViewModal',
    components: { BasicModal, JsonPreview },
    setup() {
      const { t } = useI18n();

      const jsonData = ref({});
      const [registerModal] = useModalInner(async (data) => {
        jsonData.value = JSON.parse(data.record.content);
      });

      return { t, registerModal, jsonData };
    },
  });
</script>
