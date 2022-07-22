import axios from "axios";

import { FetchPosts, PostItem } from "@interface/posts";

export const fetchPosts: FetchPosts = async ({
  section = "hot",
  sort = "viral",
  window = "day",
  page = 1,
  showViral = true,
}) => {
  const apiURL = process.env.REACT_APP_IMGUR_API_URL;

  const url = `${apiURL}/gallery/${section}/${sort}${
    section === "top" ? `/${window}` : ""
  }/${page}?showViral=${showViral}`;

  console.log(url);

  try {
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
    console.log(error);
    return [];
  }
};
