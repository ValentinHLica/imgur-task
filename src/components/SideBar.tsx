import React from "react";

import sidebarData from "@data/sidebar";

import styles from "@styles/components/sidebar.module.scss";

const SideBar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        {sidebarData.map(({ title, items }, sidebarIndex) => (
          <li key={sidebarIndex} className={styles.list__item}>
            <h2 className={styles.item__title}>{title}</h2>

            <ul className={styles.item__nav}>
              {items.map(({ title, icon }, itemsIndex) => (
                <li key={itemsIndex} className={styles.item__link}>
                  {icon} <h3 className={styles.link__title}>{title}</h3>
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
