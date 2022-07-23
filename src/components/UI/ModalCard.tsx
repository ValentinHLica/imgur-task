import React from "react";

import { PostItem } from "@interface/posts";

import styles from "@styles/components/UI/modal_card.module.scss";

const ModalCard: React.FC<PostItem> = ({
  images,
  downs,
  score,
  title,
  ups,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        {images[0].link.endsWith("mp4") ? (
          <video autoPlay controls>
            <source src={images[0].link}></source>
          </video>
        ) : (
          <img src={images[0].link} loading="lazy" alt="img" />
        )}
      </div>

      <div className={styles.card__content}>
        <h2 className={styles.content__title}>{title}</h2>

        <p className={styles.content__description}>
          Description: {images[0].description ?? "Empty"}
        </p>

        <p className={styles.content__stats}>
          Up votes: <strong>{ups}</strong> - Down votes:{" "}
          <strong>{downs}</strong> - Score: <strong>{score}</strong>
        </p>
      </div>
    </div>
  );
};

export default ModalCard;
