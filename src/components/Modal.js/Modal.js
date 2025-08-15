import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxReset } from "react-icons/rx";
import Div from "./ModalStyes";

// import modalStyles from "./ModalStyes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "70%", // mobile
    sm: 400, // tablet and up
    md: 500, // desktop
  },
  bgcolor: "#22334d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
  borderRadius: "5px",
};

export default function BasicModal({ setBudget, setHaveSpent }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReset = () => {
    if (BasicModal) {
      setBudget(0);
      setHaveSpent([]);
      localStorage.removeItem("budget");
      localStorage.removeItem("spent");
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <Div>
      <Button onClick={handleOpen}>
        <RxReset />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to erase all of your inputs?
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 7,
                mt: 3,
                flexDirection: { xs: "column", sm: "row" }, // stack on mobile, side-by-side on larger screens
              }}
            >
              <Button onClick={handleReset} variant="contained" color="error">
                Yes
              </Button>
              <Button onClick={handleClose} variant="outlined">
                No
              </Button>
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </Div>
  );
}
