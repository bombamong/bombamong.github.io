import React from "react";
import {
  Grid,
  Typography
} from "@material-ui/core";

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

export default Readme