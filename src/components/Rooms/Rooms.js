import react, { Fragment, useContext } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import RoomItem from "./RoomItem";

import { data, rooms } from "../../data";

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

const Rooms = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {rooms.map((room, i) => (
              <Grid key={i} item>
                <p>{room}</p>
                <RoomItem room={room}></RoomItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Rooms;
