import React from "react";

import styles from "@styles/components/UI/segment.module.scss";

type Props = {
  items: {
    title: string;
    onClick: () => void;
    selected: boolean;
  }[];
  disabled?: boolean;
};

const Segment: React.FC<Props> = ({ items, disabled = false }) => {
  return (
    <ul
      className={`${styles.segment} ${
        disabled ? styles[`segment--disabled`] : ""
      }`}
    >
      {items.map(({ title, onClick, selected }, index) => (
        <li
          key={index}
          onClick={() => {
            if (!disabled) {
              onClick();
            }
          }}
          className={`${styles.segment__item} ${
            selected ? styles["segment__item--selected"] : ""
          }`}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default Segment;
