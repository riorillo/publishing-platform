import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
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
      <Link to="/">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/">
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </Link>
      <Link to="/">
        <BottomNavigationAction
          label="Bookmark"
          icon={<BookmarksOutlinedIcon />}
        />
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
