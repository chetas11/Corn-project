import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  
  return (
    <div>
      <div>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#eeeeee", color: "blanchedalmond" }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}></Typography>
            <a className="m-0">Home</a>
            <a className="m-0">Gallery</a>
            <a className="m-0">Projects</a>
            <a className="m-0">About Us</a>
            <a className="m-0">Contact</a>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Navbar;
