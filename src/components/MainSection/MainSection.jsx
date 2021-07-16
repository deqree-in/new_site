import React from "react";
import { TextField, Button } from "@material-ui/core";
import { World } from "../World";
import "./MainSection.css";

const MainSection = () => {
  const myRef = React.useRef();

  React.useEffect(() => {
    const canvas = myRef.current;
    const scene = new World(canvas);
    scene.start();
  }, [myRef]);

  return (
    <div className="main-section" ref={myRef}>
      <div className="text">
        <span className="main">Deqree</span>
        <span className="tagline">
          India's First Third Generation Blockchain Based Degree Validation
          Platform
        </span>
        <TextField className="search" variant="outlined" label="Search" />
        <span>
          <Button variant="contained" style={{ backgroundColor: "white" }}>
            Get Started
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "20px",
            }}
          >
            White Paper
          </Button>
        </span>
      </div>
    </div>
  );
};

export default MainSection;
