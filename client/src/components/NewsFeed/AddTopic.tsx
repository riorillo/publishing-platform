import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LayoutStyle from "./style";
import TopicButton from "../TopicButton";
import { exampleTopicNotSelected } from "../SavedPost/mockArticle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle({
  children,
  onClose,
  ...other
}: DialogTitleProps) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function AddTopic() {
  const [open, setOpen] = useState(false);
  const [topicListToAdd, setTopicListToAdd] = useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    handleSubmitChanges();
  };

  const handleAddTopic = (topic: string) => {
    setTopicListToAdd((prev: string[]) => {
      console.log(topicListToAdd);
      return [...prev, topic];
    });
  };

  const handleRemoveTopic = (topic: string) => {
    setTopicListToAdd((prev: string[]) => prev.filter((ele) => ele !== topic));
    console.log(topicListToAdd);
  };

  const handleSubmitChanges = () => {
    // qui ci sarà la funzione per inviare i topic al DB

    setTopicListToAdd([])
  }

  return (
    <div>
      <Button sx={LayoutStyle.button} variant="text" onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-topic-title"
        open={open}
      >
        <BootstrapDialogTitle id="add-topic-title" onClose={handleClose}>
          Add some preference
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {exampleTopicNotSelected.map((ele, index) => (
            <TopicButton
              key={index}
              handleRemove={handleRemoveTopic}
              handleAdd={handleAddTopic}
              content={ele}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
