import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context";
import Loading from "../Loading";
import Post from "../Post";

const YourStories = () => {
  const user = useContext(UserContext) as any;
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const retrieve = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/api/post/find/author/${user.id}`);
      const data = await res.json();
      const retrievedArticles = data.map((item: any) => ({
        ...item,
        imageUrl: item.image
          ? item.image
          : "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
        publishedAt: item.createdAt.substring(0, 10),
        description: `${item.content.slice(0, 300)}...`,
        username: item.author.name,
        topic: [...item.topic],
        userImage: item.author.avatar ? item.author.avatar : "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
        readingTime: "5 min",
      }));
      setArticles(retrievedArticles);
      console.log(data);
      setLoading(false);
    };

    retrieve();
  }, [user.id]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Box sx={{ width: "100%", pt: "32px", pl: "118.750px", pr: "118.750px" }}>
          <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 2 }}>
            Your stories
          </Typography>

          <Box sx={{ borderTop: "1px solid lightgray", mb: 2 }}></Box>
          {articles.length > 0 &&
            articles.map((article: any) => <Post key={article.id} article={article} />)}

          {articles.length === 0 && (
            <Typography sx={{ color: "grayText" }} variant="h6">
              You haven't written any posts yet, enlighten us with your knowledge.
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default YourStories;
