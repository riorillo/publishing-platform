import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledFooter } from "./style";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Help
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Status
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Writer
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Blog
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Careers
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Privacy
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Terms
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            About
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <Typography
            paragraph
            sx={{
              fontSize: "12px",
              mb: "0",
            }}
          >
            Knowable
          </Typography>
        </Link>
      </StyledFooter>
    </>
  );
};

export default Footer;
