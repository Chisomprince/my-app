import React from "react";
import Typography from "@material-ui/core/typography";
import Contact from "../layouts/contact";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  head: {
    paddingTop: 100,
  },
  subhead: {
    paddingTop: 50,
  },
};

function LearnPage(props) {
  const { classes } = props;
  return (
    <div className="learn">
      <Typography align="center" variant="h4" className={classes.head}>
        learn Web development with me
      </Typography>
      <Typography align="center" variant="h5" className={classes.subhead}>
        what you will learn
      </Typography>
      <Typography align="center"> HTML</Typography>
      <Typography align="center"> CSS</Typography>
      <Typography align="center"> JAVASCRIPT</Typography>
      <Typography align="center"> NODE.js</Typography>
      <Contact />
    </div>
  );
}
export default withStyles(styles)(LearnPage);
