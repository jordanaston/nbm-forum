export interface LoginArgs {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  email: string;
  telephone: string;
}
