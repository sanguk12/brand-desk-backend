<template>
  <div :class="prefixCls">
    <a-row :class="`${prefixCls}-top`">
      <Description
        :title="t('AccessControl.user.info')"
        :collapseOptions="{ canExpand: true, helpMessage: t('AccessControl.user.info_help') }"
        :data="user"
        :schema="schema"
      />
    </a-row>
    <div :class="`${prefixCls}-bottom`">
      <a-tabs default-active-key="project" v-model:activeKey="currentTab">
        <a-tab-pane key="login" :tab="t('AccessControl.user.login_log')" />
        <a-tab-pane key="action" :tab="t('AccessControl.user.action_log')" />
      </a-tabs>
    </div>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentTab == 'login'">
        <LoginLog />
      </template>
      <template v-if="currentTab == 'action'">
        <ActionLog />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import { Row, Tabs } from 'ant-design-vue';
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getUserInfo } from '/@/api/sys/user';

  import { useTabs } from '/@/hooks/web/useTabs';

  import ActionLog from './detail/ActionLog.vue';
  import LoginLog from './detail/LoginLog.vue';

  import headerImg from '/@/assets/images/avata.png';
  import { DescItem, Description } from '/@/components/Description/index';

  export default defineComponent({
    components: {
      Description,
      [Row.name]: Row,
      ATabs: Tabs,
      ATabPane: Tabs.TabPane,
      ActionLog,
      LoginLog,
    },
    setup() {
      const route = useRoute();
      const { t } = useI18n();

      const userId = route.params?.id as unknown as number;
      const currentTab = ref('login');

      const { setTitle } = useTabs();

      const user = ref({});
      const avatar = ref({});

      (async () => {
        const res = await getUserInfo(userId);
        user.value = res;
        avatar.value = res.avatar || headerImg;

        await setTitle(t('AccessControl.user.detail_tab_title', { user: res.nickname }));
      })();

      function getSchema() {
        const schema: DescItem[] = [
          {
            field: 'username',
            label: t('AccessControl.user.username'),
          },
          {
            field: 'admin',
            label: t('AccessControl.user.admin'),
            render: (curVal) => {
              return curVal ? 'Y' : 'N';
            },
          },
          {
            field: 'ownsAllContent',
            label: t('AccessControl.user.all_content'),
            render: (curVal) => {
              return curVal ? 'Y' : 'N';
            },
          },
          {
            label: t('AccessControl.user.role'),
            field: 'roles',
            render: (curVal) => {
              const roles = Array.isArray(curVal) ? curVal : [];
              return roles.map((r) => r.name).join(', ');
            },
          },
          {
            field: 'deptName',
            label: t('AccessControl.user.dept'),
          },
          {
            field: 'nickname',
            label: t('AccessControl.user.nickname'),
          },
          {
            label: t('AccessControl.user.email'),
            field: 'email',
          },
        ];

        return schema;
      }

      const schema: DescItem[] = getSchema();

      return {
        prefixCls: 'user-detail',
        schema,
        t,
        currentTab,
        user,
        avatar,
      };
    },
  });
</script>
<style lang="less" scoped>
  .user-detail {
    &-col:not(:last-child) {
      padding: 0 10px;

      &:not(:last-child) {
        border-right: 1px dashed rgb(206 206 206 / 50%);
      }
    }

    &-top {
      padding: 10px;
      margin: 16px 16px 12px;
      background-color: @component-background;
      border-radius: 3px;

      &__avatar {
        text-align: center;

        img {
          margin: auto;
          border-radius: 50%;
        }

        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }

        div {
          margin-top: 3px;
          font-size: 12px;
        }
      }

      &__detail {
        padding-left: 20px;
        margin-top: 15px;
      }

      &__team {
        &-item {
          display: inline-block;
          padding: 4px 24px;
        }

        span {
          margin-left: 3px;
        }
      }
    }

    &-bottom {
      padding: 10px;
      margin: 0 16px 16px;
      background-color: @component-background;
      border-radius: 3px;
    }
  }
</style>
