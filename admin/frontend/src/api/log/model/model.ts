import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Get Action Log information return value
 */
export interface LogActionModel {
  userId: number;
  username: string;
  nickname: string;
  channel: string;
  operate: string;
  ip: string;
  content: string;
}

export interface LogLoginModel {
  name: string;
  userId: number;
  ip: string;
  channel: string;
  result: boolean;
  errorPassword: string;
}

export type ActionParams = BasicPageParams & {
  channel: string;
  operate: string;
  userId: string;
  startCreateDate: Date;
  endCreateDate: Date;
  content: string;
  ip: string;
  orderType: string;
};

export type LoginParams = BasicPageParams & {
  userId: number;
  startCreateDate: Date;
  endCreateDate: Date;
  channel: string;
  success: boolean;
  name: string;
  ip: string;
  orderType: string;
};

/**
 * @description: Request list return value
 */
export type ActionListResultModel = BasicFetchResult<LogActionModel>;

export type LoginListGetResultModel = BasicFetchResult<LogLoginModel>;
