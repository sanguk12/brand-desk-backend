import { BasicPageParams } from '/@/api/model/baseModel';

export type FileSearchParams = BasicPageParams & {
  path?: string;
};

export interface FileListItem {
  fileName: string;
  directory: boolean;
  lastModifiedTime: Date;
  lastAccessTime: Date;
  creationTime: Date;
  size: number;
}

/**
 * @description: Request list return value
 */
export type FileListGetResultModel = FileListItem[];
