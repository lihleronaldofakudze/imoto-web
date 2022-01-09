import React from "react";

//Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const ContactComponent = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#143E45", color: "#FFFFFF" }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item md={5}>
          <Button
            variant="text"
            color="inherit"
            size="small"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              fontSize: 12,
              alignItems: "center",
            }}
          >
            English
          </Button>
        </Grid>
        <Grid
          item
          container
          md={7}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="text"
            color="inherit"
            size="small"
            startIcon={<CallIcon />}
            sx={{
              fontSize: 12,
            }}
          >
            +268 3402 1783
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="small"
            sx={{
              fontSize: 12,
            }}
          >
            1010 MOON AVE, NEW YORK, NY US
          </Button>
          <Button
            variant="text"
            color="inherit"
            size="small"
            sx={{
              fontSize: 12,
            }}
          >
            MON - SAT 8.00 - 18.00
          </Button>
          <div>
            <IconButton aria-label="facebook" href="#" size="small">
              <FacebookRoundedIcon sx={{ fontSize: 18, color: "#FFFFFF" }} />
            </IconButton>
            <IconButton aria-label="twitter" href="#" size="small">
              <TwitterIcon sx={{ fontSize: 18, color: "#FFFFFF" }} />
            </IconButton>
            <IconButton aria-label="instagram" href="#" size="small">
              <InstagramIcon sx={{ fontSize: 18, color: "#FFFFFF" }} />
            </IconButton>
            <IconButton aria-label="linkedin" href="#" size="small">
              <LinkedInIcon sx={{ fontSize: 18, color: "#FFFFFF" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactComponent;
