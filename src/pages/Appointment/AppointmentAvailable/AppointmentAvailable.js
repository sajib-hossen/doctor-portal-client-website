import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 0,
    name: "Teeth Orthodontics",
    time: "8.00AM - 9.00AM",
    space: "10",
  },
  {
    id: 1,
    name: "Cosmetic Dentistry",
    time: "10.00AM - 11.00AM",
    space: "10",
  },
  {
    id: 2,
    name: "Teeth Cleaning",
    time: "12.00AM - 1.00PM",
    space: "15",
  },
  {
    id: 3,
    name: "Teeth Orthodontics",
    time: "8.00AM - 9.00AM",
    space: "10",
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "4.00PM - 5.00PM",
    space: "20",
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8.00AM - 9.00AM",
    space: "10",
  },
];

const AppointmentAvailable = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Available Appointments on {date.toDateString()}{" "}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AppointmentAvailable;
