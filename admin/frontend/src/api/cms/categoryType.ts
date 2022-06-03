import { defHttp } from '/@/utils/http/axios';
import {
  CategoryTypeDetailItem,
  CategoryTypeListGetResultModel,
  CategoryTypeParams,
} from '/@/api/cms/model/categoryType';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  CategoryTypeList = '/api/cmsCategoryType/list',
  CateTypeSave = '/api/cmsCategoryType/save',
  CateTypeDelete = '/api/cmsCategoryType/delete',
  CateTypeDetail = '/api/cmsCategoryType/',
}

export function getCategoryTypeList() {
  return defHttp.get<CategoryTypeListGetResultModel>({ url: Api.CategoryTypeList });
}

export function getCategoryTypeDetail(id: number) {
  return defHttp.get<CategoryTypeDetailItem>({ url: Api.CateTypeDetail + id });
}

export async function saveCateType(cate: CategoryTypeParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    {
      url: Api.CateTypeSave,
      data: cate,
      params: { _csrf },
    },
    { errorMessageMode: 'none' },
  );
}

export async function deleteCateType(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.CateTypeDelete, params: { id, _csrf } });
}
