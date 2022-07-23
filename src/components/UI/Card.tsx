import React from "react";

import { PostItem } from "@interface/posts";

import styles from "@styles/components/UI/card.module.scss";

type Props = PostItem & {
  onClick?: () => void;
};

const Card: React.FC<Props> = ({ title, images, onClick }) => {
  if (!images) {
    return null;
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card__content}>
        {images[0].link.endsWith("mp4") ? (
          <video>
            <source src={images[0].link}></source>
          </video>
        ) : (
          <img src={images[0].link} loading="lazy" alt="img" />
        )}
      </div>

      <h4 className={styles.card__title}>{title}</h4>
    </div>
  );
};

export default Card;
