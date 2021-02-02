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
  text: {
    color:'#fff',
  },
});
const Experience = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4" className={classes.text}>Background</Typography>
      <Typography variant="subtitle1" className={classes.text}>additiona infomation</Typography>
      <Typography className={classes.text}>
        language: English (fluent)
      </Typography>
      <Typography className={classes.text}>Nationality: Nigeria</Typography>
      <Typography className={classes.text}>
        Experience: work at upwork.com
      </Typography>
    </CardContent>
  </Card>
));
export default Experience;
