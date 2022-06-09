import { defHttp } from '/@/utils/http/axios';

import {
  Dictionary,
  DictionaryListGetResultModel,
  DictionaryParams,
  DictionarySearchParams,
} from '/@/api/cms/model/dictionary';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  DictionaryList = '/api/cmsDictionary/list',
  DictionaryDetail = '/api/cmsDictionary/detail',
  DictionaryChild = '/api/cmsDictionary/child',
  DictionaryTree = '/api/cmsDictionary/tree',
  DictionarySave = '/api/cmsDictionary/save',
  DictionaryDelete = '/api/cmsDictionary/delete',
  DictionaryVerify = '/api/cmsDictionary/verify',
}

export function getDictionaryList(params: DictionarySearchParams) {
  return defHttp.get<DictionaryListGetResultModel>({ url: Api.DictionaryList, params });
}

export function getDictionaryDetail(id: number) {
  return defHttp.get<Dictionary>({ url: Api.DictionaryDetail, params: { id } });
}

export function getDictionaryChild(parentId: number, parentData: number) {
  return defHttp.get<Dictionary | null>({
    url: Api.DictionaryChild,
    params: { parentId, parentData },
  });
}

export function getDictionaryTree(params: DictionarySearchParams) {
  return defHttp.get<DictionaryListGetResultModel>({ url: Api.DictionaryTree, params });
}

export async function saveDictionary(cate: DictionaryParams) {
  const _csrf = await getCsrf();
  return defHttp.post(
    {
      url: Api.DictionarySave,
      data: cate,
      params: { _csrf },
    },
    { errorMessageMode: 'none' },
  );
}

export async function deleteDictionary(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.DictionaryDelete, data: { id }, params: { _csrf } });
}

export function verifyDictionary(code: string, id?: number) {
  return defHttp.get({ url: Api.DictionaryVerify, params: { code, id } });
}
