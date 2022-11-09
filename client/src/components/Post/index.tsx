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
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();


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

  let articleChars = article.content.split(" ");
  console.log(articleChars.length);
  let readingTime = `${Math.floor(articleChars.length * 0.004)} min`;

  return (
    <>
      <Card sx={styles.cardContainer}>
        <Header
          username={article.author.username}
          userImage={
            article.author.avatar
              ? article.author.avatar
              : "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg"
          }
          publishedAt={article.createdAt.substring(0, 10)}
        />
        <CardActionArea sx={styles.flex} onClick={() => {navigate("/home/post/" + article.id)}}>
          <CardHeader
            title={article.title}
            description={
              article.content.length > 300
                ? `${article.content.slice(0, 300)}...`
                : article.content
            }
          />
          <CardImage imageUrl={article.imageUrl} />
        </CardActionArea>
        <Box sx={styles.FooterContainer}>
          <CardFooter
            tag={article.topic}
            readingTime={readingTime === "0 min" ? "1 min" : readingTime}
          />
          <FooterIcons
            checkSavedIcon={saved}
            handleSavePost={debouncedOnChange}
          />
        </Box>
      </Card>
    </>
  );
}
