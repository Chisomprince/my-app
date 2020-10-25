import React from "react";

import Intro from "./intro";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";
import Experience from "./experience";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "../../images/image.jpg";

function Index() {
  return (
    <div className="about">
      <Grid>
        <Typography align="center" variant="h4">
          <span className="colored"> ABOUT ME</span>
        </Typography>
        <img src={Image} alt="chisom" width="250px" className="image" />
      </Grid>
      <Grid container>
        <Grid item sm={1} md={2} />

        {/* items */}

        <Grid item md={8}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={7}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Intro />
                </Grid>
                <Grid item>
                  <Education />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Skills />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
              <Contact />
            </Grid>
            <Grid item sm={12} md={7}>
              <Experience />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1} md={2} />
      </Grid>
    </div>
  );
}

export default Index;
