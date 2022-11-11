import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext, UserContextType } from "../../utils/context";
import Post from "../Post";
import { Article } from "./mockArticle";
import Loading from "../Loading";

export default function SavedPost() {
  const [savedPosts, setSavedPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const user = useContext<UserContextType>(UserContext);

  useEffect(() => {
    const fetchSaved = async () => {
      setLoading(true);
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
        const retrivedData = fetchedSavedPost.data.map((item: any) => ({
          ...item,
          imageUrl: item.image
            ? item.image
            : "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
          publishedAt: item.createdAt.substring(0, 10),
          description: `${item.content.slice(0, 300)}...`,
          username: item.author.name,
          topic: [...item.topic],
          userImage: item.author.avatar
            ? item.author.avatar
            : "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
          readingTime: "5 min",
          isSaved: true,
        }));
        setSavedPosts(retrivedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSaved();
  }, [user]);

  return (
    <>
      {loading && <Loading size={50} />}
      {!loading && (
        <Box
          sx={{
            width: "100%",
            pt: "32px",
            pl: { md: "118.750px", xs: "20px" },
            pr: { md: "118.750px", xs: "20px" },
          }}
        >
          <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 2 }}>
            Saved Posts
          </Typography>

          <Box sx={{ borderTop: "1px solid lightgray", mb: 2 }}></Box>
          {savedPosts.length > 0 &&
            savedPosts.map((article: any) => (
              <Post key={article.id} article={article} />
            ))}

          {savedPosts.length === 0 && (
            <Typography sx={{ color: "grayText" }} variant="h6">
              You haven't saved any posts yet.
            </Typography>
          )}
        </Box>
      )}
    </>
  );
}
