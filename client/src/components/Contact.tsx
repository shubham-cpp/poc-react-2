import { ReactElement } from "react";
import { Box, Stack, Typography, Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  gridbox: {
    "& h4": {
      marginBottom: 4,
      color: theme.palette.primary.main,
    },
    "& h6": {
      marginTop: theme.spacing(0.5),
    },
  },
}));

const Contact = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box className={classes.gridbox} sx={{ flexGrow: 1, marginTop: "3vh" }}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={{ xs: 2, sm: 3, md: 5 }}
      >
        <div>
          <Typography variant="h4">Phone</Typography>
          <Typography variant="h6">Pre-Primary School</Typography>
          <Typography variant="subtitle1">+91 95031 41559</Typography>
          <Typography variant="h6">Primary & Secondary School</Typography>
          <Typography variant="subtitle1">+91 95031 41560</Typography>
        </div>
        <div>
          <Typography variant="h4">Email</Typography>
          <Typography variant="h6">Pre-Primary School</Typography>
          <Typography variant="subtitle1">
            kps.preprimary@learningcurve.com
          </Typography>
          <Typography variant="h6">Primary & Secondary School</Typography>
          <Typography variant="subtitle1">
            kps.primarysec@learningcurve.com
          </Typography>
        </div>
        <div>
          <Typography variant="h4">Location</Typography>
          <Typography variant="h6">Near Hotel Lemon Tree, Pune</Typography>
          <Typography variant="h6">Maharashtra</Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default Contact;
