import { Box, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Article } from "./mockArticle";
import PostFilter from "./PostFilter";
import LayoutStyle from "./style";
import { exampleArray } from "./mockArticle";
import {exampleTabs} from "./mockArticle"

export default function SavedPost() {
  const [visualized, setVisualized] = useState("All");
  const [visualizedList, setVisualizedList] = useState<Article[] | undefined>(
    exampleArray
  );
  // Visualize the All filter or the selected one
  useEffect(() => {
    if (visualized === "All") {
      setVisualizedList(exampleArray);
    } else {
      const nextVisualizedList = exampleArray.filter(
        (ele) => ele.topic === visualized
      );
      setVisualizedList(nextVisualizedList);
    }
  }, [visualized]);

  const onChange = (e: SyntheticEvent, newValue: string): void => {
    setVisualized(newValue);
  };

  return (
    <Box sx={LayoutStyle.box}>
      <Typography component="h1" sx={LayoutStyle.title}>
        Saved Post
      </Typography>
      <PostFilter
        visualizedList={visualizedList}
        visualized={visualized}
        handleChange={onChange}
        topicList={exampleTabs}
        postList={exampleArray}
      />
    </Box>
  );
}
