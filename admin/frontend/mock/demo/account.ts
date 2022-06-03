import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const userInfo = {
  name: 'Vben',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: 'Be tolerant to diversity, tolerance is a virtue',
  introduction: 'smiling, working hard, admiring',
  title: 'Interaction expert',
  group: 'so-and-so business group－Platform Department',
  tags: [
    {
      key: '0',
      label: 'very thoughtful',
    },
    {
      key: '1',
      label: 'Focus on design',
    },
    {
      key: '2',
      label: 'hot~',
    },
    {
      key: '3',
      label: 'long legs',
    },
    {
      key: '4',
      label: 'ZZZ',
    },
    {
      key: '5',
      label: 'All rivers are inclusive',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  address: 'Xiamen City 77',
  phone: '0592-268888888',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];