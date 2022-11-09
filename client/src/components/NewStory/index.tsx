import { Box } from "@mui/material";
import axios from "axios";
import { setDefaultResultOrder } from "dns";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context";
import NewStoryModal from "./NewStoryModal";
import NewStoryNav from "./NewStoryNav";
import { NewStoryStyle } from "./style";
import TextEditor from "./TextEditor";

const NewStory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const user = useContext(UserContext) as any;
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
    authorId: user.id, // ID dell'utente loggato;
    title: "",
    contentFormatted: "",
    content: "",
    image: "",
    topic: [""],
  });

  useEffect(() => {
    setPost((prevState) => ({
      ...prevState,
      title: titleText,
      contentFormatted: body,
      content: bodyText,
      topic: [selectedTopic],
      image:
        body.search("src") !== -1
          ? body.slice(body.search("src"), body.length).split('"')[1]
          : "",
    }));
  }, [title, body, selectedTopic]);

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
        success={success}
        error={error}
        loading={loading}
        open={open}
        onClose={() => {
          setOpen(false);
          setLoading(false);
          setSuccess(false);
          setError(false);
        }}
        onChange={(event, value) => {
          setSelectedTopic(value);
        }}
        //DA FIXARE - LA RICHIESTA NON VA A BUON FINE;
        onClick={async () => {
          try {
            setLoading(true);
            setSuccess(false);
            setError(false);
            const res = await axios.post(
              "http://localhost:3001/api/post/create",
              post,
              {
                headers: {
                  token: `Bearer ${window.sessionStorage.getItem("token")}`,
                },
              }
            );
            setSuccess(true);
            setTimeout(() => {
              window.location.replace("http://localhost:3000/home/me/stories");
            }, 1000);
          } catch (e) {
            setError(true);
          } finally {
            setLoading(false);
          }
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
