<template>
  <PageWrapper contentBackground title="Button Access Control" contentClass="p-4">
    <CurrentPermissionMode />
    <p>
      List of currently owned codes: <a> {{ permissionStore.getPermCodeList }} </a>
    </p>
    <Divider />
    <Alert
      class="mt-4"
      type="info"
      message="Please see the button changes after clicking(You must be in background permission mode to test the features shown on this page)"
      show-icon
    />
    <Divider />
    <a-button type="primary" class="mr-2" @click="switchToken(2)" :disabled="!isBackPremissionMode">
      Click the toggle button permissions(User id is 2)
    </a-button>
    <a-button type="primary" @click="switchToken(1)" :disabled="!isBackPremissionMode">
      Click the toggle button permissions(User id is 1,default)
    </a-button>

    <template v-if="isBackPremissionMode">
      <Divider>Component way to judge permissions</Divider>
      <Authority :value="'1000'">
        <a-button type="primary" class="mx-4"> code ['1000']</a-button>
      </Authority>

      <Authority :value="'2000'">
        <a-button color="success" class="mx-4"> code ['2000']</a-button>
      </Authority>

      <Authority :value="['1000', '2000']">
        <a-button color="error" class="mx-4">code ['1000','2000'] </a-button>
      </Authority>

      <Divider></Divider>
      <a-button v-if="hasPermission('1000')" type="primary" class="mx-4">
        code ['1000']
      </a-button>

      <a-button v-if="hasPermission('2000')" color="success" class="mx-4">
        code ['2000']������ ǥ��
      </a-button>

      <a-button v-if="hasPermission(['1000', '2000'])" color="error" class="mx-4">
        code ['1000','2000']������ ǥ��
      </a-button>

      <Divider>��� ��忡 ���� ���� �Ǵ� (�� ���� ������ �������� ������ �� �����ϴ�.)</Divider>
      <a-button v-auth="'1000'" type="primary" class="mx-4"> code ['1000']������ ǥ��</a-button>

      <a-button v-auth="'2000'" color="success" class="mx-4"> code ['2000']������ ǥ�� </a-button>

      <a-button v-auth="['1000', '2000']" color="error" class="mx-4">
        code ['1000','2000']
      </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert, Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { usePermissionStore } from '/@/store/modules/permission';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { PageWrapper } from '/@/components/Page';
  import { useAppStore } from '/@/store/modules/app';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: { Alert, PageWrapper, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { hasPermission } = usePermission();
      const permissionStore = usePermissionStore();
      const appStore = useAppStore();
      const userStore = useUserStore();

      const isBackPremissionMode = computed(
        () => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK,
      );

      async function switchToken(userId: number) {
        //
        const token = 'fakeToken' + userId;
        userStore.setToken(token);

        //
        userStore.getUserInfoAction();
        permissionStore.changePermissionCode();
      }

      return {
        hasPermission,
        permissionStore,
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
