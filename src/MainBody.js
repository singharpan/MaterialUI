import React from "react";
import { Grid } from "@material-ui/core";
import LeftPaper from "./LeftPaper";
import RightPaper from "./RightPaper";

const MainBody = () => {
  const style = {
    paper: {
      marginTop: 10,
      marginBottom: 10,
      padding: 20,
    },
  };
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs>
          <LeftPaper style={style} />
        </Grid>
        <Grid item xs>
          <RightPaper style={style} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainBody;
