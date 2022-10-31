import React, { SyntheticEvent, useEffect, useState } from "react";
import PostFilter from "../SavedPost/PostFilter";
import { Article, exampleArray, exampleTabs } from "../SavedPost/mockArticle";
import { Box } from "@mui/system";
import LayoutStyle from "../SavedPost/style";

export default function NewsFeed() {
  const [visualized, setVisualized] = useState<string>("All");
  const [visualizedList, setVisualizedList] = useState<Article[] | undefined>(
    exampleArray
  );

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
        <PostFilter
          visualizedList={visualizedList}
          visualized={visualized}
          handleChange={onChange}
          topicList={exampleTabs}
          postList={exampleArray}
          add={true}
        />
      </Box>
  );
}
