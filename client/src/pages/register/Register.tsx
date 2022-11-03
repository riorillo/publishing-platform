import { Box } from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "../../components/Logo";
import { formStyle, containerFormStyle, paperStyle } from "./registerStyle";
export default function Register() {
  return (
    <Box sx={containerFormStyle}>
      <Paper elevation={20} sx={paperStyle}>
        <form style={formStyle}>
          <Logo />
          <Typography variant="h4">Login :</Typography>
          <TextField label="Name" name="username" />
          <TextField name="password" label="Password" type="password" />
          <Button type="submit" sx={{ border: "1px solid #7AC86A" }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
