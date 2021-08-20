import React from "react";
import {
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

const Categories = ({ changeCurrentCategory }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.categoriesContainer}
    >
      {["DEVLOG", "LEARN", "ALGO", "SCRAP", "PROJECTS"].map(el => (
        <Button onClick={() => changeCurrentCategory(el.toLowerCase())}>
          <Typography>
            {el}
          </Typography>
        </Button>
      ))}
    </Grid>
  );
};

export default Categories