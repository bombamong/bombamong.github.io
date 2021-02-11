import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const UserProfile = props => {
  const classes = useStyles();
  const [color, setColor] = useState({ r: "0", g: "0", b: "0" });

  useEffect(() => {
    setInterval(() => {
      setColor({
        r: getRandomColor(),
        g: getRandomColor(),
        b: getRandomColor(),
      });
    }, 1000);
  }, []);

  const getRandomColor = () => {
    return (Math.random() * 255).toString();
  };

  const { r, g, b } = color;

  return (
    <Grid className={classes.root} container direction="column">
      <Grid
        style={{
          minHeight: "100vh",
          borderBottom: "0.5px solid lightgrey",
          padding: "2em 0",
        }}
        justify="center"
        alignItems="center"
        container
      >
        <Grid
          style={{
            borderRadius: "20px",
            padding: "1em",
            backgroundColor: `rgba(${r},${g},${b},1)`,
            transition: "all 0.5s ease",
          }}
          item
        >
          <Typography className={classes.myname} align="center" variant="h3">
            David Byun
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: "2em 0" }}
      >
        <Grid style={{}} item xs={4}>
          <Typography variant="h4">NAME === </Typography>
        </Grid>
        <Grid style={{ paddingLeft: "1em", flex: 1 }} item>
          <Typography align="center" variant="h5">
            I am David Byun
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {},
  myname: {
    color: "white",
    mixBlendMode: "difference",
    animation: `$rotate 2s infinite linear`,
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0)",
    },
    "25%": {
      transform: "rotate(90deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "75%": {
      transform: "rotate(270deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

export default UserProfile;
