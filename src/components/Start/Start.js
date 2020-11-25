import React, { Fragment } from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import stock1 from '../../images/stock1.jpg';
import { data } from '../../data';

const useStyles = makeStyles({
  mainImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  centerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '800px',
  },
});

const Start = () => {
  const classes = useStyles();
  console.log(data);
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={12} xs={12}>
            <div className={classes.centerImage}>
              <img className={classes.mainImage} src={stock1} alt='' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Start;
