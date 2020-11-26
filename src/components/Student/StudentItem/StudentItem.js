import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

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
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageOverlay: {
    filter: "gray",
    webkitFilter: "grayscale(1)",
    filter: "grayscale(1)",
    "&:hover": {
      webkitFilter: "grayscale(0)",
      filter: "none",
    },
  },
}));

const StudentItem = ({ student }) => {
  const classes = useStyles();

  const getFile = (fileName) => {
    return require("../../../images/" + fileName);
  };
  return (
    <Fragment>
      <Link to={`student/${student.name.replace(" ", "")}`}>
        <div className={classes.imageOverlay}>
          <img
            src={getFile(student.studentImage).default}
            className={(classes.mainImage, classes.paper)}
          ></img>
          <p>{student.name}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default StudentItem;
