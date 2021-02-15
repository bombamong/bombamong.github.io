import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Button,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Inbox, Mail, Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

const DrawerNav = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          to="/"
        >
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        <Link
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          to="/blog"
        >
          <ListItem button key={"Blog"}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={"Blog"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const anchor = "left";
  return (
    <div
      style={{
        zIndex: 1,
        position: "sticky",
        top: 0,
        boxShadow: "0 1px 5px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 7px )",
        WebkitBackdropFilter: "blur(7px)",
        backgroundColor: "rgba( 243, 243, 243, 0.25 )",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
        // borderRadius: "10px",
      }}
    >
      <React.Fragment key={anchor}>
        <IconButton
          onClick={toggleDrawer(anchor, true)}
          color="primary"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    // backgroundColor: "transparent",
    margin: theme.spacing(1),

    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  },
}));

export default DrawerNav;
