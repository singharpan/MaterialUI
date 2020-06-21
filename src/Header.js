import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Dialogs from "./Dialogs/dialogs";
const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
            Heading
          </Typography>
          <Dialogs />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
