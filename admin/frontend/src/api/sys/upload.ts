import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { getCsrf } from '/@/api/sys/csrf';

const { uploadUrl = '' } = useGlobSetting();

/**
 * @description: Upload interface
 */
export async function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  const _csrf = await getCsrf();
  if (params.data) {
    params.data._csrf = _csrf;
  } else {
    params.data = { _csrf };
  }
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params,
  );
}
