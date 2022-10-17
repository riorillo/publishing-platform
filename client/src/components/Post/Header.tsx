import { styles } from "./style";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Props = {
  username: string;
  userImage: string;
  publishedAt: string;
};

export function Header({ username, userImage, publishedAt } : Props) {
  return (
    <>
      <Box sx={styles.userName_imageContainer}>
        <CardMedia
          component="img"
          height="24px"
          image={userImage}
          alt="user-profile-image"
          sx={styles.userImage}
        />
        <Typography variant="body2" color="text.primary">
          {/* Da popolare con l'username dell'utente che pubblica */}
          {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Da popolare la data di pubblicazione */}
          {publishedAt}
        </Typography>
      </Box>
    </>
  );
}
