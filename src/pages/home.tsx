import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { InitialState } from "@interface/posts";

import { setLoading, setModalPost, setPosts } from "@state/posts";

import Layout from "@components/Layout";
import SideBar from "@components/SideBar";
import { Card, Modal } from "@components/UI";
import { SpinnerIcon } from "@components/CustomIcons";

import { fetchPosts } from "@utils/api";

import styles from "@styles/pages/home.module.scss";
import ModalCard from "@components/UI/ModalCard";

const HomePage: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const { data, loading, section, sort, window, showViral, modalPost } =
    useSelector((state: { posts: InitialState }) => state.posts);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {data &&
              data.map((item, index) => (
                <Card
                  key={index}
                  onClick={() => {
                    setVisibleModal(true);
                    dispatch(setModalPost(item));
                  }}
                  {...item}
                />
              ))}
          </ul>
        )}
      </div>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        {modalPost && visibleModal && <ModalCard {...modalPost} />}
      </Modal>
    </Layout>
  );
};

export default HomePage;
