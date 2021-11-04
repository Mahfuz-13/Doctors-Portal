import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={{ bannerBg }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={5}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 300, my: 3, fontSize: 14, color: "gray" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              perferendis quis consequuntur fugit, quisquam ullam eum aut? Ab
              laborum vitae, harum hic nesciunt nihil tenetur labore sint omnis,
              laboriosam totam!
            </Typography>
            <Button variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={7}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
