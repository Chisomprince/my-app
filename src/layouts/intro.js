import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  root: {
    textAlign: "center",
  },
  caption: {
    textTransform: "uppercase",
    fontWeight: 800,
    color: "#fff",
  },
  head: {
    textTransform: "uppercase",
    fontWeight: 800,
    marginTop: 20,
    marginBottom: 20,
    color: "#fff",
  },
};

function Intro(props) {
  const { classes } = props;
  return (
    <div className="intro">
      <Grid
        container
        className={classes.root}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.caption} variant="body1">
            Fullstake developer
          </Typography>
          <Typography className={classes.head} variant="h4">
            transforming ideas to<span className="colored"> reality</span>
          </Typography>
          <Button variant="outlined" color="primary">
            chisom prince
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Intro);
