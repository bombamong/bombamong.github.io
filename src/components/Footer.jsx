import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      justify="center"
      alignItems="center"
      container
      direction="column"
    >
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid
          item
          justify="flex-end"
          style={{ display: "flex", flex: 1, padding: "0 2em" }}
        >
          <Typography style={{ color: "grey" }} variant="body1" align="center">
            ©Bombamong
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "100vw",
    padding: "1em 0",
    borderTop: "0.5px solid lightgrey",
  },
}));

export default Footer;
