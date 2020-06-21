import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const MainBody = ({ excercies }) => {
  const style = {
    paper: {
      marginTop: 10,
      marginBottom: 10,
      padding: 20,
      height: 300,
      overflowY: "auto",
    },
  };
  console.log(excercies);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs>
          <Paper style={style.paper}>
            {excercies.map(([group, exercises]) => (
              <React.Fragment>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) => (
                    <ListItemText primary={title} />
                  ))}
                </List>
              </React.Fragment>
            ))}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={style.paper}>
            <Typography variant="h5">Welcome !</Typography>
            <Typography variant="h4" style={{ marginTop: 20 }}>
              Please Select the Excercise from the list on the left...
            </Typography>
            <Typography variant="h5">Welcome !</Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
//overflowY makes list scrollable
export default MainBody;
