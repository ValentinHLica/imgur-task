import React from "react";
import { useDispatch } from "react-redux";

import { HotCoffeIcon, NewsPaperIcon, UserIcon } from "@components/CustomIcons";
import { CheckBox } from "@components/UI";
import { setSection, setShowViral } from "@state/posts";
import { useSelector } from "react-redux";
import { InitialState } from "@interface/posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { showViral } = useSelector(
    (state: { posts: InitialState }) => state.posts
  );
  const dispatch = useDispatch();

  return [
    {
      title: "Section",
      items: [
        {
          title: "Hot",
          icon: <HotCoffeIcon />,
          children: null,
          onClick: () => {
            dispatch(setSection("hot"));
          },
        },
        {
          title: "Top",
          icon: <NewsPaperIcon />,
          children: null,
          onClick: () => {
            dispatch(setSection("top"));
          },
        },
        {
          title: "User",
          icon: <UserIcon />,
          children: null,
          onClick: () => {
            dispatch(setSection("user"));
          },
        },
      ],
    },
    {
      title: "Viral Images",
      items: [
        {
          title: "Show Viral Images",
          icon: null,
          children: <CheckBox checked={showViral} />,
          onClick: () => {
            dispatch(setShowViral(!showViral));
          },
        },
      ],
    },
  ];
};
