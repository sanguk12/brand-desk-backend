import { defHttp } from '/@/utils/http/axios';
import { GetUserInfoModel, LoginParams, LoginResultModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { UserListGetResultModel, UserParams, UserSearchParams } from '/@/api/sys/model/model';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  Login = '/api/login',
  Logout = '/api/logout',
  GetCurrentUserInfo = '/api/userInfo',
  GetRoleList = '/api/sysUser/roleList',
  TestRetry = '/testRetry',
  GetUserInfo = '/api/sysUser/',
  IsUserExist = '/api/sysUser/exist',
  UserList = '/api/sysUser/list',
  UserSave = '/api/sysUser/save',
  DisableUser = '/api/sysUser/disable/',
  EnableUser = '/api/sysUser/enable/',
}

/**
 * @description: user login api
 */
export function loginApi(data: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      data,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getCurrentUserInfo
 */
export function getCurrentUserInfo() {
  return defHttp.get<GetUserInfoModel>(
    { url: Api.GetCurrentUserInfo },
    { errorMessageMode: 'none' },
  );
}

export function getRoleList() {
  return defHttp.get<string[]>({ url: Api.GetRoleList });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}

export function getUserInfo(id: number) {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo + id }, { errorMessageMode: 'none' });
}

export function getManagerList(params: UserSearchParams) {
  params = { ...params, ...{ admin: true } };
  return defHttp.get<UserListGetResultModel>({ url: Api.UserList, params });
}

export function getUserList(params: UserSearchParams) {
  return defHttp.get<UserListGetResultModel>({ url: Api.UserList, params });
}

export function isUserExist(username: string) {
  return defHttp.post({ url: Api.IsUserExist + '/' + username }, { errorMessageMode: 'none' });
}

export async function saveUser(user: UserParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.UserSave, data: user, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function enableUser(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.DisableUser + id, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function disableUser(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.EnableUser + id, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}
