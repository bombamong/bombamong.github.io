import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const UserProfile = props => {
  const classes = useStyles();

  const renderLanding = () => {
    return (
      <Grid
        className={classes.root}
        justify="center"
        alignItems="center"
        container
      >
        <Grid
          style={{
            borderRadius: "20px",
            padding: "1em",
            // backgroundColor: `rgba(${r},${g},${b},1)`,
            backgroundColor: "white",
            transition: "all 0.5s ease",
          }}
          item
        >
          <Grid container>
            <Typography variant="h4">Hi, I am</Typography>
          </Grid>
          <Grid container direction="row" className={classes.myname}>
            <div className={`vibrate ${classes.vibrate}`}>
              <Typography variant="h1">{"{"}</Typography>
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>
              <Typography noWrap variant="h1">{` D`}</Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                a
              </Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                v
              </Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                i
              </Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                d
              </Typography>
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>
              <Typography noWrap variant="h1">{` B`}</Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                y
              </Typography>
            </div>
            <div>
              <Typography noWrap variant="h1">
                u
              </Typography>
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>
              <Typography noWrap variant="h1">
                {"n "}
              </Typography>
            </div>
            <div className={`vibrate ${classes.vibrateR}`}>
              <Typography variant="h1">{"}"}</Typography>
            </div>
          </Grid>
          <Grid container>
            <Typography variant="h4">
              I am a software engineer :: welcome to my page ::
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderAbout = () => {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={{
          minHeight: "60vh",
          padding: "2em 1em",
          border: "0.5px dashed lightgrey",
          backgroundColor: "white",
        }}
      >
        <Grid item style={{ backgroundColor: "white" }}>
          <Typography variant="h2">About</Typography>
          <Grid
            // style={{ border: "1px solid black" }}
            container
          >
            <Typography variant="h4">Name: David Byun</Typography>
          </Grid>
          <Grid
            // style={{ border: "1px solid black" }}
            container
          >
            <Typography variant="h4">Location: Seoul, South Korea</Typography>
          </Grid>
          <Grid
            // style={{ border: "1px solid black" }}
            container
          >
            <Typography variant="h4">Github: bombamong</Typography>
          </Grid>
          <Grid
            // style={{ border: "1px solid black" }}
            container
          >
            <Typography variant="h4">Stack: JS/NODE/GO</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid style={{ zIndex: 0 }} container direction="column">
      {renderLanding()}
      {renderAbout()}
    </Grid>
  );
};

const useStyles = makeStyles(theme => {
  const generateRandomRGB = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(generateRandomNumber());
    }
    const [r, g, b] = arr;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

  return {
    root: {
      backgroundColor: "white",
      minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      padding: "2em 0",
    },
    myname: {
      width: "100%",
      color: "white",
      mixBlendMode: "difference",
      flexDirection: "row",
      "& div:not(.vibrate)": {
        display: "flex",
        overflow: "hidden",
        flexWrap: "no-wrap",
        userSelect: "none",
        transition: "all 0.5s ease",
        animation: `$fadein 2s none linear`,
      },
      "& div:not(.vibrate):hover": {
        color: "grey",
        display: "flex",
        transform: "translateY(1em)",
      },
    },
    vibrate: {
      // animation: `$vibrate 0.2s 10 linear`,
    },
    vibrateR: {
      // animation: `$vibrateR 0.2s 10 linear`,
    },

    "@keyframes vibrate": {
      "0%": {
        transform: "translateX(0.5em)",
      },
      "25%": {
        transform: "translateX(-0.5em)",
      },
      "50%": {
        transform: "translateX(0.5em)",
      },
      "75%": {
        transform: "translateX(-0.5em)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    "@keyframes vibrateR": {
      "0%": {
        transform: "translateX(-0.5em)",
      },
      "25%": {
        transform: "translateX(0.5em)",
      },
      "50%": {
        transform: "translateX(-0.5em)",
      },
      "75%": {
        transform: "translateX(0.5em)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    "@keyframes fadein": {
      "0%": {
        filter: "blur(5px)",
      },
      "10%": {
        filter: "blur(1px)",
      },
      "12%": {
        filter: "blur(10px)",
      },
      "20%": {
        filter: "blur(0px)",
      },
      "35%": {
        filter: "blur(7px)",
      },
      "40%": {
        filter: "blur(0px)",
      },
      "40%": {
        filter: "blur(2px)",
      },
      "50%": {
        filter: "blur(6px)",
      },
      "75%": {
        filter: "blur(20px)",
      },
      "90%": {
        filter: "blur(0px)",
      },
      "95%": {
        filter: "blur(3px)",
      },
      "100%": {
        filter: "blur(0px)",
      },
    },
  };
});

export default UserProfile;
