
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
	borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [url, setUrl] = useState("");

  return (
    <div>
      <Button variant="contained" color="warning" className="uploadButton" onClick={handleOpen}>Upload Video</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Insira a URL da Thumbnail:
          </Typography>
					<br />
					<TextField className="inputURL" label="URL" value={url} onChange={(e) => setUrl(e.target.value)} variant="outlined" />
					<br />
					<Button variant="contained" className="uploadURL" onClick={() => {props.setModal(url) || setOpen(false)}} color="warning">Enviar</Button>
        </Box>
      </Modal>
    </div>
  );
}
