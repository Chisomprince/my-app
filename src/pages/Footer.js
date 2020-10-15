import React from "react";

import Cards from "../components/card";

//mui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//icon

import Avatar from "@material-ui/core/Avatar";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  text: {
    color: "#fff",
  },
};
function Services(props) {
  const { classes } = props;

  return (
    <div className="footer">
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        spacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            align="center"
            spacing={2}
          >
            <Grid item>
              <Avatar>
                <MailIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <TwitterIcon className={classes.text} />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <LinkedInIcon className={classes.text} />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar>
                <GitHubIcon className={classes.text} />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.text}>
            made with love ❤ copyright © chisom prince 2020
          </Typography>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Services);
