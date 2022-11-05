import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NewStoryModal from "../NewStoryModal";
import { NewStoryNavStyle } from "./style";

const NewStoryNav: React.FC<{ username: string; onClick: () => void }> = ({
  username,
  onClick,
}) => {
  return (
    <>
      <Container sx={NewStoryNavStyle.container} maxWidth="lg">
        <Box sx={NewStoryNavStyle.buttonBox}>
          <NavLink to="/home" style={NewStoryNavStyle.link}>
            <Button color="primary" variant="contained">
              Back
            </Button>
          </NavLink>
          <Typography>
            Draft in <strong>{username}</strong>
          </Typography>
        </Box>

        <Box sx={NewStoryNavStyle.box}>
          <Avatar>{username.split("")[0]}</Avatar>
          <Button color="primary" variant="contained" onClick={onClick}>
            Publish
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NewStoryNav;
