<template>
  <PageWrapper
    title="Front-end permission example"
    contentBackground
    contentClass="p-4"
    content="Since the user information interface will be requested when refreshing, the role information will be reset according to the interface, so the interface will be restored to its original state after refreshing. If not, you can comment the user information interface in src/layout/default/index"
  >
    <CurrentPermissionMode />

    <p>
      current role: <a> {{ userStore.getRoleList }} </a>
    </p>
    <Alert class="mt-4" type="info" message="Click to see the changes in the left menu" show-icon />

    <div class="mt-4">
      Permission switching(Please switch the permission mode to the front-end role permission mode
      first):
      <Space>
        <a-button @click="changeRole(RoleEnum.SUPER)" :type="isSuper ? 'primary' : 'default'">
          {{ RoleEnum.SUPER }}
        </a-button>
        <a-button @click="changeRole(RoleEnum.TEST)" :type="isTest ? 'primary' : 'default'">
          {{ RoleEnum.TEST }}
        </a-button>
      </Space>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert, Space } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { PageWrapper } from '/@/components/Page';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';

  export default defineComponent({
    components: { Space, Alert, CurrentPermissionMode, PageWrapper },
    setup() {
      const { changeRole } = usePermission();
      const userStore = useUserStore();

      return {
        userStore,
        RoleEnum,
        isSuper: computed(() => userStore.getRoleList.includes(RoleEnum.SUPER)),
        isTest: computed(() => userStore.getRoleList.includes(RoleEnum.TEST)),
        changeRole,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
