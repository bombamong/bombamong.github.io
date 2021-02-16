import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import Footer from "../components/Footer";

const BlogHome = () => {
  const classes = useStyles();
  return (
    <Container disableGutters maxWidth="xl">
      <Container className={classes.root} maxWidth="lg">
        <Grid container direction="column">
          <TopBar />
          <Categories />
          <FeaturedPost />
          <Posts />
        </Grid>
      </Container>
      <Footer />
    </Container>
  );
};

const TopBar = () => {
  const classes = useStyles();
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
      <Grid style={{ flex: 1 }} item>
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
          <Button style={{ display: "flex" }}>
            <Typography align="center" variant="h5">
              POST
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Categories = () => {
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
        <Typography>{el}</Typography>
      ))}
    </Grid>
  );
};

const FeaturedPost = () => {
  const [imgSrc, setImgSrc] = useState("");
  const classes = useStyles();
  useEffect(() => {
    setImgSrc("https://picsum.photos/1200/400");
  }, [imgSrc]);

  const changeImg = () => {
    setImgSrc(0);
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
          SPACE TO LEARN & SHARE
        </Typography>
        <Typography variant="h4">
          Code, notes and more about my dev life.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Posts = () => {
  const displays = {
    readme: Readme(),
    recent: Recent(),
  };
  const [display, setDisplay] = useState("readme");

  const handleLinkClick = link => {
    setDisplay(link);
  };
  return (
    <Grid
      container
      direction="column"
      style={{ width: "100%", margin: "1em 0" }}
    >
      <Grid spacing={0} container direction="row">
        <Grid
          style={{
            backgroundColor: "lightgrey",
            padding: "0.5em",
          }}
          item
          xs={12}
          md={2}
          direction="column"
        >
          <Grid
            container
            // justify="center"
            // alignItems="center"
            direction="column"
            style={{ height: "100%" }}
          >
            <NavLink
              handleLinkClick={handleLinkClick}
              linkTo={`readme`}
              title={"README"}
            />
            <NavLink
              handleLinkClick={handleLinkClick}
              linkTo={`recent`}
              title={"RECENT"}
            />
          </Grid>
        </Grid>
        {displays[display]}
      </Grid>
    </Grid>
  );
};

const NavLink = ({ linkTo, title, handleLinkClick }) => {
  let { path, url } = useRouteMatch();
  return (
    <Grid
      onClick={() => handleLinkClick(linkTo)}
      style={{ padding: "1em 0", cursor: "pointer" }}
      item
    >
      <Typography variant="h5">{title}</Typography>
    </Grid>
  );
};

const Readme = () => {
  return (
    <Grid item direction="column" xs={12} md={9} style={{ padding: "0 0.5em" }}>
      <Grid item>
        <Typography variant="h3">README</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">This blog is adf</Typography>
      </Grid>
    </Grid>
  );
};

const Recent = () => {
  return (
    <Grid item direction="column" xs={12} md={9} style={{ padding: "0 0.5em" }}>
      <Grid item>
        <Typography variant="h3">RECENT</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">These are recent posts</Typography>
      </Grid>
    </Grid>
  );
};

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
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    transition: "all 0.2s ease-in-out ",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      transition: "all 0.5s ease-in-out ",
    },
  },
}));

export default BlogHome;
