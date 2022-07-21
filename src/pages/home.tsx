import React from "react";

import Layout from "@components/Layout";
import { fetchPosts } from "@utils/api";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1
        onClick={async () => {
          await fetchPosts({});
        }}
      >
        Home Page
      </h1>
    </Layout>
  );
};

export default HomePage;
