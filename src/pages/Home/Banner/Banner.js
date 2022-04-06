import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";
import chair from "../../../images/chair.png";
import { Box } from "@mui/system";

const verticalAlign = {
  display: "flex",
  alignItems: "center",
  height: 450,
  width: "100%",
};

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={verticalAlign}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h3" sx={{ textAlign: "left", my: 4 }}>
              Your New smile <br /> Starts Here
            </Typography>
            <Typography sx={{ textAlign: "left", my: 2 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              rerum minima repellat sapiente, laborum quos? Magnam nostrum
              recusandae architecto vitae. Aspernatur ut iusto quis mollitia
              perspiciatis consequatur expedita nobis. Voluptates!
            </Typography>
            <Button sx={{ textAlign: "left" }} variant="contained">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalAlign}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
