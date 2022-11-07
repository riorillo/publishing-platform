import { styles } from "./style";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  imageUrl: string;
};

export function CardImage({ imageUrl }: Props) {
  return (
    <>
      <Box sx={styles.CardImage}>
        {/* CardMedia da popolare con l'immagine che l'utente decide di postare con l'articolo, se dovesse decidere di farlo */}
        {imageUrl ? (
          <CardMedia
            component="img"
            height="100"
            image={imageUrl}
            alt="green iguana"
            sx={{ width: "80%" }}
          />
        ) : null}
      </Box>
    </>
  );
}
