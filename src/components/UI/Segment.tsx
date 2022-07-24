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

const Segment: React.FC<Props> = ({ items, disabled = false }) => (
  <ul
    className={`${styles.segment} ${
      disabled ? styles["segment--disabled"] : ""
    }`}
  >
    {items.map(({ title, onClick, selected }) => (
      <li
        key={title.toLocaleLowerCase()}
        onClick={() => {
          if (!disabled) {
            onClick();
          }
        }}
        className={`${styles.segment__item} ${
          selected ? styles["segment__item--selected"] : ""
        }`}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        {title}
      </li>
    ))}
  </ul>
);

Segment.defaultProps = {
  disabled: false,
};

export default Segment;
