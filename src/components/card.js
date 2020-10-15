import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  card: {
    maxWidth: 400,
    padding: 10,
  },
  img: {
    margin: "auto",
  },
  actions: {
    justifyContent: "flex-end",
  },
});
function Cards(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.card}></div>
      {props.img}
      <CardHeader title={props.title} />
      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions disableActionSpacing className={classes.actions}>
        {props.github}
        {props.visit}
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Cards);
