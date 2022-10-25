import { Box, Divider, List, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import Pick from "./Pick";
import RecommendedTopics from "./RecommendedTopics";
import Searchbar from "./Searchbar";
import UserToFollow from "./UsersToFollow";
import Footer from "./Footer";

const StaffPicks = [
  {
    username: "User 1",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User 2",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User 3",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
];

const Topics = [
  "Self Improvement",
  "Writing",
  "Machine Learning",
  "Politics",
  "Cryptocurrency",
  "Productivity",
  "Politics",
  "Relationships",
];

const WhoToFollow = [
  {
    username: "User 4",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User 5",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
  {
    username: "User 6",
    avatar:
      "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
    title: "Please Consider the Racial Impact of Your Halloween Decor",
  },
];

const Rightbar = () => {
  return (
    <Box>
      <Searchbar />
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 3 }}>
        <Link to="/">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{ fill: "green", mr: 1 }}
          />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography
            paragraph
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
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
      <Typography
        variant="h6"
        fontWeight={100}
        mt={2}
        ml={1}
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          mb: "0",
        }}
      >
        Recommended Topics
      </Typography>
      <RecommendedTopics topics={Topics} />
      <Divider />
      <Typography
        variant="h6"
        fontWeight={100}
        mt={4}
        ml={3}
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          mb: "0",
        }}
      >
        Who to follow
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {WhoToFollow.map((item, index) => (
          <UserToFollow
            key={index}
            username={item.username}
            avatar={item.avatar}
            title={item.title}
            isLast={index === StaffPicks.length - 1 ? true : false}
          />
        ))}
      </List>
      <Footer />
    </Box>
  );
};

export default Rightbar;
