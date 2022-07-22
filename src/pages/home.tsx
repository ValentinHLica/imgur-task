import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { InitialState } from "@interface/posts";

import { setLoading, setPosts } from "@state/posts";

import Layout from "@components/Layout";
import SideBar from "@components/SideBar";
import { Card } from "@components/UI";

import { fetchPosts } from "@utils/api";

import styles from "@styles/pages/home.module.scss";
import { SpinnerIcon } from "@components/CustomIcons";

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
      page: 1,
    });

    dispatch(setPosts(data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getFiltratedPosts();
  }, [section, sort, window, showViral]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <SideBar />

        {loading ? (
          <div className={styles.spinner}>
            <SpinnerIcon />
          </div>
        ) : (
          <ul className={styles.posts}>
            {data && data.map((item, index) => <Card key={index} {...item} />)}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
