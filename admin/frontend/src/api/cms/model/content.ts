import { BasicPageParams } from '/@/api/model/baseModel';

export type ContentSearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type ContentParams = {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  sort: number;
  isLeaf: boolean;
};

export interface ContentListItem {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  sort: number;
  isLeaf: boolean;
}

/**
 * @description: Request list return value
 */
export type ContentListGetResultModel = ContentListItem[];
