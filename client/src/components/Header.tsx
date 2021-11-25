import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  navlinks: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navBtn: {
    color: "white",
    display: "inline",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <div className={classes.navlinks}>
            <Button color="inherit">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about">About US</Link>
            </Button>
            <Button color="inherit">
              <Link to="/admission">Admission</Link>
            </Button>
          </div>
          <div className={classes.navBtn}>
            <Button color="inherit">
              <span className="material-icons">list</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
