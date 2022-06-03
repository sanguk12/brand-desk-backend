import { defHttp } from '/@/utils/http/axios';
import {
  CategoryListGetResultModel,
  CategoryListItem,
  CategoryParams,
  CategorySearchParams,
} from '/@/api/cms/model/category';

import { ContentModelListItem } from '/@/api/cms/model/contentModel';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  CategoryList = '/api/cmsCategory/list',
  CategoryModelList = '/api/cmsCategory/modelList',
  CategoryDetail = '/api/cmsCategory/detail',
  CateSave = '/api/cmsCategory/save',
  CateAttrSave = '/api/cmsCategory/saveAttribute',
  CateDelete = '/api/cmsCategory/delete',
  CateVerify = '/api/cmsCategory/verify',
}

export function getCategoryList(params: CategorySearchParams) {
  return defHttp.get<CategoryListGetResultModel>({ url: Api.CategoryList, params });
}

export function getCategoryDetail(id: number) {
  return defHttp.get<CategoryListItem>({ url: Api.CategoryDetail, params: { id } });
}

export function getCategoryModeList(cateId: number) {
  return defHttp.get<ContentModelListItem[]>({ url: Api.CategoryModelList, params: { cateId } });
}

export async function saveCate(cate: CategoryParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.CateSave, data: cate, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function saveCateAttribute(categoryId: number, attribute: Map<String, String>) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.CateAttrSave, data: { categoryId, attribute }, params: { _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function deleteCate(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.CateDelete, data: { id }, params: { _csrf } });
}

export function verifyCategory(code: string, id?: number) {
  return defHttp.get({ url: Api.CateVerify, params: { code, id } });
}
