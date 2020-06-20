import React from "react";
import { Grid, Paper } from "@material-ui/core";

const MainBody = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs>
          <Paper style={{ marginTop: 10, marginBottom: 10, padding: 20 }}>
            This is paper 1
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={{ marginTop: 10, marginBottom: 10, padding: 20 }}>
            This is paper 2
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainBody;
