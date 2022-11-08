import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext, UserContextType } from "../../../utils/context";
import NewStoryModal from "../NewStoryModal";
import { NewStoryNavStyle } from "./style";

const NewStoryNav: React.FC<{ username: string; onClick: () => void }> = ({
  username,
  onClick,
}) => {
  const user = useContext<UserContextType>(UserContext);

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
            Draft in <strong>{user.username}</strong>
          </Typography>
        </Box>

        <Box sx={NewStoryNavStyle.box}>
          <Avatar alt="Avatar" src={user.avatar} />
          <Button color="primary" variant="contained" onClick={onClick}>
            Publish
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NewStoryNav;
