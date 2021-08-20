import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
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

const Projects = () => {
  const [imgSrc, setImgSrc] = useState("");
  const classes = useStyles();
  useEffect(() => {
    setImgSrc("https://picsum.photos/1200/400");
    return () => setImgSrc("")
  }, []);

  const changeImg = () => {
    alert("CHANGE")
    setImgSrc("https://picsum.photos/1200/400");
  };

  return (
    <Grid
      onClick={changeImg}
      container
      alignItems="center"
      className={classes.featuredPostContainer}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <Grid
        md={6}
        item
        style={{
          width: "100%",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          // mixBlendMode: "exclude",
          padding: "1em",
        }}
      >
        <Typography variant="h2" component="h2">
          Projects
        </Typography>
        <Typography variant="h4">
          Code, notes and more about my dev life.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;