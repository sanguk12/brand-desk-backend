import {
  AccountListGetResultModel,
  AccountParams,
  DeptListGetResultModel,
  DeptListItem,
  MenuListGetResultModel,
  MenuParams,
  RoleListGetResultModel,
  RolePageListGetResultModel,
  RolePageParams,
  RoleParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/basic-api/system/getAccountList',
  IsAccountExist = '/basic-api/system/accountExist',
  DeptList = '/basic-api/system/getDeptList',
  setRoleStatus = '/basic-api/system/setRoleStatus',
  MenuList = '/basic-api/system/getMenuList',
  RolePageList = '/basic-api/system/getRoleListByPage',
  GetAllRoleList = '/basic-api/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
