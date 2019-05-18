import React, { Fragment } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';

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
