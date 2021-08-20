import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    marginBottom: "3em",
    "& *": {
      zIndex: 0,
      borderRadius: "2px",
    },
  },
  topbar: { padding: "0.3em 0" },
  categoriesContainer: {
    borderTop: "0.5px solid lightgrey",
    borderBottom: "0.5px solid lightgrey",
    padding: "1em 0",
  },
  featuredPostContainer: {
    cursor: "pointer",
    minHeight: "40vh",
    backgroundColor: "white",
    backgroundImage: "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "auto 100%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundSize: "100%",
    },
    backgroundBlendMode: "multiply",
    transition: "background 1s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      transition: "background 1s ease-in-out ",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "auto 110%",
      },
      [theme.breakpoints.up("md")]: {
        backgroundSize: "110%",
      },
    },
  },
  navLink: {
    padding: "1em 0.5em",
    margin: "0.25em 0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transition: "all 0.3s ease",
      backgroundColor: "rgba(220, 220, 220, 0.25)",
      boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.25)",
    },
  },
  selected: {
    transition: "all 0.3s ease",
    backgroundColor: "rgba(200, 200, 200, 0.25)",
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.25)",
  },
}));

const TopBar = ({ changeCurrentCategory }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      className={classes.topbar}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid style={{ flex: 1 }} item>
        <Grid item>
          <Button style={{ display: "flex" }}>
            <Typography align="center" variant="h5">
              SUBSCRIBE
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid style={{ flex: 1, cursor: "pointer" }} item onClick={() => {
        changeCurrentCategory("home")
      }}>
        <Typography align="center" variant="h2">
          Blog
        </Typography>
      </Grid>
      <Grid
        style={{ flex: 1 }}
        justify="flex-end"
        alignItems="center"
        container
      >
        <Grid item>
          <Button style={{ display: "flex" }} onClick={() => {
            let str = prompt()
            if(str === "1234") {
              alert("Logged in")
              history.push("/blogp")
            } else {
              alert("Failed to access")
            }
            }}>
            <Typography align="center" variant="h5">
              POST
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopBar;