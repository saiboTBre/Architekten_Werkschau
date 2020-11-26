import React, { Fragment, useState } from "react";

import { useParams } from "react-router-dom";

import { Grid, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import StudentItem from "./StudentItem";
import GridItem from "../GridItem";
import { data } from "../../data";

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

const Student = () => {
  const classes = useStyles();
  let { studentName } = useParams();
  const [student, setStudent] = useState(
    data.filter((student) => student.name.replace(" ", "") === studentName)
  );
  console.log(student, "student");

  return (
    <Fragment>
      <Container>
        <h1>{studentName}</h1>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cnt, index) => (
                <Grid key={index} item md={4}>
                  <GridItem student={student[0]} index={index}></GridItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Student;
