import React, { useEffect, useState, useHistory } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import TopBar from '../components/Blog/TopBar'
import Footer from "../components/Footer";
import Categories from '../components/Blog/Categories';
import Devlog from '../components/Blog/Devlog';
import Learn from '../components/Blog/Learn';
import Algorithms from '../components/Blog/Algorithms';
import Scrap from '../components/Blog/Scrap';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Projects from '../components/Blog/Projects';

const BlogHome = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("home")

  const changeCurrentCategory = (cat) => {
    setCategory(cat)
  }

  return (
    <Container disableGutters maxWidth="xl">
      <Container className={classes.root} maxWidth="lg">
        <Grid container direction="column">
          <TopBar changeCurrentCategory={changeCurrentCategory} />
          <Categories changeCurrentCategory={changeCurrentCategory} />
          {
            category === "devlog" ? <Devlog />
              : category === "learn" ? <Learn />
                : category === "algo" ? <Algorithms />
                  : category === "scrap" ? <Scrap />
                    : category === "projects" ? <Projects /> : <FeaturedPost />
          }
        </Grid>
      </Container>
      <Footer />
    </Container>
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

export default BlogHome;
