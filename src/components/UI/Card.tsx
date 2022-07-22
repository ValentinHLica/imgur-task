import React from "react";

import { PostItem } from "@interface/posts";

const Card: React.FC<PostItem> = ({ title, score, downs, ups, images }) => {
  return <div>{title}</div>;
};

export default Card;
