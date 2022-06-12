import { BasicPageParams } from '/@/api/model/baseModel';

export type CommentSearchParams = BasicPageParams & {
  id?: number;
  name?: string;
};

export type CommentParams = {
  id:number;
  replyId:number;
  contentId:number;
  text: string;
};

export interface CommentListItem {
  id:number;
  userId:number;
  replyId:number;
  replyUserId:number;
  replies:number;
  contentId:number;
  checkUserId:number;
  checkDate:Date;
  status: number;
  text: string;
}

/**
 * @description: Request list return value
 */
export type CommentListGetResultModel = CommentListItem[];
