import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { Link } from "react-router-dom";
import Pick from "./Pick";
import RecommendedTopics from "./RecommendedTopics";

const StyledRightbar = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  borderRadius: "20px",
  border: "1px solid  lightgray",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "0 10px",
//   border: "1px solid  lightgray",
//   borderRadius: theme.shape.borderRadius,
//   // width: "100%",
// }));

const Topics = ["Ciao", "Hello", "Hi", "Bye", "Arrivederci"];

const StaffPicks = [
  {
    username: "User1",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User2",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User3",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
];

const Rightbar = () => {
  return (
    <StyledRightbar>
      <Search sx={{ mt: "40px" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 3 }}>
        <Link to="/new-story">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{ fill: "green", mr: 1 }}
          />
        </Link>
        <Link
          to="/new-story"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography
            paragraph
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              mb: "0",
            }}
          >
            Staff Picks
          </Typography>
        </Link>
      </Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {StaffPicks.map((item, index) => (
          <Pick
            key={index}
            username={item.username}
            avatar={item.avatar}
            title={item.title}
            isLast={index === StaffPicks.length - 1 ? true : false}
          />
        ))}
      </List>
      {/* <Divider /> */}
      <Typography variant="h6" fontWeight={100} mt={4} ml={3}>
        Recommended Topics
      </Typography>
      <RecommendedTopics topics={Topics} />
      <Typography variant="h6" fontWeight={100} mt={4} ml={3}>
        Who to follow
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User4"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 4"
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography> */}
                {"I am a traveler. Photographer. Writer. Teacher. Skydiving"}
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    marginLeft: "200px",
                    color: "gray",
                    borderColor: "gray",
                  }}
                >
                  Follow
                </Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User 5"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 5"
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography> */}
                {"The first decentralized lending protocol powered by Oasis."}
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    marginLeft: "200px",
                    color: "gray",
                    borderColor: "gray",
                  }}
                >
                  Follow
                </Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User 6"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 6"
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography> */}
                {"I am an AWS serverless hero and cloud architect with a..."}
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    marginLeft: "200px",
                    color: "gray",
                    borderColor: "gray",
                  }}
                >
                  Follow
                </Button>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </StyledRightbar>
  );
};

export default Rightbar;
