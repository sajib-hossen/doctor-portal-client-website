import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModel from "../BookingModel/BookingModel";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBookingModel, setOpenBookingModel] = React.useState(false);
  const handleBookingOpen = () => setOpenBookingModel(true);
  const handleBookingClose = () => setOpenBookingModel(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ p: 5, m: 1 }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1" sx={{ my: 1 }}>
            {time}
          </Typography>
          <Typography variant="body2" sx={{ my: 1 }}>
            {space} Space Available{" "}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModel
        openBookingModel={openBookingModel}
        handleBookingClose={handleBookingClose}
        booking={booking}
        date={date}
      ></BookingModel>
    </>
  );
};

export default Booking;
