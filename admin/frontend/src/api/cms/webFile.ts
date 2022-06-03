import { defHttp } from '/@/utils/http/axios';
import { FileListGetResultModel, FileSearchParams, FileListItem } from '/@/api/cms/model/file';

enum Api {
  FileList = '/api/cmsWebFile/list',
  FileDelete = '/api/cmsWebFile/delete',
  FileZip = '/api/cmsWebFile/zip',
  FileUnzip = '/api/cmsWebFile/unzip',
}

export function getFileList(params: FileSearchParams) {
  return defHttp.get<FileListGetResultModel>({ url: Api.FileList, params });
}

export function createZip(path: string) {
  return defHttp.post<FileListItem>({ url: Api.FileZip, params: { path } });
}

export function unzip(path: string) {
  return defHttp.post<FileListItem>({ url: Api.FileUnzip, params: { path } });
}

export function deleteFile(path: string) {
  return defHttp.post({ url: Api.FileDelete, params: { paths: path } });
}
