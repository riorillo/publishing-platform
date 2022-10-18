import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NewStoryModal from "./NewStoryModal";
import NewStoryNav from "./NewStoryNav";
import { NewStoryStyle } from "./style";
import TextEditor from "./TextEditor";

const NewStory = () => {
  //Titolo formattato;
  const [title, setTitle] = useState<string>("");
  //Body formattato;
  const [body, setBody] = useState<string>("");
  //Testo del titolo senza formattazione;
  const [titleText, setTitleText] = useState<string>("");
  //Testo del body senza formattazione;
  const [bodyText, setBodyText] = useState<string>("");
  //Modal aperto o meno;
  const [open, setOpen] = useState<boolean>(false);
  //Topic selezionato;
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  //Oggetto post da inviare al database;
  const [post, setPost] = useState({
    user_id: "placeholder", // ID dell'utente loggato;
    title: "",
    plaintext_title: "",
    body: "",
    plaintext_body: "",
    published_at: "",
    preview_image: "",
    topic: "",
  });

  useEffect(() => {
    setPost((prevState) => ({
      ...prevState,
      title: title,
      plaintext_title: titleText,
      body: body,
      plaintext_body: bodyText,
      published_at: Date(),
      preview_image:
        body.search("src") !== -1
          ? body.slice(body.search("src"), body.length).split('"')[1]
          : "",
    }));
  }, [title, body]);

  return (
    <>
      <Box sx={NewStoryStyle.box}>
        <NewStoryNav
          onClick={() => {
            setOpen(true);
          }}
          username="Rocco Iorillo"
        />
      </Box>

      <NewStoryModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(event, value) => {
          setSelectedTopic(value);
        }}
        onClick={() => {
          console.log(
            "PLACEHOLDER // CLICK ON PROCEED BUTTON // SELECTED TOPIC IS " +
              selectedTopic
          );
        }}
      />

      <TextEditor
        title={title}
        body={body}
        setTitle={(content, delta, source, editor) => {
          setTitle(editor.getHTML());
          setTitleText(editor.getText());
        }}
        setBody={(content, delta, source, editor) => {
          setBody(editor.getHTML());
          setBodyText(editor.getText());
        }}
      />
    </>
  );
};

export default NewStory;
