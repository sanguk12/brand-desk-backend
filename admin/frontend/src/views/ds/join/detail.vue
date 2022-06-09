<template>
  <PageWrapper title="가입 요청 상세">
    <template #extra>
      <a-button type="primary" :disabled="baseData.status == 3" danger @click="reject">
        반려
      </a-button>
      <a-button type="primary" :disabled="baseData.status == 2" @click="approveWithDownload">
        승인(다운로드 권한 부여)
      </a-button>
      <a-button type="primary" :disabled="baseData.status == 2" @click="approveWithoutDownload">
        승인(다운로드 권한 미부여)
      </a-button>
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
  import { joinApprove, joinReject, getJoinDetail } from '/@/api/ds/join';
  import { useRoute } from 'vue-router';
  import { baseSchema, detailSchema } from './join.data';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const go = useGo();
      const route = useRoute();
      const reqId = ref(Number(route.params?.id));
      const baseData = ref({});

      async function approveWithDownload() {
        await joinApprove(reqId.value, true);
        alert('승인했습니다');
        go('/ds/join/list');
      }
      async function approveWithoutDownload() {
        await joinApprove(reqId.value, false);
        alert('승인했습니다');
        go('/ds/join/list');
      }

      async function reject() {
        await joinReject(reqId.value);
        alert('반려했습니다');
        go('/ds/join/list');
      }

      onMounted(async () => {
        baseData.value = await getJoinDetail(reqId.value);
      });
      return {
        baseData,
        baseSchema,
        detailSchema,
        approveWithDownload,
        approveWithoutDownload,
        reject,
      };
    },
  });
</script>
