import React, { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { StyledOutlinedButton } from "./style";

const UsersToFollow: React.FC<{
  username: string;
  avatar: string;
  title: string;
  isLast?: boolean;
}> = ({ username, avatar, title, isLast }) => {
  const [follow, setFollow] = useState(false);

  function handleFollow() {
    setFollow((prev) => !prev);
  }
  return (
    <>
      {" "}
      <ListItem alignItems="flex-start">
        <Link to="#">
          <ListItemAvatar>
            <Avatar alt={username} src={avatar} />
          </ListItemAvatar>
        </Link>
        <Link to="#"></Link>
        <ListItemText sx={{paddingRight:".5rem"}}
          primary={
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {username}
            </Link>
          }
          secondary={
            <React.Fragment>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {title}
              </Link>
            </React.Fragment>
          }
        />
        <StyledOutlinedButton
          sx={
            follow
              ? {
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                    borderColor: "white",
                  },
                  backgroundColor: "green",
                  color: "white",
                  borderColor: "white",
                }
              : {}
          }
          onClick={() => handleFollow()}
        >
          {follow ? "Followed" : "Follow"}
        </StyledOutlinedButton>
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
      {isLast && <Divider />}
    </>
  );
};

export default UsersToFollow;
