import React, { useState } from "react";
import {
  Grid
} from "@material-ui/core";
import Recent from './Recent'
import Readme from './Readme'
import NavLink from './NavLink'

const HomePosts = () => {
  const displays = {
    recent: Recent(),
    readme: Readme()
  };
  const [display, setDisplay] = useState("recent");

  const handleLinkClick = link => {
    setDisplay(link);
  };
  return (
    <Grid
      container
      direction="column"
      style={{ width: "100%", margin: "1em 0", minHeight: "70vh" }}
    >
      <Grid spacing={0} container direction="row">
        <Grid
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            padding: "0 0.5em",
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
              currentDisplay={display}
              handleLinkClick={handleLinkClick}
              linkTo={`recent`}
              title={"RECENT"}
            />
            <NavLink
              currentDisplay={display}
              handleLinkClick={handleLinkClick}
              linkTo={`readme`}
              title={"README"}
            />
          </Grid>
        </Grid>
        {displays[display]}
      </Grid>
    </Grid>
  );
};

export default HomePosts;