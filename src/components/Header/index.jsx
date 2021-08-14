/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { useMediaQuery, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";
import StarsIcon from "@material-ui/icons/Stars";
import Popover from "@material-ui/core/Popover";
import logo from "../../images/whiteLogo.png";
import "./styles.css";

const popoverStyles = makeStyles({
  paper: {
    backgroundColor: "#1c2027",
  },
});

const Header = () => {
  const popClasses = popoverStyles();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = React.useState(false);
  const [popover, setPopover] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const scrollToSection = (elementClass) => {
    scroller.scrollTo(elementClass, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1
              className="m-0"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span className="header-phn">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img
                    className="header-logo-image"
                    width="250"
                    style={{
                      //  border: "1px solid green",
                      marginLeft: "-30px",
                    }}
                    src={logo}
                    alt="Logo"
                  />
                </Link>
                {!isMobile && (
                  <div className="navs">
                    <Link to="/signin" className="navlinks">
                      Sign in
                    </Link>
                    <a
                      className="navlinks"
                      target="_blank"
                      href="https://drive.google.com/file/d/13yXEp9yfZ6JPAvVwiCjxkCl10iSQDk1w/view"
                      style={{ textDecoration: "none" }}
                    >
                      White Paper
                    </a>
                    <i
                      className="fas fa-bars"
                      style={{
                        transform: "scale(0.35)",
                        color: "grey",
                        cursor: "pointer",
                        alignSelf: "center",
                        justifySelf: "center",
                      }}
                      onClick={(e) => {
                        setPopover(!popover);
                        setAnchorEl(e.currentTarget);
                      }}
                    ></i>
                    <Popover
                      classes={{
                        paper: popClasses.paper,
                      }}
                      open={popover}
                      anchorEl={anchorEl}
                      onClose={() => {
                        setPopover(!popover);
                        setAnchorEl(null);
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <List
                        style={{ backgroundColor: "#1c2027", color: "white" }}
                      >
                        <ListItem button onClick={() => scrollToSection("deq")}>
                          <ListItemText primary="Why deqree" />
                        </ListItem>
                        <Divider />
                        <Divider />
                        <ListItem
                          button
                          onClick={() => scrollToSection("roadmap")}
                        >
                          <ListItemText primary="Roadmap" />
                        </ListItem>
                        <ListItem
                          button
                          onClick={() => scrollToSection("about-wrapper")}
                        >
                          <ListItemText primary="About us" />
                        </ListItem>
                        <Divider />
                        <ListItem
                          button
                          onClick={() => scrollToSection("contact-wrapper")}
                        >
                          <ListItemText primary="Contact us" />
                        </ListItem>
                      </List>
                    </Popover>
                    {/* <a
                      href="#"
                      onClick={() => {
                        scroller.scrollTo("deq", {
                          duration: 800,
                          delay: 0,
                          smooth: "easeInOutQuart",
                        });
                      }}
                      className="navlinks"
                    >
                      Why deqree
                    </a>
                    <a
                      href="#about"
                      className="navlinks"
                      onClick={() => {
                        scroller.scrollTo("about-wrapper", {
                          duration: 800,
                          delay: 0,
                          smooth: "easeInOutQuart",
                        });
                      }}
                    >
                      About us
                    </a>
                    <a
                      href="#contact-us"
                      className="navlinks"
                      onClick={() => {
                        scroller.scrollTo("contact-wrapper", {
                          duration: 800,
                          delay: 0,
                          smooth: "easeInOutQuart",
                        });
                      }}
                    >
                      Contact us
                    </a> */}
                  </div>
                )}

                {isMobile && (
                  <i
                    className="fas fa-bars"
                    style={{
                      paddingLeft: "30px",
                      transform: "scale(0.35)",
                      color: "grey",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(!open)}
                  ></i>
                )}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(!open)}>
        <List style={{ backgroundColor: "#1c2027", color: "white" }}>
          <ListItem button onClick={() => scrollToSection("deq")}>
            <ListItemIcon>
              <StarsIcon style={{ color: "#0270D7" }} />
            </ListItemIcon>
            <ListItemText primary="Why deqree" />
          </ListItem>
          <Divider />
          <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>
            <ListItem button>
              <ListItemIcon>
                <LockOpenIcon style={{ color: "#0270D7" }} />
              </ListItemIcon>
              <ListItemText primary="Sign in" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button onClick={() => scrollToSection("about-wrapper")}>
            <ListItemIcon>
              <InfoIcon style={{ color: "#0270D7" }} />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => scrollToSection("contact-wrapper")}>
            <ListItemIcon>
              <EmailIcon style={{ color: "#0270D7" }} />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
};

export default Header;
