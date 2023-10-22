export interface GetPostsArgs {
  page: number;
  limit: number;
  tags: string[];
}

export interface GetPostsResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  likes: number;
  comments: number;
  tags: Tag[];
}

export interface GetTagsArgs {
  page: number;
  limit: number;
}
export interface GetTagsResponse {
  name: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: null | string;
  email: string;
  telephone: string;
}

export interface Tag {
  name: string;
}
