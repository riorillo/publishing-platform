import React from "react";
import {
  Avatar,
  ListItem,
  styled,
  Button,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledOutlinedButton = styled(Button)({
  alignSelf: "center",
  backgroundColor: "none",
  color: "gray",
  border: "1px solid gray",
  fontSize: "16px",
  marginLeft: "12px",
  padding: "2.5px 26px",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "none",
    color: "black",
    border: "1px solid black",
  },
});

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
