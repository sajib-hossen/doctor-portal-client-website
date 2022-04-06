import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: "none", boxShadow: "none" }}>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Paella dish"
          style={{ width: "auto", height: "80px", margin: "auto" }}
        />
        <CardContent>
          <Typography variant="h5" style={{ margin: "10px 0" }} component="div">
            {name}
          </Typography>

          <Typography sx={{ fontWeight: "light", my: "25" }} variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
