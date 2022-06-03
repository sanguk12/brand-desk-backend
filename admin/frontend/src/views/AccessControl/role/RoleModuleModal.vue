<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="t('AccessControl.role.edit_module')"
    @ok="handleSave"
    :cancelButtonProps="{ hidden: true }"
    :width="800"
    :min-height="400"
  >
    <Row>
      <Col :span="24">
        <Checkbox v-model:checked="ownsAllModule" @change="handleOwnsAllModule">{{
          t('AccessControl.role.own_all_module')
        }}</Checkbox>
        <Checkbox v-model:checked="ownsAllRight" @change="handleOwnsAllRight">{{
          t('AccessControl.role.own_all_right')
        }}</Checkbox>
      </Col>
      <Divider />
      <Col :span="24">
        <BasicTree
          ref="moduleTreeRef"
          :checkable="true"
          :checkStrictly="true"
          :selectable="false"
          :treeData="treeData"
          :checkedKeys="checkedKeys"
          :fieldNames="{
            key: 'id',
            children: 'children',
          }"
        >
          <template #title="item">
            <TreeIcon v-if="item.icon" :icon="getTreeIcon(item)" />
            {{ item.enName }}
          </template>
        </BasicTree>
      </Col>
    </Row>
  </BasicModal>
</template>
<script lang="ts">
  import { Checkbox, Col, Divider, Row } from 'ant-design-vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { TreeIcon } from '/@/components/Tree/src/TreeIcon';
  import { BasicTree } from '/@/components/Tree';
  import { defineComponent, reactive, ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { isEmpty } from 'lodash-es';

  import {
    getRoleModuleTree,
    saveOwnsAllRight,
    saveModule,
    saveShowAllModule,
  } from '/@/api/sys/role';
  import type { ModuleListItem } from '/@/api/sys/model/model';
  import { filterDeep } from 'deepdash-es/standalone';

  export default defineComponent({
    name: 'RoleModuleManagement',
    components: { BasicModal, Checkbox, BasicTree, TreeIcon, Col, Divider, Row },
    setup() {
      const { t } = useI18n();

      const moduleTreeRef = ref();
      const searchInfo = reactive<Recordable>({ roleId: null, moduleId: null });
      const checkedKeys = ref<string[]>([]);
      const loading = ref(false);
      const treeData = ref<ModuleListItem[]>([]);
      const roleCateTable = ref<ElRef>(null);

      const ownsAllModule = ref(false);
      const ownsAllRight = ref(false);

      const [registerModal, { setModalProps }] = useModalInner(async (data) => {
        ownsAllModule.value = data.record.ownsAllModule;
        ownsAllRight.value = data.record.ownsAllRight;

        searchInfo.roleId = data.record.id;

        const moduleTree = await getRoleModuleTree({ roleId: searchInfo.roleId });
        treeData.value = moduleTree;

        const selectList = filterDeep(
          moduleTree,
          (_value, _key, parent) => {
            return parent.selected;
          },
          {
            childrenPath: ['children'],
          },
        );
        checkedKeys.value = selectList == null ? [] : selectList!.map((v) => v.id);
      });

      function handleOwnsAllModule() {
        try {
          setModalProps({ confirmLoading: true });
          loading.value = true;

          saveShowAllModule(searchInfo.roleId, ownsAllModule.value);
        } finally {
          setModalProps({ confirmLoading: false });
          loading.value = false;
        }
      }

      function handleOwnsAllRight() {
        try {
          setModalProps({ confirmLoading: true });
          loading.value = true;

          saveOwnsAllRight(searchInfo.roleId, ownsAllModule.value);
        } finally {
          setModalProps({ confirmLoading: false });
          loading.value = false;
        }
      }

      function handleSave() {
        try {
          setModalProps({ confirmLoading: true });
          loading.value = true;
          const checkedKeys = moduleTreeRef.value.getCheckedKeys().checked;
          console.log(checkedKeys);
          saveModule(searchInfo.roleId, checkedKeys);
        } finally {
          setModalProps({ confirmLoading: false });
          loading.value = false;
        }
      }

      function getTreeIcon({ icon }) {
        console.log(icon)
        return icon;
      }

      return {
        t,
        isEmpty,
        moduleTreeRef,
        loading,
        treeData,
        roleCateTable,
        ownsAllModule,
        ownsAllRight,
        registerModal,
        handleOwnsAllModule,
        handleOwnsAllRight,
        handleSave,
        checkedKeys,
        searchInfo,
        getTreeIcon,
      };
    },
  });
</script>
