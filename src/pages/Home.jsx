import React from "react";
import UserProfile from "../components/UserProfile";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const Home = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" disableGutters>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="flex-start">
          <UserProfile />
        </Grid>
        <Grid container justify="center" alignItems="flex-start">
          <BlogList />
        </Grid>
      </Container>
      <Footer />
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default Home;
