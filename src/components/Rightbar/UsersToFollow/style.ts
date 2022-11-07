import { Button, styled } from "@mui/material";

export const StyledOutlinedButton = styled(Button)({
  alignSelf: "center",
  backgroundColor: "none",
  color: "gray",
  border: "1px solid gray",
  fontSize: "12px",
  marginLeft: "12px",
  padding: "2.5px 26px",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "none",
    color: "black",
    border: "1px solid black",
  },
});
