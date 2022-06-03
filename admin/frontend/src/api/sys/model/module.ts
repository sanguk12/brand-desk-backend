import { BasicPageParams } from '/@/api/model/baseModel';

export type ModuleSearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type ModuleParams = {
  id: number;
  name: string;
  parentId: number;
  typeId: number;
  childIds: string;
  code: string;
  sort: number;
  isLeaf: boolean;
};

export interface ModuleListItem {
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
export type ModuleListGetResultModel = ModuleListItem[];
