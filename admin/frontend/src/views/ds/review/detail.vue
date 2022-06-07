<template>
  <PageWrapper title="가입 요청 상세">
    <template #extra>
      <a-button type="primary" :disabled='baseData.status == 3' danger @click="reject"> 반려 </a-button>
      <a-button type="primary" :disabled='baseData.status == 2' @click="approve"> 승인 </a-button>
    </template>
    <Description
      title="기본 정보"
      :collapseOptions="{ canExpand: true, helpMessage: '기본 정보' }"
      :column="3"
      :data="baseData"
      :schema="baseSchema"
    />
    <Description
      title="상세 정보"
      :collapseOptions="{ canExpand: true, helpMessage: '상세 정보' }"
      :column="3"
      :data="baseData"
      :schema="detailSchema"
    />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from "vue-router";
  import { baseSchema, detailSchema } from './review.data';
  import { useGo } from '/@/hooks/web/usePage';
import {getReviewDetail, reviewApprove, reviewReject} from "/@/api/ds/review";

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const go = useGo();
      const route = useRoute();
      const reqId = ref(Number(route.params?.id));
      const baseData = ref({});

      async function approve() {
        await reviewApprove(reqId.value)
        alert("승인했습니다");
        go('/ds/review/list');
      }

      async function reject() {
        await reviewReject(reqId.value)
        alert("반려했습니다");
        go('/ds/review/list');
      }

      onMounted(async () => {
        baseData.value = await getReviewDetail(reqId.value);
      });
      return { baseData, baseSchema, detailSchema, approve,reject  };
    },
  });
</script>
