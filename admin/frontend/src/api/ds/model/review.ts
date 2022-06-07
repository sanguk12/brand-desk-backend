import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type ReviewSearchParams = BasicPageParams & {
  text: string;
  status: number;
  download: boolean;
};

export interface ReviewItem {
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

export type ReviewDetailItem = ReviewItem & {
  staffName: string;
}

export type ReviewSearchResultModel = BasicFetchResult<ReviewItem>;
