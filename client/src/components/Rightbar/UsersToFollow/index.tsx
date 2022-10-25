import React from "react";
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
  return (
    <>
      {" "}
      <ListItem alignItems="flex-start">
        <Link to="/">
          <ListItemAvatar>
            <Avatar alt={username} src={avatar} />
          </ListItemAvatar>
        </Link>
        <Link to="/"></Link>
        <ListItemText
          primary={
            <Link
              to="/"
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
                to="/"
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
        <StyledOutlinedButton>Follow</StyledOutlinedButton>
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
      {isLast && <Divider />}
    </>
  );
};

export default UsersToFollow;
