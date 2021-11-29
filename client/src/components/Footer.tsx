import { ReactElement } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    // borderTop: "2px solid burlywood",
    position: "absolute",
    bottom: 5,
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  socials: {
    // borderTop: "2px solid burlywood",
    position: "absolute",
    bottom: 5,
    right: 0,
    fontSize: theme.spacing(2.5),
    marginLeft: theme.spacing(2),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      bottom: 0,
      borderTop: "none",
    },
    "& span": {
      padding: theme.spacing(1),
      "&:hover": {
        fontSize: theme.spacing(3),
        background: "linear-gradient(to right,#f12711,#f5af19)",
      },
    },
  },
}));

const Footer = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        Copyright &copy; 2020 Learning Curve Public School
      </footer>
      <div className={classes.socials}>
        <span>
          <AiFillFacebook />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <AiFillTwitterSquare />
        </span>
      </div>
    </>
  );
};

export default Footer;
