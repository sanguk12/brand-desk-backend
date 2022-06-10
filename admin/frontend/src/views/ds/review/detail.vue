<template>
  <PageWrapper title="검수 요청 상세">
    <template #extra>
      <a-button type="primary" v-if="reviewData.statusValue == 'REQUEST'" @click="accept">
        검수 접수
      </a-button>
      <a-button type="primary" v-if="reviewData.statusValue == 'REVIEW'" @click="applyFirstReview">
        저장
      </a-button>
      <a-button
        type="primary"
        v-if="reviewData.statusValue == 'FIRST_REVIEW'"
        @click="applySecondReview"
      >
        저장
      </a-button>
    </template>
    <Description
      title="신청 정보"
      :collapseOptions="{ canExpand: true, helpMessage: '신청 정보' }"
      :column="3"
      :data="reviewData"
      :schema="baseSchema"
    />
    <Description
      title="검수 정보"
      :collapseOptions="{ canExpand: true, helpMessage: '검수 정보' }"
      :column="3"
      :data="reviewData"
      :schema="detailSchema"
    />
    <Description
      v-if="!isEmpty(firstReviewSchema)"
      title="1차 검토"
      :collapseOptions="{ canExpand: true, helpMessage: '1차 검토' }"
      :column="3"
      :data="reviewData"
      :schema="firstReviewSchema"
    />
    <Description
      v-if="!isEmpty(secondReviewSchema)"
      title="2차 검토"
      :collapseOptions="{ canExpand: true, helpMessage: '2차 검토' }"
      :column="3"
      :data="reviewData"
      :schema="secondReviewSchema"
    />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { DescItem, Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { useRoute } from 'vue-router';
  import {
    getBaseSchema,
    getDetailSchema,
    getElements,
    getFirstReviewReadonlySchema,
    getFirstReviewSchema,
    getSecondReviewReadonlySchema,
    getSecondReviewSchema,
  } from './review.data';

  import {
    firstReviewApply,
    getElementTypeList,
    getReviewDetail,
    reviewAccept,
    secondReviewApply,
  } from '/@/api/ds/review';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { isEmpty } from '/@/utils/is';
  import { ReviewDetailItem } from '/@/api/ds/model/review';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const route = useRoute();
      const { hasPermission } = usePermission();
      const { createConfirm, createWarningModal } = useMessage();

      const reqId = ref(Number(route.params?.id));
      const reviewData = ref<ReviewDetailItem>({} as any);
      const detailSchema = ref<DescItem[]>([]);
      const firstReviewSchema = ref<DescItem[]>([]);
      const secondReviewSchema = ref<DescItem[]>([]);

      const reviewResult = reactive({
        type1: null,
        type2: null,
        level: null,
        elements: [],
        status2st: null,
        status1st: null,
        reviewComment11st: '',
        reviewComment21st: '',
        reviewComment12st: '',
        reviewComment22st: '',
      });

      const baseSchema = getBaseSchema(reviewResult);

      async function accept() {
        if (isEmpty(reviewResult.level)) {
          createWarningModal({ title: '필수 입력', content: 'Level을 선택하세요' });
        } else {
          createConfirm({
            iconType: 'info',
            title: '접수 처리',
            content: '검수 접수를 하시겠습니까? 사용자 화면에서 상태가 ‘검수중’으로 변경됩니다.',
            onOk: async () => {
              await reviewAccept(reqId.value, reviewResult);
              reviewData.value = await getReviewDetail(reqId.value);
            },
          });
        }
      }
      async function applyFirstReview() {
        await firstReviewApply(reqId.value, reviewResult);
      }

      async function applySecondReview() {
        await secondReviewApply(reqId.value, reviewResult);
      }

      onMounted(async () => {
        reviewData.value = await getReviewDetail(reqId.value);

        const elementTypeList = await getElementTypeList();

        reviewResult.type1 = reviewData.value.type1;
        reviewResult.type2 = reviewData.value.type2;
        reviewResult.level = reviewData.value.level;
        reviewResult.elements = getElements(reviewData.value, elementTypeList);
        console.log(reviewResult.elements);
        reviewResult.reviewComment11st = reviewData.value.reviewComment11st;
        reviewResult.reviewComment21st = reviewData.value.reviewComment21st;
        reviewResult.reviewComment12st = reviewData.value.reviewComment12st;
        reviewResult.reviewComment22st = reviewData.value.reviewComment22st;

        detailSchema.value = getDetailSchema(reviewResult, elementTypeList);
        if (reviewData.value.statusValue == 'REVIEW' && hasPermission('FIRST_REVIEW')) {
          firstReviewSchema.value = getFirstReviewSchema(reviewData, reviewResult);
        } else {
          firstReviewSchema.value = getFirstReviewReadonlySchema(reviewData, reviewResult);
        }

        if (reviewData.value.statusValue == 'FIRST_REVIEW' && hasPermission('SECOND_REVIEW')) {
          secondReviewSchema.value = getSecondReviewSchema(reviewData, reviewResult);
        } else {
          secondReviewSchema.value = getSecondReviewReadonlySchema(reviewData, reviewResult);
        }
      });
      return {
        isEmpty,
        reviewData,
        baseSchema,
        detailSchema,
        firstReviewSchema,
        secondReviewSchema,
        accept,
        applyFirstReview,
        applySecondReview,
      };
    },
  });
</script>
