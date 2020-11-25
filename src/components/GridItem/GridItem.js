import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';

import stock1 from '../../images/stock1.jpg';

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
  mainImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  imageOverlay: {
    filter: 'gray',
    webkitFilter: 'grayscale(1)',
    filter: 'grayscale(1)',
    '&:hover': {
      webkitFilter: 'grayscale(0)',
      filter: 'none',
    },
  },
}));

const GridItem = ({ user }) => {
  const classes = useStyles();
  // return <Paper className={classes.paper}></Paper>;
  return (
    <Fragment>
      <div className={classes.imageOverlay}>
        <img src={stock1} className={(classes.mainImage, classes.paper)}></img>
        <p>{user.name}</p>
      </div>
    </Fragment>
  );
};

export default GridItem;