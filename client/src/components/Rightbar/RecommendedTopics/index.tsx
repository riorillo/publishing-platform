import { Button, Box, styled } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "lightgray",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": { backgroundColor: "darkgray" },
});

const RecommendedTopics: React.FC<{ topics: string[] }> = ({ topics }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          ml: 2,
          mt: 2,
          mb: 4,
          width: "80%",
        }}
      >
        {topics.map((item, index) => (
          <StyledButton key={index} variant="contained">
            {item}
          </StyledButton>
        ))}
      </Box>
    </>
  );
};

export default RecommendedTopics;
