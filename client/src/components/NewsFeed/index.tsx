import { SyntheticEvent, useEffect, useContext, useState } from "react";
import PostFilter from "../SavedPost/PostFilter";
import LayoutStyle from "../SavedPost/style";
import { UserContext, UserContextType } from "../../utils/context";
import { fetchDataFromServer } from "../../utils/service";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { Article } from "../SavedPost/mockArticle";

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
              description: item.content ? `${item.content.slice(0, 300)}...` : item.content,
              username: item.author.username,
              topic: [...item.topic],
              userImage: item.author.avatar
                ? item.author.avatar
                : "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
              readingTime: "5 min",
            }));
            const savedCheckRetrievedPosts = retrievedPosts.map((ele: any) =>
              ele.Saved.some((innerEle: any) => innerEle.userId === user.id)
                ? { ...ele, isSaved: true }
                : { ...ele, isSaved: false }
            );
            posts.push(...savedCheckRetrievedPosts);
          })
        );

        const idList = posts.map((item: any) => item.id);
        const removeDuplicates = posts.filter(
          (item: any, index: number) => idList.indexOf(item.id) === index
        );

        setAllPost(removeDuplicates);
        setVisualizedList(removeDuplicates);
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
            height: "100vh",
          }}
        >
          <CircularProgress size={50} />
          <Typography sx={{ color: "gray" }} variant="h5">
            Loading...
          </Typography>
        </Box>
      )}
    </>
  );
}
