import { PayloadAction } from "@reduxjs/toolkit";

export type PostItem = {
  id: string;
  title: string;
  ups: number;
  downs: number;
  score: number;
  images: {
    description: string | null;
    type: string;
    link: string;
    size: number;
  }[];
};

export type SortSection = "hot" | "top" | "user";
export type SortWindow = "top" | "day" | "week" | "month" | "year" | "all";
export type SortType = "viral" | "top" | "time" | "rising";

export enum PostsActions {
  ADD_POSTS = "add-posts",
}

export type FetchPostsPayload = PayloadAction<{
  data: [];
}>;

export type InitialState = {
  data: null | PostItem[];
  loading: boolean;
  section?: SortSection;
  sort?: SortType;
  window?: SortWindow;
  page?: number;
  showViral?: boolean;
  modalPost: null | PostItem;
};

export type FetchPosts = (args: {
  section?: SortSection;
  sort?: SortType;
  window?: SortWindow;
  page?: number;
  showViral?: boolean;
}) => Promise<PostItem[]>;
