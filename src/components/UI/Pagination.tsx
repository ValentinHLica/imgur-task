import React from "react";

import { useDispatch } from "react-redux";

import styles from "@styles/components/UI/pagination.module.scss";
import { setPage } from "@state/posts";

type Props = {
  number?: number;
};

const Pagination = ({ number = 1 }: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={() => {
          dispatch(setPage(number - 1 > 0 ? number - 1 : 1));
        }}
        disabled={number === 1}
      >
        Prev
      </button>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(setPage(number + 1));
        }}
      >
        Next
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  number: 1,
};

export default Pagination;
