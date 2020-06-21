import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

const Footer = ({ muscles }) => {
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
          {muscles.map((group) => (
            <Tab label={group} />
          ))}
        </Tabs>
      </Paper>
    </React.Fragment>
  );
};
//value is what will be selected
//paper is like a panel ...or a blank paper...a blank box
export default Footer;
