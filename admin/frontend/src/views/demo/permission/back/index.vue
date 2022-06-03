<template>
  <PageWrapper
    title="Background permission example"
    contentBackground
    contentClass="p-4"
    content="At present, two sets of data have been mocked. The id is 1 and 2. The specific menu returned can be viewed in mocksysmenu.ts"
  >
    <CurrentPermissionMode />

    <Alert class="mt-4" type="info" message="Click to see the changes in the left menu" show-icon />

    <div class="mt-4">
      Permission switching(Please switch the permission mode to background permission mode first):
      <Space>
        <a-button @click="switchToken(1)" :disabled="!isBackPremissionMode">
          Get the menu with user id 1
        </a-button>
        <a-button @click="switchToken(2)" :disabled="!isBackPremissionMode">
          Get the menu with user id 2
        </a-button>
      </Space>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useUserStore } from '/@/store/modules/user';
  import { PageWrapper } from '/@/components/Page';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { useAppStore } from '/@/store/modules/app';
  import { Alert, Space } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';

  export default defineComponent({
    components: { Space, Alert, CurrentPermissionMode, PageWrapper },
    setup() {
      const { refreshMenu } = usePermission();
      const userStore = useUserStore();
      const appStore = useAppStore();

      const isBackPremissionMode = computed(
        () => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK,
      );

      async function switchToken(userId: number) {
        // The part of this function to switch the user's login Token is only for demonstration. In actual production, the user should log in again to switch the identity.
        const token = 'fakeToken' + userId;
        userStore.setToken(token);

        // Retrieve user information and menus
        userStore.getUserInfoAction();
        refreshMenu();
      }

      return {
        RoleEnum,
        refreshMenu,
        switchToken,
        isBackPremissionMode,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
