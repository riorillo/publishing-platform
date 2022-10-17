import { styles } from "./style";
import { Box } from "@mui/system";

type Props = {
  topic: string;
  readingTime: string;
};
export function CardFooter({ topic, readingTime }: Props) {
  return (
    <>
      <Box sx={styles.CardFooter.layout}>
        {topic ? (
          <Box sx={styles.CardFooter.details}>
            {topic}
            {/* Questo box sarà showato solamente se la notizia riportata avrà un topic specificato, il contenuto del tag sarà appunto il topic */}
          </Box>
        ) : null}
        <Box>
          {readingTime}
          {/*Questo box verrà popolato con il tempo stimato per la lettura dell'articolo, altrimenti non sarà renderizzato, come quello dei tag*/}
        </Box>
      </Box>
    </>
  );
}
