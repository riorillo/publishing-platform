import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context";
import Post from "../Post";

const YourStories = () => {
  const user = useContext(UserContext) as any;
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const retrieve = async () => {
      const res = await fetch(`http://localhost:3001/api/post/find/author/${user.id}`);
      const data = await res.json();
      const retrievedArticles = data.map((item: any) => ({
        ...item,
        imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
        publishedAt: item.createdAt.substring(0, 10),
        description: item.content,
        username: item.author.name,
        topic: [...item.topic],
        userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
        readingTime: "5 min"
      }));
      setArticles(retrievedArticles);
      console.log(data);
    };

    retrieve();
  }, [user.id]);

  return (
    <>
      <Box sx={{ width: "100%", pt: "32px", pl: "118.750px", pr: "118.750px" }}>
        <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 2 }}>
          Your stories
        </Typography>

        <Box sx={{ borderTop: "1px solid lightgray", mb: 2}}></Box>
        {articles.length > 0 && articles.map((article: any) => <Post key={article.id} article={article}/>)}
      </Box>
    </>
  );
};

export default YourStories;
