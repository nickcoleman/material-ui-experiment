import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import CreateDialog from '../Exercises/Dialogs/Create';

function Header({ muscles, onExerciseCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Exercise Database
        </Typography>
        <CreateDialog muscles={muscles} onExerciseCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
