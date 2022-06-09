import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type JoinSearchParams = BasicPageParams & {
  text: string;
  status: number;
  download: boolean;
};

export interface JoinItem {
  id: number;
  email: string;
  nickname: string;
  company: string;
  dept: string;
  role: string;
  phone: string;
  staff: number;
  download: boolean;
  status: number;
}

export type JoinDetailItem = JoinItem & {
  staffName: string;
};

export type JoinSearchResultModel = BasicFetchResult<JoinItem>;
