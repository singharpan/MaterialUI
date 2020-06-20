import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
          <Typography variant="h6" color="inherit">
            Heading
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
