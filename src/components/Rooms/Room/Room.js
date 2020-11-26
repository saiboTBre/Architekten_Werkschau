import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import GridItem from "../../GridItem";
import StudentItem from "../../Student/StudentItem";

import { makeStyles } from "@material-ui/core/styles";
import { data } from "../../../data";

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
  let { roomname } = useParams();

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {data
              .filter((student) => student.semester === roomname)
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

export default Room;
