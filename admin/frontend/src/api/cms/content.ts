import { defHttp } from '/@/utils/http/axios';

import {
  ContentListGetResultModel,
  ContentParams,
  ContentSearchParams,
} from '/@/api/cms/model/content';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  ContentList = '/api/cmsContent/list',
  ContentSave = '/api/cmsContent/save',
  ContentDelete = '/api/cmsContent/delete',
}

export function getContentList(data: ContentSearchParams) {
  return defHttp.post<ContentListGetResultModel>({
    url: Api.ContentList,
    data,
    params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
  });
}

export async function saveContent(content: ContentParams) {
  const _csrf = await getCsrf();

  return defHttp.post(
    {
      url: Api.ContentSave,
      data: content,
      params: { _csrf },
    },
    { errorMessageMode: 'none' },
  );
}

export async function deleteContent(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.ContentDelete, data: { id }, params: { _csrf } });
}
