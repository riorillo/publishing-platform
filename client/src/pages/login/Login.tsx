import { Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../components/Logo";
import {
  formStyle,
  containerFormStyle,
  paperStyle,
  modalStyle,
} from "./formStyle";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { LoadingButton } from "@mui/lab";
import AddTopic from "../../components/NewsFeed/AddTopic";

type Props={
  handleLoginData: (user:any)=>void
}

export default function Login({handleLoginData}:Props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  // modal customization
  const modalParameters = {
    textDisplayed: "Next",
    numberOfTopicRequired: 3,
    titleText: "Please Select at least 3 topic",
    closeTextDisplayed: "Register",
  };

  function handleFormSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    async function login() {
      const fetching = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log(fetching);
      if (fetching.status === 200) {
        setLoading(false);
        window.sessionStorage.setItem("token", fetching.data.accessToken);
        window.location.replace("http://localhost:3000/home");
      }
    }
    login()
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }
  const handleClose = () => setError(false);
  return (
    <Box sx={containerFormStyle}>
      <Paper elevation={20} sx={paperStyle}>
        <form onSubmit={handleFormSubmit} style={formStyle}>
          <Logo />
          <Typography variant="h4">Login </Typography>
          <TextField
            label="Name"
            ref={usernameRef}
            name="username"
            error={error}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            error={error}
          />
          <LoadingButton
            type="submit"
            loading={loading}
            variant="outlined"
            sx={{ border: "1px solid #7AC86A" }}
          >
            Login
          </LoadingButton>
          <Typography>
            If you don't have an account yet, click here to
            <Link to="/register"> register.</Link>
          </Typography>
        </form>
        <Modal
          open={error}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Wrong Credentials!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Sorry we couldn't find an account that matches your credentials,
              try again or register <Link to="/register"> here.</Link>
            </Typography>
          </Box>
        </Modal>
      </Paper>
      <Box sx={{ border: "1px solid #7AC86A", borderRadius: "4px" }}>
        <AddTopic {...modalParameters} />
      </Box>
    </Box>
  );
}
