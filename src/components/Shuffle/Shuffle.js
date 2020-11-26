import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { data } from "../../data";

import { Grid } from "@material-ui/core";

import StudentItem from "../Student/StudentItem";

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

const Shuffle = () => {
  const classes = useStyles();
  let a = data.filter((student, i) => i === 0);
  console.log(a);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const randomStudents = new Set();
  while (randomStudents.size < 6) {
    randomStudents.add(getRandomInt(data.length));
  }
  console.log(randomStudents);

  return (
    <Fragment>
      <h1>Shuffle</h1>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {data
              .filter((student, i) => randomStudents.has(i))
              .map((student, i) => (
                <Grid key={i} item>
                  <StudentItem student={student}></StudentItem>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Shuffle;
