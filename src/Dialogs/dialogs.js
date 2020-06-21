import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Dialogs = () => {
  const [a, b] = useState(false);

  const handleClose = () => {
    b(false);
  };
  const handleClickOpen = () => {
    b(true);
  };
  return (
    <React.Fragment>
      <Fab
        color="secondary"
        size="medium"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={a}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create A new Excercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please Fill out below form:</DialogContentText>
          <form></form>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Dialogs;
