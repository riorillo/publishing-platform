import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import NewStoryNav from "./NewStoryNav";
import { NewStoryStyle } from "./style";
import TextEditor from "./TextEditor";

const NewStory = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <Box sx={NewStoryStyle.box}>
        <NewStoryNav username="Rocco Iorillo" />
      </Box>

      <TextEditor
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />
    </>
  );
};

export default NewStory;
