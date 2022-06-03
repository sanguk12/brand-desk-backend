import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/analysis',
  meta: {
    title: 'routes.dashboard.dashboard',
    hideChildrenInMenu: true,
    icon: 'bx:bx-home',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        hideMenu: true,
        hideBreadcrumb: true,
        title: 'routes.dashboard.analysis',
        currentActiveMenu: '/dashboard',
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        hideMenu: true,
        hideBreadcrumb: true,
        title: 'routes.dashboard.workbench',
        currentActiveMenu: '/dashboard',
        icon: 'bx:bx-home',
      },
    },
  ],
};

const accessControlRoute = {
  path: '/accessControl',
  name: 'AccessControl',
  component: 'LAYOUT',
  redirect: '/accessControl/user',
  meta: {
    icon: 'carbon:hardware-security-module',
    title: 'routes.AccessControl.moduleName',
  },
  children: [
    {
      path: 'users',
      name: 'UserManagement',
      meta: {
        title: 'routes.AccessControl.user.list',
        ignoreKeepAlive: true,
        icon: 'bxs:user',
      },
      component: '/AccessControl/user/index',
    },
    {
      path: 'user/:id',
      name: 'UserDetail',
      meta: {
        hideMenu: true,
        title: 'routes.AccessControl.user.detail',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/accessControl/users',
      },
      component: '/AccessControl/user/UserDetail',
    },
    {
      path: 'depts',
      name: 'DeptManagement',
      meta: {
        title: 'routes.AccessControl.dept.list',
        ignoreKeepAlive: true,
        icon: 'akar-icons:people-group',
      },
      component: '/AccessControl/dept/index',
    },
    {
      path: 'roles',
      name: 'RoleManagement',
      meta: {
        title: 'routes.AccessControl.role.list',
        ignoreKeepAlive: true,
        icon: 'clarity:group-solid-alerted',
      },
      component: '/AccessControl/role/index',
    },
    {
      path: 'modules',
      name: 'ModuleManagement',
      meta: {
        title: 'routes.AccessControl.module.list',
        ignoreKeepAlive: true,
        icon: 'ic:round-view-module',
      },
      component: '/AccessControl/module/index',
    },
  ],
};

const contentRoute = {
  path: '/content',
  name: 'Content',
  component: 'LAYOUT',
  redirect: '/content/category',
  meta: {
    icon: 'eos-icons:content-lifecycle-management',
    title: 'routes.Content.moduleName',
  },
  children: [
    {
      path: 'categories',
      name: 'CategoryManagement',
      meta: {
        title: 'routes.Content.cate.list',
        ignoreKeepAlive: true,
        icon: 'carbon:category',
      },
      component: '/Content/category/index',
    },
    {
      path: 'categoryTypes',
      name: 'CategoryTypeManagement',
      meta: {
        title: 'routes.Content.cateType.list',
        ignoreKeepAlive: true,
        icon: 'carbon:category-new-each',
      },
      component: '/Content/categoryType/index',
    },
    {
      path: 'contentModel',
      name: 'ContentModelManagement',
      meta: {
        title: 'routes.Content.model.list',
        ignoreKeepAlive: true,
        icon: 'eos-icons:content-modified',
      },
      component: '/Content/contentModel/index',
    },
    {
      path: 'content',
      name: 'ContentManagement',
      meta: {
        title: 'routes.Content.content.list',
        ignoreKeepAlive: true,
        icon: 'ic:outline-content-copy',
      },
      component: '/Content/content/index',
    },
    {
      path: 'file',
      name: 'FileManagement',
      meta: {
        title: 'routes.Content.file.list',
        ignoreKeepAlive: true,
        icon: 'jam:files-f',
      },
      component: '/Content/file/index',
    },
  ],
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      let checkUser = createFakeUserList().find((item) => item.token === token);
      //const  checkUser = true;
      if (!checkUser) {
        checkUser = createFakeUserList()[0];
        //return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      let menu: Object[];
      switch (id) {
        case '1':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[0].path;
          // menu = [dashboardRoute, authRoute, sysRoute, accessControlRoute, contentRoute];
          menu = [dashboardRoute, accessControlRoute, contentRoute];
          break;
        case '2':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[1].path;
          menu = [dashboardRoute, contentRoute];
          break;
        default:
          menu = [];
      }

      return resultSuccess(menu);
    },
  },
] as MockMethod[];
