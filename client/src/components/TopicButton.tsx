import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

type Props = {
  content: string;
  handleRemove: any;
  handleAdd: any;
};

export default function TopicButton({
  content,
  handleRemove,
  handleAdd,
}: Props) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    selected ? handleRemove(content) : handleAdd(content);
    setSelected((prev) => !prev);
  }

  return (
    <Button
      size="small"
      onClick={handleClick}
      variant="contained"
      color={selected ? "success" : "inherit"}
      
      sx={{ boxSizing:"border-box", borderRadius: "1.5rem", margin:".3rem .4rem" }}
    >
      {content}
    </Button>
  );
}
