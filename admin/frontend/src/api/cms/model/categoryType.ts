import { BasicPageParams } from '/@/api/model/baseModel';
import { ExtendItem } from '/@/api/cms/model/model';

export type CategoryTypeSearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type CategoryTypeParams = {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  sort: number;
};

export interface CategoryTypeListItem {
  id: number;
  name: string;
  sort: number;
}

export interface CategoryTypeDetailItem {
  id?: number;
  name?: string;
  code?: string;
  sort?: number;
  extend?: ExtendItem;
}

/**
 * @description: Request list return value
 */
export type CategoryTypeListGetResultModel = CategoryTypeListItem[];
