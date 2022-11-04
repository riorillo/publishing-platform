import { Avatar, Box, Container } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import LeftSidebarStyle from "./style";
import Logo from "../Logo";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

export const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { icon, container, box } = LeftSidebarStyle;

  return (
    <Container sx={container}>
      <NavLink title="" to="/home">
        <Logo />
      </NavLink>

      <Box sx={box}>
        <NavLink title="Home" to="/home">
          {pathname === "/home" ? (
            <HomeIcon sx={icon} />
          ) : (
            <HomeOutlinedIcon sx={icon} />
          )}
        </NavLink>

        <NavLink title="Saved" to="me/saved">
          {pathname === "/home/me/saved" ? (
            <BookmarksIcon sx={icon} />
          ) : (
            <BookmarksOutlinedIcon sx={icon} />
          )}
        </NavLink>

        <NavLink title="Stories" to="me/stories">
          {pathname === "/home/me/stories" ? (
            <ArticleIcon sx={icon} />
          ) : (
            <ArticleOutlinedIcon sx={icon} />
          )}
        </NavLink>

        <hr />

        <NavLink title="New story" to="/new-story">
          <CreateOutlinedIcon sx={icon} />
        </NavLink>
      </Box>

      <Avatar>
        <p>LC</p>
      </Avatar>
    </Container>
  );
};
