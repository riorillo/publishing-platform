import { Box, Typography } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import PostFilter from "./PostFilter";
import LayoutStyle from "./style";

export type ArticleList = {
  title: string;
  id: number;
  tag: string;
  article: string;
};

const exampleArray: ArticleList[] = [
  {
    id: 1,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 2,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 3,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 4,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 5,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 6,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 7,
    title: "Politic",
    tag: "Politic",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 8,
    title: "Quest Ivan",
    tag: "Ivan",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
];

const exampleTabs = ["Public", "Ivan", "Politic", "Gaming"];

export default function SavedPost() {
  const [visualized, setVisualized] = useState("All");
  const [visualizedList, setVisualizedList] = useState<
    ArticleList[] | undefined
  >(exampleArray);

  // Visualize the All filter or the selected one
  useEffect(() => {
    if (visualized === "All") {
      setVisualizedList(exampleArray);
    } else {
      const nextVisualizedList = exampleArray.filter(
        (ele) => ele.tag === visualized
      );
      setVisualizedList(nextVisualizedList);
    }
  }, [visualized]);

  const onChange = (e: SyntheticEvent, newValue: string): void => {
    setVisualized(newValue);
  };

  return (
    <Box sx={LayoutStyle.box}>
      <Typography variant="h3" component="h1" sx={LayoutStyle.title}>
        Saved Post
      </Typography>
      <PostFilter
        visualizedList={visualizedList}
        visualized={visualized}
        handleChange={onChange}
        tagList={exampleTabs}
        postList={exampleArray}
      />
    </Box>
  );
}
