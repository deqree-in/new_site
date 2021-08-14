import React from "react";
import whiteLogo from "../../images/whiteLogo.png";
import UploadSetion from "./UploadSection";
import Settings from "./Settings";
// import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { useMediaQuery, Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./index.css";

const Dashboard = () => {
  // const [upload, setUpload] = React.useState(true);
  // const [settings, setSettings] = React.useState(false);
  const [active, setActive] = React.useState("upload");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = React.useState(false);

  const switchSections = () => {
    if (active === "upload") {
      return <UploadSetion />;
    } else if (active === "settings") {
      return <Settings />;
    }
  };

  return (
    <div className="dashboard-wrapper" style={{ margin: isMobile && 0 }}>
      <div
        className="dashboard-header"
        style={{
          width: isMobile && "100%",
          borderRadius: isMobile && 0,
          justifyContent: isMobile && "space-between",
        }}
      >
        <img
          src={whiteLogo}
          alt="deqree"
          style={{ width: isMobile && "200px" }}
        />
        {!isMobile && (
          <>
            <button className="button">bookings</button>
            <button className="button">Controller</button>
            <button className="button">map</button>
            <button className="button">reports</button>
          </>
        )}

        {isMobile && (
          <i
            className="fas fa-bars"
            style={{
              paddingLeft: "30px",
              transform: "scale(0.35)",
              color: "grey",
              cursor: "pointer",
              fontSize: "50px",
            }}
            onClick={() => setOpen(!open)}
          ></i>
        )}
      </div>
      <div className="dashboard-content">
        {!isMobile && (
          <div className="side-panel">
            <div className="dashboard-nav">
              <i
                style={{ color: "#0270D7" }}
                className="fa fa-upload "
                onClick={() => {
                  setActive("upload");
                }}
              ></i>
              <i
                className="fas fa-cogs "
                onClick={() => {
                  setActive("settings");
                }}
              ></i>
            </div>
          </div>
        )}

        <div className="display-area">{switchSections()}</div>
      </div>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(!open)}>
        <List style={{ backgroundColor: "#1c2027", color: "white" }}>
          <ListItem button>
            <ListItemText primary="Upload PDFs" />
          </ListItem>
          <Divider />
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <ListItem button>
              <ListItemText primary="Return Home" />
            </ListItem>
          </a>
          <Divider />
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Controller" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Map" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Dashboard;
