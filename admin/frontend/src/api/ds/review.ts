import {
  ReviewDetailItem,
  ReviewSearchParams,
  ReviewSearchResultModel,
} from './model/review';
import { defHttp } from '/@/utils/http/axios';
import {getCsrf} from "/@/api/sys/csrf";
import {DictionaryItem} from "/@/api/cms/model/dictionary";

enum Api {
  ReviewList = '/api/review/list',
  ReviewDetail = '/api/review/detail/',
  ReviewApprove = '/api/review/approve/',
  ReviewReject = '/api/review/reject/',
  ReviewTypeList = '/api/review/typeList',
  ReviewStatusList = '/api/review/statusList',
}

export const getReviewList = (data?: ReviewSearchParams) =>
  defHttp.post<ReviewSearchResultModel>({ url: Api.ReviewList, data });

export const getReviewDetail = (id: number) =>
  defHttp.get<ReviewDetailItem>({ url: Api.ReviewDetail + id });

export async function reviewApprove(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post<number>({ url: Api.ReviewApprove + id , params: {_csrf}});
}

export async function reviewReject(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post<number>({ url: Api.ReviewReject + id , params: {_csrf}});
}

export function getTypeList(parentData?: number | string) {
  return defHttp.get<DictionaryItem[]>({ url: Api.ReviewTypeList, params: { parentData: parentData ? parentData : '' } })
}

export function getType2List(params) {
  if(params.parentData == null)
  {
    return [];
  }
  return defHttp.get<DictionaryItem[]>({ url: Api.ReviewTypeList, params })
}

export function getStatusList(params) {
  return defHttp.get<DictionaryItem[]>({ url: Api.ReviewStatusList, params })
}
