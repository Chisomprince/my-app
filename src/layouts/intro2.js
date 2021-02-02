import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  root: {
    textAlign: "center",
    height: "50vh",
  },
  caption: {
    textTransform: "uppercase",
    fontWeight: 800,
    color: "#fff",
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    color: "#fff",
  },
};

function Intro2(props) {
  const { classes } = props;
  return (
    <div className="intro2">
      <Grid
        container
        className={classes.root}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.caption} variant="h6">
            Have a <span className="colored">project?</span> contact
            <span className="colored"> me </span> !
          </Typography>
          <Typography className={classes.text} variant="body1">
            Am willing to assist in making your idea come to reality, just one
            click away and am there to assist
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
          >
            contact me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Intro2);
