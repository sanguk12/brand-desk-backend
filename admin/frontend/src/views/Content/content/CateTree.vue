<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      :title="t('Content.content.cate_list')"
      toolbar
      search
      :clickRowToExpand="true"
      :loadData="onLoadData"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'name' }"
      ref="cateTreeRef"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, unref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getCategoryList } from '/@/api/cms/category';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { TreeActionType } from '/@/components/Tree/src/tree';
  import { isEmpty } from 'lodash-es';

  export default defineComponent({
    name: 'CateTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const cateTreeRef = ref<Nullable<TreeActionType>>(null);
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = (await getCategoryList({})) as unknown as TreeItem[];
        if (!isEmpty(treeData.value)) {
          handleSelect([treeData.value[0].id]);
        }
      }

      function handleSelect(keys) {
        emit('select', keys[0]);
      }

      onMounted(() => {
        fetch();
      });

      function onLoadData(treeNode) {
        return new Promise(async (resolve: (value?: unknown) => void) => {
          if (!isEmpty(treeNode.children)) {
            resolve();
            return;
          }

          const cateList = await getCategoryList({ cateId: treeNode.id });
          const asyncTreeAction: TreeActionType | null = unref(cateTreeRef);
          if (asyncTreeAction) {
            asyncTreeAction.updateNodeByKey(treeNode.eventKey, { children: cateList });
            asyncTreeAction.setExpandedKeys([
              treeNode.eventKey,
              ...asyncTreeAction.getExpandedKeys(),
            ]);
          }
          resolve();
        });
      }

      return { t, treeData, handleSelect, onLoadData, cateTreeRef };
    },
  });
</script>
