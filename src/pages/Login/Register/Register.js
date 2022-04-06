import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Register.css";
import login from "../../../images/login.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }

    e.preventDefault();
  };
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 5, mt: 20 }}>
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Please Register
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="your Email"
                type="email"
                name="email"
                onChange={handleOnchange}
                variant="standard"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                label="your password"
                type="password"
                name="password"
                onChange={handleOnchange}
                variant="standard"
                sx={{ width: "90%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Re-Type Your Password"
                type="password"
                name="password2"
                onChange={handleOnchange}
                variant="standard"
                sx={{ width: "90%", m: 1 }}
              />
              <Button
                type="submit"
                sx={{ width: "90%", m: 1, my: 3 }}
                variant="contained"
              >
                Register
              </Button>
            </form>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
              }}
            >
              <Button variant="outlined" sx={{ textAlign: "center" }}>
                Already Register? Please Login !!!
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
