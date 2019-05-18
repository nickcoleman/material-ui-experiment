import React, { Fragment } from 'react';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: 'auto',
  },
  headline: {
    textTransform: 'capitalize',
  },
};

const Exercise = ({
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise on the left',
  },
  exercises,
  category,
  onDeleteExercise,
  onSelect,
}) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  key={group}
                  variant="headline"
                  style={styles.headline}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDeleteExercise(id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise;
