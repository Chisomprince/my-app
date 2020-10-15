import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styleSheet = {
  list: {
    width: 200,
  },
};
function ResAppBar(props) {
  const { classes } = props;

  const [drawer, setdrawer] = useState(false);

  return (
    <div>
      <AppBar color="#fff" position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item sm={3}>
              <MenuIcon
                className={classes.sideBarIcon}
                onClick={() => {
                  setdrawer({ drawer: true });
                }}
              />
            </Grid>
            <Grid item sm={3} align="center">
              <Typography color="inherit" variant="headline" align="center">
                prince<span className="colored"> chisom </span>
              </Typography>
            </Grid>

            <Grid item sm={3}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={drawer}
        onClose={() => {
          setdrawer(false);
        }}
        onOpen={() => {
          setdrawer(true);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setdrawer(false);
          }}
          onKeyDown={() => {
            setdrawer(false);
          }}
        >
          <List className={classes.list}>
            <ListItem key={1} component={Link} to="/">
              home
            </ListItem>
            <ListItem key={2} component={Link} to="/projects">
              projects
            </ListItem>

            <ListItem key={3} component={Link} to="/about">
              about
            </ListItem>
            <ListItem key={4} /* component={Link} to="/faq" */>learn</ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

ResAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(ResAppBar);
