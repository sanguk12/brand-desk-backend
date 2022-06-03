import { defHttp } from '/@/utils/http/axios';

enum Api {
  csrf = '/api/csrf',
}

export const getCsrf = () => defHttp.get<string>({ url: Api.csrf });
