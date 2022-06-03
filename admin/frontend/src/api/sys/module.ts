import { defHttp } from '/@/utils/http/axios';
import {
  ModuleListGetResultModel,
  ModuleListItem,
  ModuleParams,
  ModuleSearchParams,
} from '/@/api/sys/model/module';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  ModuleList = '/api/sysModule/list',
  ModuleDetail = '/api/sysModule/detail',
  ModuleSave = '/api/sysModule/save',
  ModuleDelete = '/api/sysModule/delete',
}

export function getModuleList(params: ModuleSearchParams) {
  return defHttp.get<ModuleListGetResultModel>({ url: Api.ModuleList, params });
}

export function getModuleDetail(id: number) {
  return defHttp.get<ModuleListItem>({ url: Api.ModuleDetail, params: { id } });
}

export async function saveModule(Module: ModuleParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    {
      url: Api.ModuleSave,
      data: Module,
      params: { _csrf },
    },
    { errorMessageMode: 'none' },
  );
}

export async function deleteModule(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.ModuleDelete, data: { id }, params: { _csrf } });
}
