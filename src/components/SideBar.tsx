import React from "react";

import sidebarData from "@data/sidebar";

import styles from "@styles/components/sidebar.module.scss";
import { useSelector } from "react-redux";
import { InitialState } from "@interface/posts";

const SideBar: React.FC = () => {
  const { section } = useSelector(
    (state: { posts: InitialState }) => state.posts
  );

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        {sidebarData().map(({ title: sidebarTitle, items }, sidebarIndex) => (
          <li key={sidebarIndex} className={styles.list__item}>
            <h2 className={styles.item__title}>{sidebarTitle}</h2>

            <ul className={styles.item__nav}>
              {items.map(({ title, icon, children, onClick }, itemsIndex) => (
                <li
                  key={itemsIndex}
                  className={`${styles.item__link} ${
                    sidebarTitle === "Section" &&
                    section === title.toLowerCase()
                      ? styles[`item__link--selected`]
                      : ""
                  }`}
                  onClick={onClick}
                >
                  {icon} {children}
                  <h3 className={styles.link__title}>{title}</h3>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
