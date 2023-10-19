export interface UploadImageArgs {
  fileName: string;
  folder: string;
}

export interface UploadImageResponse {
  fileName: string;
  url: string;
}

export interface DownloadImageArgs {
  fileName: string;
  height: number;
  width: number;
}

export interface DownloadImageResponse {
  url: string;
}
