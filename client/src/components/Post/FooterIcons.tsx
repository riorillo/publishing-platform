import { styles } from "./style";
import { Box } from "@mui/system";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Fade } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function FooterIcons() {
  const deleteHover = <Typography variant="body2">Delete Article</Typography>;
  const savePostHover = <Typography variant="body2">Save Article</Typography>;

  const [color, setColor] = useState("grey");

  const [hover, setHover] = useState(false);
  const [hoverPost, setHoverPost] = useState(false);

  function handleBookMarkClick() {
    if (color === "grey") {
      setColor("black");
    } else setColor("grey");
  }

  function HandleArticleRemove() {
    console.log("ciao");
  }
  return (
    <>
      <Box sx={styles.FooterIcons.layout}>
        <BookmarkIcon
          onClick={handleBookMarkClick}
          sx={{ fill: color, cursor: "pointer" }}
          onMouseEnter={() => setHoverPost(true)}
          onMouseLeave={() => setHoverPost(false)}
        />
        <Box sx={styles.hoverStyle}>
          <Fade in={hoverPost}>{savePostHover}</Fade>
        </Box>
        <RemoveCircleOutlineIcon
          sx={styles.FooterIcons.details}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={HandleArticleRemove}
        />
        <Box sx={styles.hoverStyle}>
          <Fade in={hover}>{deleteHover}</Fade>
        </Box>
      </Box>
    </>
  );
}
