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
            <h6 className="m-0">Home</h6>
            <h6 className="m-0">Gallery</h6>
            <h6 className="m-0">Projects</h6>
            <h6 className="m-0">About Us</h6>
            <h6 className="m-0">Contact</h6>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Navbar;
