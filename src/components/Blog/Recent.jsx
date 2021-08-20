import React from "react";
import {
  Grid,
  Typography
} from "@material-ui/core";

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

export default Recent;