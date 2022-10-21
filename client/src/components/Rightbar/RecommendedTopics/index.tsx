import { Button, Box } from "@mui/material";

const RecommendedTopics: React.FC<{ topics: string[] }> = ({ topics }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          ml: 2,
          mt: 2,
        }}
      >
        {topics.map((item, index) => (
          <Button key={index} variant="contained">
            {item}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default RecommendedTopics;
