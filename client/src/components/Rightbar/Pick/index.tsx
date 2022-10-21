import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

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
        <ListItemAvatar>
          <Avatar alt={username} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={<React.Fragment>{title}</React.Fragment>}
        />
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
      {isLast && <Divider />}
    </>
  );
};

export default Pick;
