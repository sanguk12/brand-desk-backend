export interface UploadApiResult {
  result: UploadApiResultProps;
  message: string;
  code: number;
}

export interface UploadApiResultProps {
  url: string;
  filePath: string;
  fileName: string;
  fileType: string;
}
