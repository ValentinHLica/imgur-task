import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { InitialState } from "@interface/posts";

import { setLoading, setPosts } from "@state/posts";

import Layout from "@components/Layout";
import SideBar from "@components/SideBar";
import { Card } from "@components/UI";

import { fetchPosts } from "@utils/api";

const HomePage: React.FC = () => {
  const { data, loading, section, sort, window, page, showViral } = useSelector(
    (state: { posts: InitialState }) => state.posts
  );
  const dispatch = useDispatch();

  const getFiltratedPosts = async () => {
    dispatch(setLoading(true));

    const data = await fetchPosts({
      section,
      sort,
      window,
      showViral,
    });

    dispatch(setPosts(data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getFiltratedPosts();
  }, [section, sort, window, showViral]);

  const getPosts = async () => {
    dispatch(setLoading(true));

    const data = await fetchPosts({});

    dispatch(setPosts(data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <SideBar />

      <div>
        {data &&
          data.length > 0 &&
          data.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </Layout>
  );
};

export default HomePage;
