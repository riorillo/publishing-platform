import { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Popover,
  Typography,
} from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LeftSidebarStyle from "./style";
import Logo from "../Logo";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { UserContext, UserContextType } from "../../utils/context";

export const LeftSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { icon, container, box } = LeftSidebarStyle;
  const user = useContext<UserContextType>(UserContext);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = () => {
    
    setTimeout(() => {
      navigate("/login");
      localStorage.removeItem("userContext")
    }, 150);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      <div>
        <Button sx={{borderRadius:"50%"}} aria-describedby={id} onClick={handleClick}>
          <Avatar alt="Avatar" src={user.avatar} />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography onClick={handleNavigate} sx={LeftSidebarStyle.logout}>
            Logout
          </Typography>
        </Popover>
      </div>
    </Container>
  );
};
