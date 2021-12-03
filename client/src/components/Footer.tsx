import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Learning Curve Public School {"  "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = (): ReactElement => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
        gutterBottom
      >
        <span>
          <AiFillFacebook />{" "}
        </span>
        <span>
          <AiFillInstagram />{" "}
        </span>
        <span>
          <AiFillTwitterSquare />{" "}
        </span>
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
