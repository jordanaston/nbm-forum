import {User} from './LoginTypes';

export interface RequestParams {
  page: number;
  limit: number;
}

export interface GetPostsArgs {
  page: number;
  limit: number;
  tags: string[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  likes: number;
  comments: number;
  tags: Tag[];
}

export interface GetCommentsResponse {
  data: Comment[];
  total: number;
}

export interface Comment {
  id: number;
  text: string;
  userId: number;
  postId: number;
  createdAt: string;
  user: User;
  comments: number[];
}

export interface Tag {
  name: string;
}

export interface PostCommentResponse {
  id: number;
  text: string;
  user: User;
  post: Post;
  parent: ParentComment | null;
  createdAt: string;
  userId: number;
  postId: number;
}

export interface ParentComment {
  id: number;
  text: string;
  userId: number;
  postId: number;
  createdAt: string;
}

export interface CreatePostArgs {
  title: string;
  content: string;
  tags: string[];
}

export interface CreatePostResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  likes: number;
  comments: number;
}

export type CreatePostSteps =
  | 'EnterPostDetails'
  | 'SelectACatagory'
  | 'SubmitPost';
