import React from "react";

import styles from "@styles/components/UI/checkbox.module.scss";

type Props = {
  checked?: boolean;
  onClick?: () => void;
};

const CheckBox: React.FC<Props> = ({ checked = false, onClick }) => (
  <div
    className={`${styles.checkbox} ${checked ? styles.checkbox__checked : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={() => {}}
  >
    <div className={styles.checkbox__circle} />
  </div>
);

CheckBox.defaultProps = {
  checked: false,
  onClick: () => {},
};

export default CheckBox;
