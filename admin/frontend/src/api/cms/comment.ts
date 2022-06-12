import { defHttp } from '/@/utils/http/axios';

import {
  CommentListGetResultModel, CommentListItem,
  CommentParams,
  CommentSearchParams,
} from '/@/api/cms/model/comment';
import { getCsrf } from '/@/api/sys/csrf';

enum Api {
  CommentList = '/api/cmsComment/list',
  CommentDetail = '/api/cmsComment/',
  CommentSave = '/api/cmsComment/save',
  CommentDelete = '/api/cmsComment/delete',
}

export function getCommentList(data: CommentSearchParams) {
  return defHttp.post<CommentListGetResultModel>({
    url: Api.CommentList,
    data,
    params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
  });
}

export function getCommentDetail(id: number) {
  return defHttp.get<CommentListItem>({
    url: Api.CommentDetail + id,
  });
}

export async function saveComment(content: CommentParams) {
  const _csrf = await getCsrf();

  return defHttp.post(
    {
      url: Api.CommentSave,
      data: content,
      params: { _csrf },
    },
    { errorMessageMode: 'none' },
  );
}

export async function deleteComment(id: number) {
  const _csrf = await getCsrf();
  return defHttp.post({ url: Api.CommentDelete, data: { id }, params: { _csrf } });
}
