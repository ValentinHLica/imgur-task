import { PayloadAction } from "@reduxjs/toolkit";

interface PostItem {
  id: string;
  title: string;
  description: string;
  datetime: number;
  account_url?: string | undefined;
  account_id?: number | undefined;
  ups: number;
  downs: number;
  score: number;
  is_album: boolean;
  views: number;
  link: string;
  vote?: string | undefined;
  favorite: boolean;
  nsfw?: boolean | undefined;
  comment_count: number;
  topic: string;
  topic_id: number;
}

interface Image {
  id: string;
  title: string;
  description: string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  deletehash?: string | undefined;
  name?: string | undefined;
  section: string;
  link: string;
  gifv?: string | undefined;
  mp4?: string | undefined;
  webm?: string | undefined;
  looping?: boolean | undefined;
  vote?: string | undefined;
  favorite: boolean;
  nsfw?: boolean | undefined;
  account_url?: string | undefined;
  account_id?: number | undefined;
}

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
  data: null | [];
  loading: boolean;
};

export type FetchPosts = (args: {
  section?: SortSection;
  sort?: SortType;
  window?: SortWindow;
  page?: number;
  showViral?: boolean;
}) => Promise<void>;
