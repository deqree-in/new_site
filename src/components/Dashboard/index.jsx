import React from "react";
import whiteLogo from "../../images/whiteLogo.png";
import UploadSetion from "./UploadSection";
import Settings from "./Settings";
import "./index.css";

const Dashboard = () => {
  // const [upload, setUpload] = React.useState(true);
  // const [settings, setSettings] = React.useState(false);
  const [active, setActive] = React.useState("upload");

  const switchSections = () => {
    if (active === "upload") {
      return <UploadSetion />;
    } else if (active === "settings") {
      return <Settings />;
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <img src={whiteLogo} alt="deqree" />
        <button className="button">bookings</button>
        <button className="button">Controller</button>
        <button className="button">map</button>
        <button className="button">reports</button>
      </div>
      <div className="dashboard-content">
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
        <div className="display-area">{switchSections()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
