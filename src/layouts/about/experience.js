import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  card: {
    height: 300,

    backgroundColor: "rgb(43, 54, 117)",
  },
  content: {
    marginTop: theme.spacing(1),
  },
});
const Experience = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4">Background</Typography>
      <Typography variant="subtitle1">additiona infomation</Typography>
      <Typography className={classes.content}>
        language: English (fluent)
      </Typography>
      <Typography className={classes.content}>Nationality: Nigeria</Typography>
      <Typography className={classes.content}>
        Experience: work at upwork.com
      </Typography>
    </CardContent>
  </Card>
));
export default Experience;
