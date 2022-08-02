import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { HotCoffeIcon, NewsPaperIcon, UserIcon } from "@components/CustomIcons";
import { CheckBox, Pagination, Segment } from "@components/UI";
import { setSection, setShowViral, setSort, setWindow } from "@state/posts";
import { InitialState } from "@interface/posts";

export default () => {
  const { showViral, window, sort, section, page } = useSelector(
    (state: { posts: InitialState }) => state.posts,
  );
  const dispatch = useDispatch();

  return [
    {
      title: "Section",
      items: [
        {
          title: "Hot",
          icon: <HotCoffeIcon />,
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
          children: (
            <CheckBox
              checked={showViral}
              onClick={() => dispatch(setShowViral(!showViral))}
            />
          ),
          onClick: () => {},
        },
      ],
    },
    {
      title: "Sort",
      items: [
        {
          title: "",
          icon: null,
          children: (
            <Segment
              items={[
                {
                  title: "viral",
                  onClick: () => {
                    dispatch(setSort("viral"));
                  },
                  selected: sort === "viral",
                },
                {
                  title: "top",
                  onClick: () => {
                    dispatch(setSort("top"));
                  },
                  selected: sort === "top",
                },
                {
                  title: "time",
                  onClick: () => {
                    dispatch(setSort("time"));
                  },
                  selected: sort === "time",
                },
                {
                  title: "rising",
                  onClick: () => {
                    dispatch(setSort("rising"));
                  },
                  selected: sort === "rising",
                },
              ]}
            />
          ),
          onClick: () => {},
        },
      ],
    },
    {
      title: "Window",
      items: [
        {
          title: "",
          icon: null,
          children: (
            <Segment
              disabled={section !== "top"}
              items={[
                {
                  title: "top",
                  onClick: () => {
                    dispatch(setWindow("top"));
                  },
                  selected: window === "top",
                },
                {
                  title: "day",
                  onClick: () => {
                    dispatch(setWindow("day"));
                  },
                  selected: window === "day",
                },
                {
                  title: "week",
                  onClick: () => {
                    dispatch(setWindow("week"));
                  },
                  selected: window === "week",
                },
                {
                  title: "month",
                  onClick: () => {
                    dispatch(setWindow("month"));
                  },
                  selected: window === "month",
                },
                {
                  title: "year",
                  onClick: () => {
                    dispatch(setWindow("year"));
                  },
                  selected: window === "year",
                },
                {
                  title: "all",
                  onClick: () => {
                    dispatch(setWindow("all"));
                  },
                  selected: window === "all",
                },
              ]}
            />
          ),
          onClick: () => {},
        },
      ],
    },
    {
      title: "Pagination",
      items: [
        {
          title: "",
          children: <Pagination number={page} />,
          onClick: () => {},
          icon: null,
        },
      ],
    },
  ];
};
