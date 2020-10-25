import React, { useState } from "react";
import { Link } from "react-router-dom";

//mui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Tabs, Tab } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
  title: {
    flex: 1,
    flexGrow: 1,
    fontWeight: 800,
  },
  root: {
    marginRight: 50,
    marginLeft: 50,
  },
  /*  appbar: {
    backgroundColor: "#fff",
  }, */
};
function Header(props) {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const onChange = (e, value) => {
    setValue(value);
  };

  return (
    <div className="container">
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography
                color="inherit"
                align="center"
                className={classes.title}
              >
                Chisom Prince
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Tabs value={value} onChange={onChange}>
                  <Tab label="home" component={Link} to={"/"} />
                  <Tab label="projects" component={Link} to={"/projects"} />
                  <Tab label="about" component={Link} to={"/about"} />
                  <Tab label="learn" component={Link} to={"/learn"} />
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(Header);
