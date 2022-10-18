import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { NewStoryModalStyle } from "./style";

const NewStoryModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onClick?: () => void;
  onChange?: (event: any, value: any) => void;
}> = ({ open, onClose, onClick, onChange}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={NewStoryModalStyle.box}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          What are you talking about?
        </Typography>

        <Typography sx={{ mt: 2, mb: 2 }} id="modal-modal-description">
          Please, select a topic
        </Typography>

        <Autocomplete
          disablePortal
          options={["Topic 1", "Topic 2"]}
          sx={{ width: 300, mb: 2 }}
          renderInput={(params: any) => <TextField {...params} label="Topic" />}
          onChange={onChange}
        />

        <Button variant="contained" onClick={onClick}>
          Proceed
        </Button>
      </Box>
    </Modal>
  );
};

export default NewStoryModal;
