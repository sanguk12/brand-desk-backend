import { BasicFetchResult, BasicPageParams} from '/@/api/model/baseModel';

export type DictionarySearchParams = BasicPageParams & {
  id?: string;
  name?: string;
};

export type DictionaryParams = {
  id?: string;
  parentId?: string;
  parentValue?: string;
  name?: string;
  multiple?: boolean;
  hasChild?: boolean;
};

export interface DictionaryItem {
  id: number;
  dictionaryId: number;
  value?: string;
  text?: string;
}

export interface Dictionary {
  id?: number;
  code?: string;
  parentId?: number;
  parentData?: number;
  name?: string;
  multiple?: boolean;
  hasChild?: boolean;

  children?: Dictionary[];
  itemList?: DictionaryItem[];
}

/**
 * @description: Request list return value
 */
export type DictionaryListGetResultModel = BasicFetchResult<Dictionary>;
