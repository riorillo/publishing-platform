import React, { useContext, useEffect } from "react";
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
import { Box } from "@mui/system";
import axios from "axios";
import { SetUserContext, UserContext, UserContextType } from "../../utils/context";

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

interface Props {
  textDisplayed?: string;
  closeTextDisplayed?: string;
  titleText?: string;
  numberOfTopicRequired?: number;
  elementList?: string[];
}

export default function AddTopic({
  textDisplayed,
  titleText,
  elementList = [],
  numberOfTopicRequired = 0,
  closeTextDisplayed,
}: Props) {
  const [open, setOpen] = useState(false);
  const [topicListToAdd, setTopicListToAdd] = useState<string[]>([]);
  const user = useContext<UserContextType>(UserContext);
  const setUser = useContext(SetUserContext)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    handleSubmitChanges();
  };

  const handleAddTopic = (topic: string) => {
    setTopicListToAdd((prev: string[]) => {
      return [...prev, topic];
    });
  };

  const handleRemoveTopic = (topic: string) => {
    setTopicListToAdd((prev: string[]) => prev.filter((ele) => ele !== topic));
  };

  const handleSubmitChanges = () => {
    const pushingData = async () => {
      await axios.put(
        `http://localhost:3001/api/topics/${user.id}`,
        {
          topics: topicListToAdd,
        },
        {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        }
      );
      setUser({...user, topics: user.topics?.concat(topicListToAdd)})
      setTopicListToAdd([]);
    };
    pushingData();
  };

  return (
    <div>
      <Button sx={LayoutStyle.button} variant="text" onClick={handleClickOpen}>
        {textDisplayed ? textDisplayed : <AddIcon />}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-topic-title"
        open={open}
      >
        <BootstrapDialogTitle id="add-topic-title" onClose={handleClose}>
          <Box sx={{ marginRight: "2.8rem" }}>
            {titleText ? titleText : "Add some preference"}
          </Box>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {elementList?.map((ele, index) => (
            <TopicButton
              key={index}
              handleRemove={handleRemoveTopic}
              handleAdd={handleAddTopic}
              content={ele}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            disabled={elementList.length < numberOfTopicRequired ? true : false}
            onClick={handleClose}
          >
            {closeTextDisplayed ? closeTextDisplayed : "Save changes"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
