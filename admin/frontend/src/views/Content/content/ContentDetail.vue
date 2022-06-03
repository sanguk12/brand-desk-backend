<template>
  <div :class="prefixCls"> </div>
</template>

<script lang="ts">
  import { Row } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      [Row.name]: Row,
    },
    setup() {
      const { t } = useI18n();

      return {
        prefixCls: 'content-detail',
        t,
      };
    },
  });
</script>
