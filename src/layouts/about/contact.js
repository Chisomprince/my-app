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
const Contact = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4">Contact</Typography>
      <Typography variant="subtitle1" color="primary">
        get in touch with me
      </Typography>
      <Typography className={classes.content}>
        Email:chisompince@gmail.com
      </Typography>
      <Typography className={classes.content}>
        Twitter: @chisomprince10
      </Typography>
      <Typography className={classes.content}>
        Github: Github.oi/chisomprince
      </Typography>
    </CardContent>
  </Card>
));
export default Contact;
