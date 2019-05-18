import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    width: 500,
  },
}));

function Create({ muscles, onExerciseCreate }) {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(false);
  const [exerciseValues, setExerciseValues] = React.useState({
    title: '',
    description: '',
    muscles: '',
  });
  const handleChange = exerciseValue => event => {
    setExerciseValues({
      ...exerciseValues,
      [exerciseValue]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // TODO: Validate
    setShowDialog(!showDialog);
    onExerciseCreate({
      ...exerciseValues,
      id: exerciseValues.title.toLowerCase().replace(/ /g, '-'),
    });
    setExerciseValues({
      title: '',
      description: '',
      muscles: '',
    });
  };

  return (
    <Fragment>
      <Fab
        color="primary"
        size="small"
        onClick={() => setShowDialog(!showDialog)}
      >
        <AddIcon />
      </Fab>
      <Dialog open={showDialog} onClose={() => setShowDialog(!showDialog)}>
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out form below</DialogContentText>
          <form className={classes.root}>
            <TextField
              className={classes.formControl}
              label="Title"
              value={exerciseValues.title}
              onChange={handleChange('title')}
              margin="normal"
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="muscles">Muscle Group</InputLabel>
              <Select
                value={exerciseValues.muscles}
                onChange={handleChange('muscles')}
              >
                {muscles.map(muscle => (
                  <MenuItem
                    style={{ textTransform: 'capitalize' }}
                    key={muscle}
                    value={muscle}
                  >
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              className={classes.formControl}
              label="Description"
              multiline
              rowsMax="4"
              value={exerciseValues.description}
              onChange={handleChange('description')}
              margin="normal"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default Create;
