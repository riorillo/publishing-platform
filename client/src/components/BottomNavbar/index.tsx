import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const BottomNavbar = () => {
  const { pathname } = useLocation();
  return (
    <BottomNavigation
      sx={{
        boxShadow: "50px 50px 50px 15px",
        backgroundColor: "whitesmoke",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/home">
        {pathname === "/home" ? (
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon sx={{ fill: "black" }} />}
          />
        ) : (
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        )}
      </Link>
      <Link to="#">
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </Link>
      <Link to="me/saved">
        {pathname === "/home/me/saved" ? (
          <BottomNavigationAction
            label="Saved"
            icon={<BookmarksIcon sx={{ fill: "black" }} />}
          />
        ) : (
          <BottomNavigationAction
            label="Saved"
            icon={<BookmarksOutlinedIcon />}
          />
        )}
      </Link>
      <Avatar
        sx={{ width: 28, height: 28 }}
        alt="Avatar"
        src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
