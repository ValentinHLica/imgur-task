import React, { useEffect } from "react";

import Layout from "@components/Layout";
import SideBar from "@components/SideBar";

import { fetchPosts } from "@utils/api";

const HomePage: React.FC = () => {
  const getPosts = async () => {
    const data = await fetchPosts({});

    console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <SideBar />
    </Layout>
  );
};

export default HomePage;
