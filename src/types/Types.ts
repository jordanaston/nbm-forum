export interface LoginArgs {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    telephone: string;
  };
}

export interface UploadImageArgs {
  fileName: string;
  folder: string;
}

export interface UploadImageResponse {
  fileName: string;
  url: string;
}
