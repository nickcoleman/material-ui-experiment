import React from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';

function Footer({ category, muscles, onSelect }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelected = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelected}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" key="All" />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default Footer;
