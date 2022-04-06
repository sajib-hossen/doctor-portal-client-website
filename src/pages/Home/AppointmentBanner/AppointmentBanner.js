import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./AppointmentBanner.css";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 25, 74,0.6)",
  backgroundBlendMode: "darken luminosity",
  marginTop: 150,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-120px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left !important",
          }}
        >
          <Box style={{ textAlign: "left", marginLeft: "15px" }}>
            <Typography sx={{ textAlign: "left", my: 2 }} variant="subtitle1">
              Appointment
            </Typography>
            <Typography sx={{ textAlign: "left", my: 3 }} variant="h4">
              Make an appointment <br /> Today
            </Typography>
            <Typography sx={{ textAlign: "left", my: 2 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              repudiandae labore eos necessitatibus amet aspernatur!
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
