import React from "react";
import logo from "../../images/whiteLogo.png";
import { Search } from "@material-ui/icons";
import { World } from "../World";
import "./index.css";

const MainSection = () => {
  const scene = React.useRef();
  React.useEffect(() => {
    const canvas = scene.current;
    const globe = new World(canvas);
    globe.start();
  }, [scene]);
  return (
    <div className="wrapper">
      <div className="main-section">
        <div className="nav">
          <img
            src={logo}
            alt="deqree"
            width="350"
            style={{ marginLeft: "-45px" }}
          />
          <span className="signin">Sign in</span>
        </div>
        <div className="tagline1">
          India's First Third Generation <br />
          Blockchain Based Degree Validation Platform
        </div>
        <div className="tagline2">Verify your credentials with one click</div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Enter your unique id"
            className="search"
          />
          <button style={{ padding: "10px", marginLeft: "-10px", zIndex: "0" }}>
            <Search />
          </button>
          {/* <TextField
            style={{
              width: "100%",
              // backgroundColor: "white",
              borderRadius: "5px",
            }}
            variant="filled"
            label="Enter your unique ID"
          />
          <Button variant="contained" startIcon={<Search />} /> */}
          {/* <TextField
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          /> */}
        </div>
      </div>
      <div ref={scene} className="scene"></div>
    </div>
  );
};

export default MainSection;
