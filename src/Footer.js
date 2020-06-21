import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
//category is current selceted category
const Footer = ({ muscles, onSelect, category }) => {
  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index - 1]);

  return (
    <React.Fragment>
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
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
