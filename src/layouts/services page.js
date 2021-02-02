import React from "react";

import Cards from "../components/card";

//mui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import WebIcon from "@material-ui/icons/Web";
import DnsIcon from "@material-ui/icons/Dns";
import StorageIcon from "@material-ui/icons/Storage";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const servicesData = [
  {
    img: "web",
    title: "Front-End",
    description:
      "I make beautiful and resonsive website  observing best practice",
  },
  {
    img: "backend",
    title: "Back End",
    description:
      "build REST api, back-end functionalities, database management using node or python",
  },
  {
    img: "mobile",
    title: "Mobile Development",
    description:
      "I offer elegant and good looking mobile design, using react native",
  },
  {
    img: "datascience",
    title: "Data Science",
    description:
      "am currently learning data science with python hope to work with you once i perfect my skills",
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
  box: {
    margin: 10,
  },
  Cards:{
    flex:1
  }
};
function Services(props) {
  const { classes } = props;
  function getIcon(icon) {
    switch (icon) {
      case "web":
        return <WebIcon color="primary" />;
      case "mobile":
        return <PhoneIphoneIcon color="primary" />;
      case "backend":
        return <DnsIcon color="primary" />;
      case "datascience":
        return <StorageIcon color="primary" />;
      default:
        return "";
    }
  }

  const mapped = servicesData.map((items, index) => (
    <Grid item md={3} key={items.title}>
      <Cards
      className={classes.Cards}
        img={getIcon(items.img)}
        title={items.title}
        description={items.description}
        key={items.title}
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
              what i <span className="colored"> do</span>
            </Typography>
          </Grid>

          <Grid item sm={10} md={8} align="center" className={classes.text}>
            I offer upto data quality and realiable services, abiding by best
            pratices and conventions to ensure your idea comes to reality,
            consistency, quick delivery, effective business - client relation,
            and williness to serve
          </Grid>

          <Grid />
        </Grid>
        <div className="box">
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            justify="center"
          >
            {mapped}
          </Grid>
        </div>
      </Grid>
      <div></div>
    </div>
  );
}

export default withStyles(styles)(Services);
