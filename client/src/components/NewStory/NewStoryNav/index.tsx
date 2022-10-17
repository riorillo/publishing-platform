import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { NewStoryNavStyle } from "./style";

const NewStoryNav: React.FC<{ username: string }> = ({ username }) => {
  return (
    <>
      <Container sx={NewStoryNavStyle.container} maxWidth="lg">
        <Typography>
          Draft in <strong>{username}</strong>
        </Typography>

        <Box sx={NewStoryNavStyle.box}>
          <Avatar>{username.split('')[0]}</Avatar>
          <Button color="primary" variant="contained">
            Publish
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NewStoryNav;
