import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setLoading, setModalPost, setPosts } from "@state/posts";

import { InitialState } from "@interface/posts";

import Layout from "@components/Layout";
import SideBar from "@components/SideBar";
import { Card, Modal, ModalCard } from "@components/UI";
import { SpinnerIcon } from "@components/CustomIcons";

import fetchPosts from "@utils/api";

import styles from "@styles/pages/home.module.scss";

const HomePage: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const { data, loading, section, sort, window, showViral, modalPost, page } =
    useSelector((state: { posts: InitialState }) => state.posts);
  const dispatch = useDispatch();

  const getFiltratedPosts = async () => {
    dispatch(setLoading(true));

    const postsData = await fetchPosts({
      section,
      sort,
      window,
      showViral,
      page,
    });

    dispatch(setPosts(postsData));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getFiltratedPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, sort, window, showViral, page]);

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
              data.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => {
                    setVisibleModal(true);
                    dispatch(setModalPost(item));
                  }}
                  id={item.id}
                  downs={item.downs}
                  ups={item.ups}
                  images={item.images}
                  score={item.score}
                  title={item.title}
                />
              ))}
          </ul>
        )}
      </div>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        {modalPost && visibleModal && (
          <ModalCard
            id={modalPost.id}
            downs={modalPost.downs}
            ups={modalPost.ups}
            images={modalPost.images}
            score={modalPost.score}
            title={modalPost.title}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default HomePage;
