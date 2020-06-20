import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

const Footer = () => {
  return (
    <React.Fragment>
      <Paper>
        <Tabs
          value={0}
          //   onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    </React.Fragment>
  );
};
//value is what will be selected
//paper is like a panel ...or a blank paper...a blank box
export default Footer;
