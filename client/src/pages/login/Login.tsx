import { Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useRef, useState } from "react";
import Logo from "../../components/Logo/Log_SignInLogo";
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
import { SetUserContext } from "../../utils/context";

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLoginData = useContext(SetUserContext)

  const formRef = useRef<HTMLFormElement>(null);

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
      handleLoginData(fetching.data)
      if (fetching.status === 200) {
        setLoading(false);
        window.sessionStorage.setItem("token", fetching.data.accessToken);
        window.location.replace("http://localhost:3000/home");
      }
    }
    login()
      .catch(() => setError(true))
      .finally(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
        setLoading(false)
      });
  }
  const handleClose = () => setError(false);
  return (
    <Box sx={containerFormStyle}>
      <Paper elevation={20} sx={paperStyle}>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          style={formStyle}
          ref={formRef}
        >
          <Logo />
          <Typography variant="h4">Login </Typography>
          <TextField label="Name" name="username" autoFocus />
          <TextField name="password" label="Password" type="password" />
          <LoadingButton
            type="submit"
            loading={loading}
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          >
            Login
          </LoadingButton>
          <Typography>
            If you don't have an account yet, click here to
            <Link to="/register"> sign up.</Link>
          </Typography>
        </Box>
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
              sx={{ textAlign: "center" }}
              color="primary"
            >
              Wrong Credentials!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: "center" }}
            >
              Sorry we couldn't find an account that matches your credentials,
              try again or sign up <Link to="/register"> here.</Link>
            </Typography>
          </Box>
        </Modal>
      </Paper>
      <Box sx={{ border: "1px solid #7AC86A", borderRadius: "4px" }}>
      </Box>
    </Box>
  );
}
