import { Autocomplete, Box, Button, Modal, TextField, Typography } from "@mui/material";
import { NewStoryModalStyle } from "./style";
import CircularProgress from "@mui/material/CircularProgress";
import { CloudinaryUploadWidget } from "../../../pages/register/CloudinaryUploadWidget";
import { useEffect, useState } from "react";

const NewStoryModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onClick?: () => void;
  onChange?: (event: any, value: any) => void;
  onUpload?: (url: string) => void;
  success: boolean;
  error: boolean;
  loading: boolean;
}> = ({ open, onClose, onClick, onChange, onUpload, success, error, loading }) => {
  const { box, successBox } = NewStoryModalStyle;
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (onUpload) {
      onUpload(imageUrl);
    }
  }, [imageUrl]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={box}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          What are you talking about?
        </Typography>

        <Typography sx={{ mt: 2, mb: 2 }} id="modal-modal-description">
          Please, select a topic
        </Typography>

        <Autocomplete
          disablePortal
          options={[
            "Data Science",
            "Film",
            "Technology",
            "Programming",
            "Gaming",
            "Self Improvement",
            "Writing",
            "Relationships",
            "Machine Learning",
            "Productivity",
            "Artificial Intelligence",
            "Politics",
            "Development",
            "Coding",
            "Cryptocurrency",
            "Blockchain",
            "Frameworks",
            "Cybersecurity",
            "Biometrics",
            "Mobile"
          ]}
          sx={{ width: 300, mb: 2 }}
          renderInput={(params: any) => <TextField {...params} label="Topic" />}
          onChange={onChange}
        />

        <Box sx={{ mb: 2 }}>
          {!imageUrl && <CloudinaryUploadWidget buttonText="Add a preview image" handleSetUrl={setImageUrl} />}
          {imageUrl && 
          <Box sx={successBox}>
            <Typography> Your image has been loaded ✅</Typography>
            </Box>}
        </Box>

        {!loading && (
          <Button variant="contained" onClick={onClick}>
            Proceed
          </Button>
        )}
        {loading && <CircularProgress />}
        {success && (
          <Box sx={successBox}>
            <Typography>Your article has been posted ✅</Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default NewStoryModal;
