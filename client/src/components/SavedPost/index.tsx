import { Box, Typography } from "@mui/material";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import PostFilter from "./PostFilter";
import LayoutStyle from "./style";
import axios from "axios";
import { UserContext, UserContextType } from "../../utils/context";

interface SavedPostList {
  id: string;
  content: string;
  contentFormatted: string;
  image: string;
  topic: string[];
  title: string;
  createAt: Date;
  updateAt: Date;
  authorId: string;
}

export default function SavedPost() {
  const [visualized, setVisualized] = useState("All");
  const [visualizedList, setVisualizedList] = useState<any>([]);
  const [savedPosts, setSavedPosts] = useState<SavedPostList[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const user = useContext<UserContextType>(UserContext);

  function removePostFromList(articleId: any): any {
    setSavedPosts((prev) => prev.filter((ele) => ele.id !== articleId));
    const nextVisualizedList = savedPosts.filter((ele: any) =>
      ele.topic.includes(visualized)
    );
    setVisualizedList(nextVisualizedList);
  }

  //function to verify if a post is saved or not
  function checkIfSaved(articleId: string): boolean {
    let isSaved = false;
    savedPosts.forEach((ele) => {
      if (ele.id === articleId) isSaved = true;
    });
    return isSaved;
  }

  useEffect(() => {
    const fetchSaved = async () => {
      if (!user || !user.id) return;
      try {
        const fetchedSavedPost = await axios.get(
          `http://localhost:3001/api/saved/${user.id}`,
          {
            headers: {
              token: `Bearer ${user.accessToken}`,
            },
          }
        );
        const topicList: string[] = [];
        fetchedSavedPost.data.map((ele: SavedPostList) =>
          ele.topic.forEach((innerEle: string) => {
            if (!topicList.includes(innerEle)) topicList.push(innerEle);
          })
        );
        setTopics(topicList);

        setSavedPosts(fetchedSavedPost.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSaved();
  }, [user]);

  // Visualize the All filter or the selected one
  useEffect(() => {
    if (visualized === "All") {
      setVisualizedList(savedPosts);
    } else {
      const nextVisualizedList = savedPosts.filter((ele: any) =>
        ele.topic.includes(visualized)
      );
      setVisualizedList(nextVisualizedList);
    }
  }, [visualized, savedPosts]);

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
        topicList={topics}
        removePostFromList={removePostFromList}
        checkIfSaved={checkIfSaved}
      />
    </Box>
  );
}
