import { defHttp } from '/@/utils/http/axios';
import {
  ContentModelDetailItem,
  ContentModelListGetResultModel,
  ContentModelParams,
} from '/@/api/cms/model/contentModel';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  ContentModelTree = '/api/cmsModel/tree',
  ContentModelList = '/api/cmsModel/list',
  ContentModelSave = '/api/cmsModel/save',
  ContentModelDelete = '/api/cmsModel/delete',
  ContentModelDetail = '/api/cmsModel/',
}

export function getContentModelTree() {
  return defHttp.get<ContentModelListGetResultModel>({ url: Api.ContentModelTree });
}

export function getContentModelList() {
  return defHttp.get<ContentModelListGetResultModel>({ url: Api.ContentModelList });
}

export function getContentModelDetail(id: string) {
  return defHttp.get<ContentModelDetailItem>({ url: Api.ContentModelDetail + id });
}

export async function saveContentModel(contentModel: ContentModelParams, modelId?: string) {
  const _csrf = await getCsrf();
  return defHttp.post(
    { url: Api.ContentModelSave, data: contentModel, params: { modelId, _csrf } },
    { errorMessageMode: 'none' },
  );
}

export async function deleteContentModel(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.ContentModelDelete, data: { id }, params: { _csrf } });
}
