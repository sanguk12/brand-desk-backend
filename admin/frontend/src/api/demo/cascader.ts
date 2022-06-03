import { defHttp } from '/@/utils/http/axios';
import { AreaModel, AreaParams } from '/@/api/demo/model/areaModel';

enum Api {
  AREA_RECORD = '/basic-api/cascader/getAreaRecord',
}

export const areaRecord = (data: AreaParams) =>
  defHttp.post<AreaModel>({ url: Api.AREA_RECORD, data });
