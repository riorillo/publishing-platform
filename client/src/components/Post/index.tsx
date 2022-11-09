import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "./style";
import { CardHeader } from "./CardHeader";
import { Header } from "./Header";
import { CardImage } from "./CardImage";
import { CardFooter } from "./CardFooter";
import { FooterIcons } from "./FooterIcons";
import { Article } from "../SavedPost/mockArticle";
import { UserContext, UserContextType } from "../../utils/context";
import axios from "axios";
import debounce from "lodash.debounce";

type Props = {
  article: Article;
  removePostFromList?(articleId: string): void;
  checkIfSaved?(articleId: string): boolean;
};

export default function Post({
  article,
  removePostFromList,
  checkIfSaved,
}: Props) {
  const user = useContext<UserContextType>(UserContext);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (checkIfSaved) {
      const isSaved = checkIfSaved(article.id);
      setSaved(isSaved);
    }
  }, []);

  async function handleSavePost() {
    const savedPost = await axios.post(
      "http://localhost:3001/api/saved",
      {
        userId: user.id,
        postId: article.id,
      },
      {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      }
    );
    if (savedPost.data.count && removePostFromList)
      removePostFromList(article.id);
  }

  const debouncedOnChange = debounce(handleSavePost, 400);

  return (
    <>
      <Card sx={styles.cardContainer}>
        <Header
          username={article.username}
          userImage={article.userImage}
          publishedAt={article.publishedAt}
        />
        <CardActionArea sx={styles.flex}>
          <CardHeader title={article.title} description={article.description} />
          <CardImage imageUrl={article.imageUrl} />
        </CardActionArea>
        <Box sx={styles.FooterContainer}>
          <CardFooter tag={article.topic} readingTime={article.readingTime} />
          <FooterIcons
            checkSavedIcon={saved}
            handleSavePost={debouncedOnChange}
          />
        </Box>
      </Card>
    </>
  );
}
