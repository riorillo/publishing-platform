import React, { SyntheticEvent, useEffect, useContext, useState } from "react";
import PostFilter from "../SavedPost/PostFilter";
import { Article, exampleArray } from "../SavedPost/mockArticle";
import { Box, minHeight } from "@mui/system";
import LayoutStyle from "../SavedPost/style";
import { UserContext, UserContextType } from "../../utils/context";
import { fetchDataFromServer } from "../../utils/service";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

export default function NewsFeed() {
  const [visualized, setVisualized] = useState<string>("All");
  const [visualizedList, setVisualizedList] = useState<Article[] | undefined>([]);
  const [topicToAdd, setTopicToAdd] = useState([]);
  const [allPost, setAllPost] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const user = useContext<UserContextType>(UserContext);

  useEffect(() => {
    const retrieveList = async () => {
      try {
        const topics = user.topics as any;
        console.log(topics);

        const posts: any = [];
        setLoading(true);

        await Promise.all(
          topics.map(async (item: any) => {
            const res = await axios.get(`http://localhost:3001/api/post/find/${item}`, {
              headers: { token: `Bearer ${user.accessToken}` },
            });
            const retrievedPosts = res.data.map((item: any) => ({
              ...item,
              imageUrl: item.image
                ? item.image
                : "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
              publishedAt: item.createdAt.substring(0, 10),
              description: item.content,
              username: item.author.name,
              topic: [...item.topic],
              userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
              readingTime: "5 min",
            }));
            posts.push(...retrievedPosts);
          })
        );
        setAllPost(posts);
        setVisualizedList(posts);
      } catch (e) {
        alert("Something went wrong, please refresh ⚠️");
      } finally {
        setLoading(false);
      }
    };
    if (user.topics) {
      retrieveList();
    }
  }, [user.topics]);

  useEffect(() => {
    if (visualized === "All") {
      setVisualizedList(allPost);
    } else {
      const nextVisualizedList = allPost.filter((ele: any) =>
        ele.topic.some((item: string) => item === visualized)
      );
      setVisualizedList(nextVisualizedList);
    }
  }, [visualized]);

  useEffect(() => {
    if (user.topics) {
      const fetchingTopicsList = async () => {
        const topicsData = await fetchDataFromServer("topics");
        const filteredTopics = topicsData?.data.filter((el: string) => !user.topics?.includes(el));
        setTopicToAdd(filteredTopics);
      };
      fetchingTopicsList();
    }
  }, [user.topics]);

  const onChange = (e: SyntheticEvent, newValue: string): void => {
    setVisualized(newValue);
  };

  return (
    <>
      {!loading && allPost && allPost.length > 0 && (
        <Box sx={LayoutStyle.box}>
          <PostFilter
            visualizedList={visualizedList}
            visualized={visualized}
            handleChange={onChange}
            topicList={user.topics ? user.topics : []}
            add={true}
            addTopicList={topicToAdd}
          />
        </Box>
      )}
      {loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            fontSize: "64px",
            borderRadius: "5%",
            height: "100vh"
          }}
        >
          <CircularProgress size={144} />
          <Typography sx={{ color: "gray" }} variant="h5">
            Loading...
          </Typography>
        </Box>
      )}
    </>
  );
}
