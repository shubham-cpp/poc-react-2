import { ReactElement } from "react";

import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  para: {
    "& p": {
      margin: 4,
      // color: "orange",
    },
    "& h3": {
      marginTop: theme.spacing(3),
    },
  },
}));

const About = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.para}>
      <Typography variant="h3">History</Typography>
      <Typography variant="body1">
        We launched Learning Curve Public School in 2001 & since then have
        rapidly changed the face of Pre-Primary,Primary and Secondary education
        in the City.
      </Typography>
      <Typography variant="body1">
        Our success as one of the leading education service providers raised the
        expectations of many hopeful parents, who were keen to see their
        children continue to blossom under our guidance.
      </Typography>
      <Typography variant="h3">Vision</Typography>
      <p>
        Learning Curve Public School seeks to provide the best place for a child
        to learn, to grow and to evolve into a balanced and strong individual.
      </p>
      <p>
        The School intends to strive to become a second home for your child. The
        School located Hinjewadi Pune.
      </p>
    </div>
  );
};

export default About;
