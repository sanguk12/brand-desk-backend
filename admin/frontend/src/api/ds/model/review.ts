import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type ReviewSearchParams = BasicPageParams & {
  text: string;
  status: number;
  download: boolean;
};

export interface ReviewFile {
  id: number;
  reviewId: number;
  userId: number;
  step: number;
  filePath: string;
  fileType: string;
  fileSize: number;
  sort: number;
}

export interface ReviewItem {
  id: number;
  copy: number;
  userId: number;
  title: string;
  type1: number;
  type2: number;
  content: string;
  status: number;
  survey: number;
  surveyComment: string;
  level: number;

  lettermark: boolean;
  color: boolean;
  naming: boolean;
  typography: boolean;
  imagery: boolean;
  illustration: boolean;

  review1st: number;
  review1stDate: Date;
  reviewComment11st: string;
  reviewComment21st: string;
  review2st: number;
  review2stDate: Date;
  reviewComment12st: string;
  reviewComment22st: string;
  createDate: Date;
  updateDate: Date;
}

export type ReviewDetailItem = ReviewItem & {
  username: string;
  nickname: string;
  email: string;

  statusValue: string;
  statusText: string;

  type1Value: string;
  type2Value: string;
  type1Text: string;
  type2Text: string;
  files: ReviewFile[];
};

export type ReviewSearchResultModel = BasicFetchResult<ReviewItem>;
