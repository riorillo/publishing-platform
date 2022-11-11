import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box";

const Loading: React.FC<{size?: number }> = ({size = 144}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontSize: "64px",
        borderRadius: "5%",
        height: "100vh",
      }}
    >
      <CircularProgress size={size} />
      <Typography sx={{ color: "gray" }} variant="h5">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
