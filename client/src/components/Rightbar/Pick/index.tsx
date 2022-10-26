import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Pick: React.FC<{
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
            <Avatar
              alt={username}
              src={avatar}
              sx={{
                width: "25px",
                height: "25px",
              }}
            />
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
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
      {isLast && <Divider />}
    </>
  );
};

export default Pick;
