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
  toArticle: string
}> = ({ username, avatar, title, isLast, toArticle }) => {
  return (
    <>
      {" "}
      <ListItem alignItems="flex-start">
        <Link to={toArticle}>
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
        <Link to={toArticle}></Link>
        <ListItemText
          primary={
            <Link
              to={toArticle}
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
                to={toArticle}
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
