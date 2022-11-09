import { Box, Typography } from "@mui/material";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import LayoutStyle from "./style";
import axios from "axios";
import { UserContext, UserContextType } from "../../utils/context";
import Post from "../Post";
import { Article } from "./mockArticle";

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
  const user = useContext<UserContextType>(UserContext);

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
        setSavedPosts(fetchedSavedPost.data)
      } catch (err) {
        console.error(err);
      }
    };
    fetchSaved();
  }, [user]);

  return (
    <Box sx={LayoutStyle.box}>
        <Typography component="h1" sx={LayoutStyle.title}>
          Saved Post
        </Typography>
        {savedPosts.map((ele) => (
          <Post key={ele.id} article={ele} />
        ))}
    </Box>
  );
}
