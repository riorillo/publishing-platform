import React, { SyntheticEvent, useEffect, useContext, useState } from "react";
import PostFilter from "../SavedPost/PostFilter";
import { Article, exampleArray } from "../SavedPost/mockArticle";
import { Box } from "@mui/system";
import LayoutStyle from "../SavedPost/style";
import { UserContext, UserContextType } from "../../utils/context";
import { fetchDataFromServer } from "../../utils/service";

export default function NewsFeed() {
  const [visualized, setVisualized] = useState<string>("All");
  const [visualizedList, setVisualizedList] = useState<Article[] | undefined>(
    exampleArray
  );
  const [topicToAdd, setTopicToAdd] = useState([]);
  const user = useContext<UserContextType>(UserContext);

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

  useEffect(() => {
    if (user.topics) {
      const fetchingTopicsList = async () => {
        const topicsData = await fetchDataFromServer("topics");
        const filteredTopics = topicsData?.data.filter(
          (el: string) => !user.topics?.includes(el)
        );
        setTopicToAdd(filteredTopics);
      };
      fetchingTopicsList();
    }
  }, [user.topics]);

  const onChange = (e: SyntheticEvent, newValue: string): void => {
    setVisualized(newValue);
  };

  return (
    <Box sx={LayoutStyle.box}>
      <PostFilter
        visualizedList={visualizedList}
        visualized={visualized}
        handleChange={onChange}
        topicList={user.topics ? user.topics : []}
        postList={exampleArray}
        add={true}
        addTopicList={topicToAdd}
      />
    </Box>
  );
}
