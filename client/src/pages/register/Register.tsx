import { Box } from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect, useContext } from "react";
import Logo from "../../components/Logo/Log_SignInLogo";
import axios from "axios";
import {
  formStyle,
  containerFormStyle,
  paperStyle,
  firstBoxStyle,
  boxesContainer,
  secondBoxStyle,
  modalStyle,
} from "./registerStyle";
import { Link } from "react-router-dom";
import AddTopic from "../../components/NewsFeed/AddTopic";
import { UserContext, UserContextType } from "../../utils/context";
import { CloudinaryUploadWidget } from "./CloudinaryUploadWidget";

export type ModalProps = {
  textDisplayed?: string;
  numberOfTopicRequired?: 3;
  titleText?: string;
  closeTextDisplayed?: string;
  elementList?: string[];
  submitVariant?: any;
};

export default function Register() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = useContext<UserContextType>(UserContext);
  const [topics, setTopics] = useState([]);
  const [topicsToAdd, setTopicsToAdd] = useState<string[]>([]);
  const [url, setUrl] = useState<string | null>(null)

  function handleSetUrl(finalUrl : string){
    setUrl(finalUrl)
  }

  // modal customization
  const modalParameters: ModalProps = {
    textDisplayed: "Select at least 3 topics *",
    numberOfTopicRequired: 3,
    titleText: user.topics ? "Please Select at least 3 topic" : "Loading...",
    closeTextDisplayed: "Done",
    submitVariant: handleTopicsToAdd,
  };

  useEffect(() => {
    const loadTopics = async () => {
      const topicsList = await axios.get("http://localhost:3001/api/topics");
      setTopics(topicsList.data);
    };
    loadTopics();
  }, []);

  function handleTopicsToAdd(topicsArray: string[]) {
    setTopicsToAdd(topicsArray);
  }

  function handleRegistration(e: any) {
    e.preventDefault();
    if (topicsToAdd.length < 3) return;
    const username = e.target.elements.username.value;
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    async function register() {
      try {
        const fetching = await axios.post(
          "http://localhost:3001/api/auth/register",
          {
            username,
            email,
            avatar : url,
            password,
            age: parseInt(age),
            name,
            topics: topicsToAdd,
          }
        );
        if (fetching.status === 200) {
          setSuccess(true);
          window.sessionStorage.setItem("token", fetching.data.accessToken);
          setTimeout(() => {
            window.location.replace("http://localhost:3000/login");
          }, 5000);
        }
      } catch {
        setError(true);
      }
    }
    register();
  }
  const handleClose = () => setError(false);
  return (
    <>
      <Box sx={containerFormStyle}>
        <Paper elevation={20} sx={paperStyle}>
          <Box component="form" onSubmit={handleRegistration} sx={formStyle}>
            <Logo />
            <Typography variant="h4" sx={{ fontSize: { xs: "1.8rem" }, mb : {xs : "1rem"} }}>
              Sign Up{" "}
            </Typography>
            <Box sx={boxesContainer}>
              <Box sx={firstBoxStyle}>
                <TextField
                  label="Username"
                  name="username"
                  required
                  autoFocus
                />
                <TextField label="Name" name="name" required />
                <TextField type="number" label="Age" name="age" required />
              </Box>
              <Box sx={secondBoxStyle}>
                <TextField label="Email" name="email" type="email" required />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
                <Box sx={{ height: "56px", display: "flex" }}>
                  <AddTopic {...modalParameters} elementList={topics} />
                </Box>
              </Box>
            </Box>
            <Box mb={"10px"}>
              <CloudinaryUploadWidget handleSetUrl={handleSetUrl} />
            </Box>
            <Button
              type="submit"
              disabled={topicsToAdd.length < 3}
              variant="outlined"
            >
              Sign Up
            </Button>
            <Typography
              sx={{
                mt : "10px",
                fontSize: { sm: "1rem", xs: "12px" },
                textAlign: { sm: "start", xs: "center" },
              }}
            >
              Do you already have an account? Login{" "}
              <Link to="/login"> here</Link>
            </Typography>
          </Box>
        </Paper>
        <Modal
          open={error}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="primary"
              textAlign="center"
            >
              Ops, something went wrong!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              textAlign="center"
            >
              There's a problem with the server, please try again later.
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={success}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="primary"
              textAlign="center"
            >
              Congratulations, your account has been registered.
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              textAlign="center"
            >
              You will be automatically redirected to the login page in few
              seconds.
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
