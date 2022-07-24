import axios from "axios";

import { PostItem, SortSection, SortType, SortWindow } from "@interface/posts";

export type FetchPosts = (args: {
  section?: SortSection;
  sort?: SortType;
  window?: SortWindow;
  page?: number;
  showViral?: boolean;
}) => Promise<PostItem[]>;

const fetchPosts: FetchPosts = async ({
  section = "hot",
  sort = "viral",
  window = "day",
  page = 1,
  showViral = true,
}) => {
  try {
    const url = `${
      process.env.REACT_APP_IMGUR_API_URL
    }/gallery/${section}/${sort}${
      section === "top" ? `/${window}` : ""
    }/${page}?showViral=${showViral}`;

    const options = {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
      },
    };

    const {
      data: { data },
    } = await axios.get(url, options);

    return data as PostItem[];
  } catch (error) {
    // console.log(error);
    return [];
  }
};

export default fetchPosts;
