import { styles } from "./style";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

type Props = {
  tag: string[];
  readingTime: string;
};
export function CardFooter({ tag, readingTime }: Props) {
  return (
    <>
      <Box sx={styles.CardFooter.layout}>
        {tag
          ? tag.map((e) => (
              <Box sx={styles.CardFooter.details}>
                <Typography sx={{ fontSize: { sm: ".8rem", xs: "12px" } }}>
                  {e}
                </Typography>
              </Box>
            ))
          : null}
        <Box>
          <Typography sx={{ fontSize: { sm: ".8rem", xs: "12px" } }}>
            {readingTime}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
