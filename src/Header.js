import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Heading
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
