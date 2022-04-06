import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "../../Shared/Calendar/Calendar";
const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={6} md={4}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
