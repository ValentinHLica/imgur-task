import React from "react";

import styles from "@styles/components/UI/checkbox.module.scss";

type Props = {
  checked?: boolean;
  onClick?: () => void;
};

const CheckBox: React.FC<Props> = ({ checked = false, onClick }) => {
  return (
    <div
      className={`${styles.checkbox} ${
        checked ? styles.checkbox__checked : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.checkbox__circle} />
    </div>
  );
};

export default CheckBox;
