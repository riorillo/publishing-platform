import { styles } from "./style";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  title : string,
  description : string
}

export function CardHeader({ title, description } : Props) {
  return (
    <>
      <CardContent sx={styles.title_descr_container}>
        <Typography
          gutterBottom
          variant={"h5"}
          component="div"
          sx={{ fontWeight: "bold", fontSize: {} }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "block" } }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </>
  );
}
