import React from "react";
import { Paper } from "@material-ui/core";
const RightPaper = ({ style }) => {
  return (
    <React.Fragment>
      <Paper style={style.paper}>This is paper 2</Paper>
    </React.Fragment>
  );
};

export default RightPaper;
