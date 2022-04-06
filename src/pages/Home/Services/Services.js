import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Services.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import fluri from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import wthiten from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    id: 0,
    name: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: fluri,
  },
  {
    id: 1,
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img: cavity,
  },
  {
    id: 0,
    name: "Teath Whitening",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    img: wthiten,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          sx={{ color: "#35D7DA", my: 3 }}
          gutterBottom
          component="div"
        >
          OUR SERVICESW
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "black", mb: 4 }}
          gutterBottom
          component="div"
        >
          {" "}
          Services We Provide{" "}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
