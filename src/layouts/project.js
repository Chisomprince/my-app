import React from "react";
import bitcoin from "@material-ui/core/Avatar";
import Cards from "../components/card";
import { ExternalLink } from "react-external-link";

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
      "Made a landing page as part of freecodecamp front end design project ",
    action1: "github",
    action2: "Visit",
    link1: "https://chisomprince.github.io",
    link2: "https://github.com/Chisomprince/productpage",
  },
  {
    img: bitcoin,
    title: "Portfolio web",
    description:
      "Portfolio page designed by me, this page provide information about me",
    action1: "github",
    action2: "Visit",
    link1: "https://chisomprince.netlify.app/",
    link2: "https://github.com/Chisomprince/my-app/",
  },
  {
    img: bitcoin,
    title: "Quiz App",
    description:
      "A Quiz app that enables you to create or take quiz created by others",
    action1: "github",
    action2: "Visit",
  },
  {
    img: bitcoin,
    title: "Others",
    description:
      "Still on progress ecommerce site, currently working on the front-end",
    action2: "Visit",
    link1: "https://jumiaclone.vercel.app",
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
    <Grid item key={items.title}>
      <Cards
        title={items.title}
        description={items.description}
        github={
          <Button component={ExternalLink} href={items.link2}>
            {items.action1}
          </Button>
        }
        visit={
          <Button
            variant="contained"
            color="primary"
            component={ExternalLink}
            href={items.link1}
          >
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
              Awesome <span className="colored"> Projects</span>
            </Typography>
          </Grid>

          <Grid item sm={10} md={8} align="center" className={classes.text}>
            Here are some of the projects i have worked on over the days, join
            and make your projects proud. share the testimony and refer others,
            the projects have been designed to resonsive UI, using CSS best
            pratices
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
