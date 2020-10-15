import React from "react";
import { Link } from "react-router-dom";

//mui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
  title: {
    flex: 1,
    flexGrow: 1,
  },
  root: {
    marginRight: 50,
    marginLeft: 50,
  },
};
function Header(props) {
  const { classes } = props;

  return (
    <div className="container">
      <AppBar color="#fff" position="fixed">
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
                variant="headline"
                align="center"
                className={classes.title}
              >
                chisom <span className="colored">prince</span>
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Tabs>
                  <Tab label="home" component={Link} to={"/"} />
                  <Tab label="projects" component={Link} to={"/projects"} />
                  <Tab label="about" component={Link} to={"/about"} />
                  <Tab label="learn" />
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
