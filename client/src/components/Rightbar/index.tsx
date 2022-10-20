import {
  alpha,
  Avatar,
  Box,
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
import React from "react";
// import {
//   StyledRightbar,
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
// } from "./style";

const StyledRightbar = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  borderRadius: theme.shape.borderRadius,
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

const Rightbar = () => {
  return (
    <StyledRightbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Typography variant="h6" fontWeight={100} mt={4} ml={2}>
        Staff Picks
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User1"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 1"
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
                {"Please Consider the Racial Impact of Your Halloween Decor"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User 2"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 2"
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
                {"Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="User 3"
              src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="User 3"
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
                {"Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </StyledRightbar>
  );
};

export default Rightbar;
