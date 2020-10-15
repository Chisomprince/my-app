import React from "react";
import bitcoin from "@material-ui/core/Avatar";
import Cards from "../components/card";

//mui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const servicesData = [
  {
    img: bitcoin,
    title: "Product Landing Page",
    description:
      "made a landing page as a requirement of freecodecamp front end design project",
    action1: "github",
    action2: "Visit",
  },
  {
    img: bitcoin,
    title: "Portfolio web",
    description:
      "portfolio page designed by me, this page provide infromation about me",
    action1: "github",
    action2: "Visit",
  },
  {
    img: bitcoin,
    title: "Quiz App",
    description:
      "a Quiz ap that eables you to create or take quiz created by others",
    action1: "github",
    action2: "Visit",
  },
  {
    img: bitcoin,
    title: "Others",
    description:
      "i would love to share all my projects with you but some are still under development,follow me on socials to get update when the arrives",
    action2: "follow",
  },
];
const styles = {
  header: {
    fontWeight: 800,
    textTransform: "uppercase",

    marginTop: 50,
  },
  head: {
    fontWeight: 800,
    textTransform: "uppercase",
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
  },
};
function Services(props) {
  const { classes } = props;
  const mapped = servicesData.map((items, index) => (
    <Grid item>
      <Cards
        title={items.title}
        description={items.description}
        github={<Button>{items.action1}</Button>}
        visit={
          <Button variant="contained" color="primary">
            {items.action2}
          </Button>
        }
      />
    </Grid>
  ));

  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.grid}
      >
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid>
            <Typography className={classes.header} variant="h6">
              awesome <span className="colored"> projects</span>
            </Typography>
          </Grid>

          <Grid
            item
            sm={10}
            md={8}
            align="center"
            justify="center"
            className={classes.text}
          >
            here are some of the projects i have don over the days, join and
            make your projects proud. share the testimony and come again, the
            projects have been designed to beatiful UI, using CSS best pratices
          </Grid>

          <Grid />
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          direction="row"
          justify="center"
        >
          {mapped}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Services);
