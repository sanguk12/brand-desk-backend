import {
  ModuleSearchParams,
  RoleModuleParams,
  RoleParams,
  ModuleListItem,
  RolePageListGetResultModel,
} from './model/model';
import { defHttp } from '/@/utils/http/axios';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  RoleList = '/api/sysRole/list',
  RoleTree = '/api/sysRole/tree',
  RoleSave = '/api/sysRole/save',
  RoleDelete = '/api/sysRole/delete',
  ModuleList = '/api/sysRole/moduleList',
  ModuleTree = '/api/sysRole/moduleTree',
  SaveModule = '/api/sysRole/saveModule',
  SaveShowAllModule = '/api/sysRole/saveShowAllModule',
  SaveOwnsAllRight = '/api/sysRole/saveOwnsAllRight',
}

export const getRoleList = (params?: RoleParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RoleList, params });

export async function saveRole(role: RoleParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.RoleSave, data: role, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function saveModule(roleId: number, moduleIds: string[]) {
  const _csrf = await getCsrf();

  return defHttp.post(
    { url: Api.SaveModule, params: { roleId, moduleIds: moduleIds, _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function deleteRole(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.RoleDelete, params: { id, _csrf } });
}

export const getRoleModuleList = (params: ModuleSearchParams) =>
  defHttp.get<ModuleListItem[]>({ url: Api.ModuleList, params });

export const getRoleModuleTree = (params: ModuleSearchParams) =>
  defHttp.get<ModuleListItem[]>({ url: Api.ModuleTree, params });

export const saveRoleModule = async (roleId: number, moduleList: RoleModuleParams[]) => {
  const _csrf = await getCsrf();
  defHttp.post<number[]>({ url: Api.SaveModule, data: { roleId, moduleList }, params: { _csrf } });
};

export const saveShowAllModule = async (roleId: number, showAllModule: boolean) => {
  const _csrf = await getCsrf();
  defHttp.post<number[]>({ url: Api.SaveShowAllModule, params: { roleId, showAllModule, _csrf } });
};

export const saveOwnsAllRight = async (roleId: number, ownsAllRight: boolean) => {
  const _csrf = await getCsrf();
  defHttp.post<number[]>({ url: Api.SaveOwnsAllRight, params: { roleId, ownsAllRight, _csrf } });
};
