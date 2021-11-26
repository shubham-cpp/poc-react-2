import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Theme,
} from "@mui/material";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
            >
              <span className="material-icons">list</span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/admission">Admission</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
