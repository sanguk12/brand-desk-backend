import { BasicPageParams } from '/@/api/model/baseModel';
import { ExtendFieldItem } from '/@/api/cms/model/model';

export type ContentModelSearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type ContentModelParams = {
  id: string;
  parentId: string;
  name: string;
  description: string;
  hasChild: boolean;
  hasImages: boolean;
  hasFiles: boolean;
};

export interface ContentModelListItem {
  id: string;
  parentId: string;
  name: string;
  description: string;
  hasChild: boolean;
  hasImages: boolean;
  hasFiles: boolean;
  extendList: ExtendFieldItem[];
  children: ContentModelListItem[];
}

export interface ContentModelDetailItem {
  id?: string;
  parentId?: string;
  name?: string;
  description?: string;
  hasChild?: boolean;
  hasImages?: boolean;
  hasFiles?: boolean;
  coverLabel?: string;
  descriptionLabel?: string;
  titleLabel?: string;
  useCover?: boolean;
  useDescription?: boolean;
  useTitle?: boolean;

  extendList?: ExtendFieldItem[];
  children?: ContentModelListItem[];
}

/**
 * @description: Request list return value
 */
export type ContentModelListGetResultModel = ContentModelListItem[];
