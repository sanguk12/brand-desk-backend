import { BasicPageParams } from '/@/api/model/baseModel';

export type CategorySearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type CategoryParams = {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  sort: number;
  isLeaf: boolean;
};

export interface CategoryListItem {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  hidden: boolean;
  sort: number;
  isLeaf: boolean;
  selected: boolean;
  modelList: string[];
  containChild: boolean;
  createDate: Date;
  updateDate: Date;
  children: CategoryListItem[];
  attributeMap: Map<string, string>;
}

/**
 * @description: Request list return value
 */
export type CategoryListGetResultModel = CategoryListItem[];
