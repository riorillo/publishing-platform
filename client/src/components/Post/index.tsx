import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "./style";
import { CardHeader } from "./CardHeader";
import { Header } from "./Header";
import { CardImage } from "./CardImage";
import { CardFooter } from "./CardFooter";
import { FooterIcons } from "./FooterIcons";

type Article = {
  article: { [key: string]: string };
};

export default function Post({ article }: Article) {
  return (
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
        <CardFooter topic={article.topic} readingTime={article.readingTime} />
        <FooterIcons />
      </Box>
    </Card>
  );
}
