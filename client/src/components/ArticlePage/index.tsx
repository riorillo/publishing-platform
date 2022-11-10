import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlePageStyle } from "./style";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<any>();

  useEffect(() => {
    const retrieveArticle = async () => {
      const res = await axios.get(`http://localhost:3001/api/post/get/${id}`);
      setArticle(res.data);
      setAuthor(res.data.author);
    };

    retrieveArticle();
  }, []);

  return (
    <>
      {article && (
        <Container sx={ArticlePageStyle.container} maxWidth="md">
          <Box sx={ArticlePageStyle.box}>
            <Avatar src={author.avatar} />
            <Box>
              <Typography variant="h6">{author.name}</Typography>
              <Typography>
                Posted on{" "}
                <span style={{ fontWeight: "bold" }}>{article.createdAt.substring(0, 10)}</span>
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ marginLeft: "15px", alignSelf: "start" }}
          >
            {article.title}
          </Typography>

          <Box sx={{ maxWidth: "720px" }}>
            <img style={{ width: "100%" }} src={article.image} alt="" />
          </Box>

          <Box sx={{ alignSelf: "start" }}>
            <div id="quill-viewer">
              <ReactQuill value={article.contentFormatted} readOnly theme="bubble" />
            </div>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ArticlePage;
