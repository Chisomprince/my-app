import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  card: {
    height: 615,

    padding: 0,
    backgroundColor: "rgb(43, 54, 117)",
  },
  content: {
    marginTop: theme.spacing(1),
  },
  each: {
    marginTop: 10,
  },
  group: {
    margin: 20,
  },
  text: {
    color: "#fff",
  },

  Title: {
    marginTop: 30,
    marginBottom: 15,
    color: "#fff",
  },
});

const frontendData = [
  { title: "html", level: 90 },
  {
    title: "css",
    level: 70,
  },
  {
    title: "javascript",
    level: 70,
  },
  {
    title: "react",
    level: 70,
  },
];

const backendData = [
  { title: "Node", level: 60 },
  {
    title: "Express",
    level: 70,
  },
  {
    title: "Mongo db",
    level: 70,
  },
  {
    title: "Firebase",
    level: 80,
  },
  {
    title: "python",
    level: 50,
  },
];
const level = (value) => value - (0 * 100) / 100 - 0;

function Intro(props) {
  const { classes } = props;
  const frontend = frontendData.map((items) => {
    return (
      <Grid
        container
        direction="column"
        className={classes.each}
        key={items.title}
      >
        <Grid item sm={12} md={12}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography className={classes.text}>{items.title}</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>{items.level}%</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={12}>
          <LinearProgress variant="determinate" value={level(items.level)} />
        </Grid>
      </Grid>
    );
  });

  const backend = backendData.map((items) => {
    return (
      <Grid
        container
        direction="column"
        className={classes.each}
        key={items.title}
      >
        <Grid item>
          <Grid container justify="space-between">
            <Grid item>
              <Typography className={classes.text}>{items.title}</Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography className={classes.text}> {items.level}%</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <LinearProgress variant="determinate" value={level(items.level)} />
        </Grid>
      </Grid>
    );
  });
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" className={classes.text}>
          Skills
        </Typography>
        <Typography variant="subtitle1" className={classes.Title}>
          Frontend skills
        </Typography>

        {/* html */}
        <Grid container direction="column">
          <Grid item>{frontend}</Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.Title}>
              Backend skills
            </Typography>
            {backend}
          </Grid>
        </Grid>

        {/* backend
      node
      */}
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Intro);
