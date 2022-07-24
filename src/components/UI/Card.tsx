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
    <div
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <div className={styles.card__content}>
        {images[0].link.endsWith("mp4") ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video autoPlay controls>
            <source src={images[0].link} />
          </video>
        ) : (
          <img src={images[0].link} loading="lazy" alt="img" />
        )}
      </div>

      <h4 className={styles.card__title}>{title}</h4>
    </div>
  );
};

Card.defaultProps = {
  onClick: () => {},
};

export default Card;
