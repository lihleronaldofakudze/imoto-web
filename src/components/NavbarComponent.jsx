import React from "react";

//Images
import Logo from "../images/imoto.png";

//Icons
import SpeedIcon from "@mui/icons-material/Speed";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CarRepairIcon from "@mui/icons-material/CarRepair";

//Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const NavbarComponent = () => {
  return (
    <AppBar
      position="relative"
      color="inherit"
      elevation={0}
      sx={{
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item md={2}>
            <img src={Logo} alt="Imoto Car Sales" width={120} />
          </Grid>
          <Grid
            item
            container
            md={5}
            alignItems="center"
            justifyContent="space-around"
          >
            <Button
              variant="text"
              color="inherit"
              sx={{
                fontWeight: "bolder",
              }}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{
                fontWeight: "bolder",
              }}
            >
              Inventory
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{
                fontWeight: "bolder",
              }}
            >
              Pricing
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{
                fontWeight: "bolder",
              }}
            >
              Pages
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{
                fontWeight: "bolder",
              }}
            >
              Dealers
            </Button>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid
            item
            container
            md={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton aria-label="compare">
              <SpeedIcon />
            </IconButton>
            <IconButton aria-label="compare">
              <AccountCircleIcon />
            </IconButton>
            <Button variant="contained" color="secondary">
              Add New Car
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
