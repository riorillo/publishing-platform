import { styles } from "./style";
import { Box } from "@mui/system";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";

export function FooterIcons() {
  const [color, setColor] = useState("grey");

  function handleBookMarkClick() {
    if (color === "grey") {
      setColor("black");
    } else setColor("grey");
  }

  return (
    <>
      <Box sx={styles.FooterIcons.layout}>
        <BookmarkIcon
          onClick={handleBookMarkClick}
          sx={{ fill: color, cursor: "pointer" }}
        />
        <RemoveCircleOutlineIcon sx={styles.FooterIcons.details} />
      </Box>
    </>
  );
}
