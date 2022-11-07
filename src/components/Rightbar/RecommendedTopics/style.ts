import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)({
  backgroundColor: "lightgray",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": { backgroundColor: "darkgray" },
});

export const ButtonGroup = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginLeft: "8px",
  marginTop: "16px",
  marginBottom: "20px",
  width: "80%",
});
