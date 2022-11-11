import { Box, Container } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ 'header': 1 }, { 'header': 2 }],

  ["link", "image", "video", "formula"],

  ["clean"],
];

const TextEditor: React.FC<{
  title: string;
  body: string;
  setTitle: (content: any, delta: any, source: any, editor: any) => void;
  setBody: (content: any, delta: any, source: any, editor: any) => void;
}> = ({ title, body, setTitle, setBody }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <ReactQuill
            placeholder="Title"
            value={title}
            onChange={setTitle}
            theme="bubble"
            modules={{
              toolbar: false,
            }}
          />
        </Box>

        <Box>
          <ReactQuill
            placeholder="Tell your story..."
            value={body}
            onChange={setBody}
            theme="bubble"
            modules={{ toolbar: toolbarOptions }}
          />
        </Box>
      </Container>
    </>
  );
};

export default TextEditor;
