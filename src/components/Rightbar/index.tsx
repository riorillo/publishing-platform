import { Box, Divider, List, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import Pick from "./Pick";
import RecommendedTopics from "./RecommendedTopics";
import Searchbar from "./Searchbar";
import UserToFollow from "./UsersToFollow";
import Footer from "./Footer";
import ale from "../../assets/Ale.jpg";
import frank from "../../assets/Frank.jpg";
import ivan from "../../assets/Ivan.jpg";
import lore from "../../assets/Lore.jpg";
import marco from "../../assets/Marco.png";
import rocco from "../../assets/Rocco.jpg";

const StaffPicks = [
  {
    username: "Alessandro",
    avatar: ale,
    title: "Smoke Sessions Tournament Starts Tonight!",
    link: "/home/post/85b82bcc-9ad4-4133-86eb-c7d9e901d79c",
  },
  {
    username: "Francesco",
    avatar: frank,
    title: "How to Build a Blockchain in JavaScript?",
    link: "/home/post/190dfc28-11ed-4c10-8493-620a1aa7d5b2",
  },
  {
    username: "Ivan",
    avatar: ivan,
    title: "League of Legends Worlds 2022: DRX Triumphs Over T1 3-2.",
    link: "/home/post/540a3fa7-88a1-423e-9193-f05fca1f8ba5",
  },
];

const Topics = [
  "Self Improvement",
  "Coding",
  "Machine Learning",
  "Frameworks",
  "Cryptocurrency",
  "Productivity",
  "Blockchain",
  "Development",
];

const WhoToFollow = [
  {
    username: "Lorenzo",
    avatar: lore,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/home/post/6738732b-b1e7-4ddd-8c4e-d2bbbd8c2fbb",
  },
  {
    username: "Marco",
    avatar: marco,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/home/post/7f198f43-4845-4c06-9c00-99324ae53ad7",
  },
  {
    username: "Rocco",
    avatar: rocco,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/home/post/ca3461a8-7dcd-40df-81e3-0e4f1a94fed5",
  },
];

const Rightbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        paddingLeft: "2rem",
        borderLeft: "1px solid lightgrey",
        top: 0,
        height: "100vh",
        overflowY: "scroll",
        "&::-webkit-scrollbar": { width: 0 },
      }}
    >
      <Searchbar />
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 3 }}>
        <Link to="#">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{ fill: "green", mr: 1 }}
          />
        </Link>
        <Link to="#" style={{ textDecoration: "none", color: "black" }}>
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
            toArticle={item.link}
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
            toArticle={item.link}
          />
        ))}
      </List>
      <Footer />
    </Box>
  );
};

export default Rightbar;
