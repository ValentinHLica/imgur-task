import React from "react";

import { HotCoffeIcon, NewsPaperIcon, UserIcon } from "@components/CustomIcons";

export default [
  {
    title: "Sort",
    items: [
      {
        title: "Hot",
        icon: <HotCoffeIcon />,
        // "icon": "/public/icons/coffe-icon.svg"
      },
      {
        title: "Top",
        icon: <NewsPaperIcon />,
        // "icon": "/public/icons/news-icon.svg"
      },
      {
        title: "User",
        icon: <UserIcon />,
        // "icon": "/public/icons/user-icon.svg"
      },
    ],
  },
];
