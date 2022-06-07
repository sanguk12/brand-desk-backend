import {
  JoinDetailItem,
  JoinSearchParams,
  JoinSearchResultModel,
} from './model/join';
import { defHttp } from '/@/utils/http/axios';
import {getCsrf} from "/@/api/sys/csrf";

enum Api {
  JoinList = '/api/join/list',
  JoinDetail = '/api/join/detail/',
  JoinApprove = '/api/join/approve/',
  JoinReject = '/api/join/reject/',
}

export const getJoinList = (data?: JoinSearchParams) =>
  defHttp.post<JoinSearchResultModel>({ url: Api.JoinList, data });


export const getJoinDetail = (id: number) =>
  defHttp.get<JoinDetailItem>({ url: Api.JoinDetail + id });

export async function joinApprove(id: number, download: boolean) {
  const _csrf = await getCsrf();
  return defHttp.post<number>({ url: Api.JoinApprove + id , params: {download, _csrf}});
}

export async function joinReject(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post<number>({ url: Api.JoinReject + id , params: {_csrf}});
}
