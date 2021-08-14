import React from "react";
import { useMediaQuery } from "@material-ui/core";
import "./index.css";

const Roadmap = () => {
  const greaterThan992px = useMediaQuery("(min-width: 992px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <section
      className="roadmap"
      id="roadmap"
      style={{
        marginTop: isMobile ? "70vh" : 0,
        marginBottom: isMobile ? "20vh" : 0,
      }}
    >
      <div className="transition-gradient-after adjust-top"></div>
      <div className="container">
        <div className="dots-vert"></div>
        <div className="section-heading text-center">
          <h2 i18n="ROADMAP">Roadmap 2021</h2>
          <h3 i18n="CHECK THE PROJECT MILESTONES">Check Project Milestones</h3>
          <hr width="100px"></hr>
        </div>
        <div className="row clearfix">
          <div className="col-lg-10">
            <div
              className="container-fluid"
              style={{
                // width: "58vw",
                // paddingLeft: "18%",
                marginLeft: greaterThan992px ? "18%" : 0,
              }}
            >
              <div className="row clearfix left">
                <div className="col-lg-4 box left first reveal">
                  <div className="dots pull-right"></div>
                  <span className=" green">Early Quarter 3</span>
                  <br />
                  <div className="milestones vertical-line right">
                    <span className="text-right">White Paper</span>
                    <br />
                    <span className="text-right">Testnet Launch</span>
                    <br />
                    <span className="text-right">Brand Awareness Campaign</span>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="lines first">
                    <div className="roadmap-line active"></div>
                    <div className="roadmap-line"></div>
                  </div>
                </div>
                <div className="col-lg-4 box right first reveal">
                  <div className="dots pull-left"></div>
                  <span className="heading green">Quarter 3</span>
                  <br />
                  <div className="milestones vertical-line left">
                    <span className="text-right">Apply for Fund 6</span>
                    <br />
                    <span className="text-right">Secure Funding</span>
                  </div>
                </div>
              </div>
              <div className="row clearfix left">
                <div className="col-lg-4 box left second reveal">
                  <div className="dots pull-right"></div>
                  <span className="heading green">Quarter 4</span>
                  <div className="milestones vertical-line right">
                    <span className="text-right">Mainnet Launch</span>
                    <br />
                    <span className="text-right">Native Token Launch</span>
                    <br />
                    <span className="text-right">
                      Smart Contract Deployment
                    </span>
                    <br />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="lines second">
                    <div className="roadmap-line"></div>
                    {/* <div className="roadmap-line"></div> */}
                  </div>
                </div>
                {/* <div className="col-lg-4 box right second reveal"> */}
                {/* <div className="dots pull-left"></div> */}
                {/* <span className="heading green">PHASE 4</span>
                  <div className="milestones vertical-line left">
                    <span className="text-right">Some event 1</span>
                    <br />
                    <span className="text-right">Some event 2</span>
                    <br />
                    <span className="text-right">Some event 3</span>
                    <br />
                  </div> */}
                {/* </div> */}
              </div>
              {/* <div className="row clearfix left">
                <div className="col-lg-4 box left third reveal">
                  <div className="dots pull-right"></div>
                  <span className="heading green">PHASE 5</span>
                  <div className="milestones vertical-line right">
                    <span className="text-right">Some event 1</span>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="lines third">
                    <div className="roadmap-line"></div>
                    <div className="roadmap-line"></div>
                  </div>
                </div>
                <div
                  className="col-lg-4 box right third reveal"
                  style={{ backgroundColor: "rgba(224, 226, 231, 0.2)" }}
                >
                  <div className="dots pull-left"></div>
                  <span className="heading green">PHASE 6</span>
                  <br />
                  <div className="milestones vertical-line left">
                    <span className="text-right">To be revealed</span>
                    <br />
                  </div>
                </div>
              </div> */}
              {/* <div className="row clearfix left">
                <div
                  className="col-lg-4 box left fourth reveal"
                  style={{ backgroundColor: "rgba(224, 226, 231, 0.2)" }}
                >
                  <div className="dots pull-right"></div>
                  <span className="heading green">PHASE 7</span>
                  <div className="milestones vertical-line right">
                    <span className="text-right">To be revealed</span>
                    <br />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="lines fourth">
                    <div className="roadmap-line"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
