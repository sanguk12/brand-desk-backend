<template>
  <PageWrapper
    title="Front-end permission button example"
    contentBackground
    contentClass="p-4"
    content="Since the user information interface will be requested when refreshing, the role information will be reset according to the interface, so the interface will be restored to its original state after refreshing. If not, you can comment the user information interface in src/layout/default/index"
  >
    <CurrentPermissionMode />

    <p>
      current role: <a> {{ userStore.getRoleList }} </a>
    </p>
    <Alert
      class="mt-4"
      type="info"
      message="Please see the button changes after clicking"
      show-icon
    />

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
    <Divider
      >Component way to judge permissions(If necessary, you can register globally by
      yourself)</Divider
    >
    <Authority :value="RoleEnum.SUPER">
      <a-button type="primary" class="mx-4"> Visible with super role permissions </a-button>
    </Authority>

    <Authority :value="RoleEnum.TEST">
      <a-button color="success" class="mx-4"> Visible with test role permissions </a-button>
    </Authority>

    <Authority :value="[RoleEnum.TEST, RoleEnum.SUPER]">
      <a-button color="error" class="mx-4"> Visible with [test, super] role permissions </a-button>
    </Authority>

    <Divider>
      Judging permissions by function method(Suitable for filtering inside functions)
    </Divider>
    <a-button v-if="hasPermission(RoleEnum.SUPER)" type="primary" class="mx-4">
      Visible with super role permissions
    </a-button>

    <a-button v-if="hasPermission(RoleEnum.TEST)" color="success" class="mx-4">
      Visible with test role permissions
    </a-button>

    <a-button v-if="hasPermission([RoleEnum.TEST, RoleEnum.SUPER])" color="error" class="mx-4">
      Visible with [test, super] role permissions
    </a-button>

    <Divider>
      Judging authority by command method(This method cannot dynamically modify permissions.)
    </Divider>
    <a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4">
      Visible with super role permissions
    </a-button>

    <a-button v-auth="RoleEnum.TEST" color="success" class="mx-4">
      Visible with test role permissions
    </a-button>

    <a-button v-auth="[RoleEnum.TEST, RoleEnum.SUPER]" color="error" class="mx-4">
      Visible with [test, super] role permissions
    </a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Alert, Divider, Space } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { useUserStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { Alert, PageWrapper, Space, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { changeRole, hasPermission } = usePermission();
      const userStore = useUserStore();

      return {
        userStore,
        RoleEnum,
        isSuper: computed(() => userStore.getRoleList.includes(RoleEnum.SUPER)),
        isTest: computed(() => userStore.getRoleList.includes(RoleEnum.TEST)),
        changeRole,
        hasPermission,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
