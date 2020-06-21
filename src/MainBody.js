import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const MainBody = ({
  excercies,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome !",
    description = "Please Select the Excercise from the list on the left...",
  },
}) => {
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
            {excercies.map(([group, exercises]) =>
              !category || category === group ? (
                <React.Fragment>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItemText
                        primary={title}
                        onClick={() => onSelect(id)}
                      />
                    ))}
                  </List>
                </React.Fragment>
              ) : null
            )}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={style.paper}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h4" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
//overflowY makes list scrollable
export default MainBody;
