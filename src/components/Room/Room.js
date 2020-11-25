import react, { Fragment, useContext } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../GridItem';

import { data } from '../../data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Room = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={1}>
            {data.map((user, i) => (
              <Grid key={i} item>
                <GridItem user={user}></GridItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Room;
