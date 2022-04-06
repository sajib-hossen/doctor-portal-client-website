import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModel = ({
  openBookingModel,
  handleBookingClose,
  booking,
  date,
}) => {
  const { time, name, space } = booking;
  const handleBookingSubmit = (e) => {
    alert("booking form");
    handleBookingClose();
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBookingModel}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBookingModel}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {booking.name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                id="outlined-size-small"
                defaultValue={time}
                disabled
                size="small"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="outlined-size-small"
                placeholder="Your name"
                size="small"
                type="text"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="outlined-size-small"
                placeholder="Your Email"
                size="small"
                type="email"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="outlined-size-small"
                placeholder="phone number"
                size="small"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                disabled
                sx={{ width: "90%", m: 1 }}
              />
              <Button type="submit" sx={{ m: 1 }} variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModel;
