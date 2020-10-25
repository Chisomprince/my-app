import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  card: {
    height: 300,
    backgroundColor: "rgb(43, 54, 117)",

    display: "inline-block",
  },
  content: {
    marginTop: theme.spacing(1),
  },
  text: {
    color: "#fff",
  },
});
const Intro = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4" className={classes.text}>
        Chisom Prince
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Autography
      </Typography>
      <Typography className={classes.text}>
        chisom prince is an enthusiastic software developder eager to contribute
        to team success through dedication to duty, devotion to work and
        attention to details
      </Typography>
    </CardContent>
  </Card>
));
export default Intro;
