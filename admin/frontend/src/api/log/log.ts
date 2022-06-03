import { defHttp } from '/@/utils/http/axios';
import {
  ActionListResultModel,
  ActionParams,
  LoginListGetResultModel,
  LoginParams,
} from '/@/api/log/model/model';

enum Api {
  LoginList = '/api/log/login',
  ActionList = '/api/log/action',
}

export function getLoginList(params: LoginParams) {
  return defHttp.get<LoginListGetResultModel>({ url: Api.LoginList, params });
}

export function getActionList(params: ActionParams) {
  return defHttp.get<ActionListResultModel>({ url: Api.ActionList, params });
}
