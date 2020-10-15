import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  card: {
    height: 300,
  },
  content: {
    marginTop: theme.spacing(1),
  },
});
const Education = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4">Education</Typography>
      <Typography variant="subtitle1">university</Typography>
      <Typography className={classes.content}>
        University of Nigeria Nsukka{" "}
        <span className="eduDate">sep 2016 - till date </span>
      </Typography>
      <Typography className={classes.content}>banking and finance</Typography>
    </CardContent>
  </Card>
));
export default Education;
