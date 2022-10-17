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

const oggetto = {
  userImage: "https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png",
  username: "Alex",
  publishedAt: "20/10/2022",
  title: "Ciccio si è fatto grande",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
  imageUrl: "https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png",
  topic: "Non so",
  readingTime: "5min",
};
