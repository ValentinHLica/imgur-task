import React from "react";

import styles from "@styles/components/UI/checkbox.module.scss";

type Props = {
  checked?: boolean;
};

const CheckBox: React.FC<Props> = ({ checked = false }) => {
  return (
    <div
      className={`${styles.checkbox} ${
        checked ? styles.checkbox__checked : ""
      }`}
    >
      <div className={styles.checkbox__circle} />
    </div>
  );
};

export default CheckBox;
