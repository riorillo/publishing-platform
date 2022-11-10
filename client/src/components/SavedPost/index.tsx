import { Box, Typography } from "@mui/material";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import LayoutStyle from "./style";
import axios from "axios";
import { UserContext, UserContextType } from "../../utils/context";
import Post from "../Post";
import { Article } from "./mockArticle";
import Loading from "../Loading";

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
        setSavedPosts(fetchedSavedPost.data);
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
      {loading && <Loading size={50}/>}
      {!loading && (
        <Box
          sx={{ width: "100%", pt: "32px", pl: {sm:"118.750px", xs:"20px"}, pr: {sm:"118.750px", xs:"20px"} }}
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
