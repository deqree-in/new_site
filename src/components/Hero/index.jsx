/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";
import { Dialog } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./index.css";

const iframeStyles = makeStyles({
  paper: {
    height: "80vh",
  },
});

const veriStyles = makeStyles({
  paper: {
    // width: "20vw",
    // height: "20vh",
    background: "transparent",
    border: "none",
    boxShadow: "none",
    wordWrap: "break-word",
    // padding: "20px",
  },
});

const spinnerStyle = makeStyles({
  colorPrimary: {
    color: "#0270D7",
  },
});

const Hero = () => {
  const iframeClasses = iframeStyles();
  const veriClasses = veriStyles();
  const spinnerClasses = spinnerStyle();
  const [modal, setModal] = React.useState(false);
  const [player, setPlayer] = React.useState(false);
  const [status, setStatus] = React.useState("info");
  const [feedback, setFeedback] = React.useState("verifying...");
  const [link, setLink] = React.useState("");
  // const playButtonref = React.useRef(null);

  React.useEffect(() => {
    var fullAnimation = (function () {
      var bigDarkRectangle = anime
        .timeline({
          targets: ".hero-figure-box-05",
          autoplay: false,
          begin: function (anim) {
            smallDarkRectangles.play();
            colouredRectangles.play();
          },
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: "500px",
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: 1,
        })
        .add({
          duration: 800,
          rotateY: "-15deg",
          rotateX: "8deg",
          rotateZ: "-1deg",
        });

      var smallDarkRectangles = anime
        .timeline({
          targets: ".hero-figure-box-06, .hero-figure-box-07",
          autoplay: false,
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: [0.05, 0.05],
          scaleY: [0, 1],
          perspective: "500px",
        })
        .add({
          duration: 400,
          easing: "easeInOutExpo",
          scaleX: 1,
        })
        .add({
          duration: 800,
          rotateZ: "20deg",
        });

      var colouredRectangles = anime
        .timeline({
          targets:
            ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
          autoplay: false,
        })
        .add({
          duration: anime.random(600, 800),
          delay: anime.random(600, 800),
          rotate: [
            anime.random(-360, 360),
            function (el) {
              return el.getAttribute("data-rotation");
            },
          ],
          scale: [0.7, 1],
          opacity: [0, 1],
          easing: "easeInOutExpo",
        });

      function init() {
        setTimeout(function () {
          bigDarkRectangle.play();
        }, 1000);
      }

      return {
        init: init,
      };
    })();

    // Start on load
    window.onload = function () {
      fullAnimation.init();
    };

    // let button = playButtonref.current;

    // addClass(button, "active");
    // // setTimeout(() => {
    // // removeClass(button, "active");
    // // }, 2500);

    // function addClass(el, className) {
    //   el.className += ` ${className}`;
    // }

    // function removeClass(el, className) {
    // el.className = el.className.replace(className, "");
    // }
  }, []);

  const fileUploader = React.useRef();

  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(fileUploader.current);
    axios.post("https://deqree.in/api/verifier", formData).then((response) => {
      console.log(response.data);
      if (response.data === "False") {
        setFeedback(
          "Some error occured. Please try a different file or try again after sometime"
        );
        setStatus("error");
      }
      if (response.data.True) {
        const text = `
          Your File has been verified successfully.\n
        `;
        setStatus("success");
        setFeedback(text);
        setLink(
          `https://explorer.cardano-testnet.iohkdev.io/en/transaction?id=${response.data.True}`
        );
      }
    });
  };

  return (
    <div className="body-wrap">
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Validate your Credentials</h1>
                <p className="hero-paragraph">
                  India's First Third Generation Blockchain Based Degree
                  Validation Platform
                </p>
                <div
                  className="hero-cta"
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <form ref={fileUploader} onSubmit={(e) => handleSubmit(e)}>
                    <label
                      htmlFor="upload-file"
                      className="button button-primary"
                    >
                      <input
                        className="button upload-btn"
                        type="file"
                        name="file"
                        required
                        id="upload-file"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          handleSubmit(e);
                          setModal(!modal);
                        }}
                      />
                      Verify Certificate
                    </label>
                  </form>
                </div>
              </div>
              <div
                className="hero-figure anime-element"
                style={{
                  marginTop: isMobile ? 0 : "10vh",
                  position: "relative",
                  // border: "1px solid green",
                }}
              >
                {/* <div className="container-playB">
                  <a
                    ref={playButtonref}
                    className="button button-play"
                    onClick={() => setPlayer(!player)}
                  >
                    <svg
                      className="circle-playB"
                      viewBox="0 0 120 120"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="56"
                        strokeWidth="8"
                        stroke="#fff"
                        fill="transparent"
                      ></circle>
                    </svg>
                  </a>
                </div> */}
                <div className="container-playB">
                  <a
                    className="button-playB is-play"
                    onClick={() => setPlayer(!player)}
                  >
                    <div className="button-outer-circle has-scale-animation"></div>
                    <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                    <div className="button-icon is-play">
                      <svg height="100%" width="100%" fill="#0270D7">
                        <polygon
                          className="triangle-playB"
                          points="5,0 30,15 5,30"
                          viewBox="0 0 30 15"
                        ></polygon>
                        <path
                          className="path-playB"
                          d="M5,0 L30,15 L5,30z"
                          fill="none"
                          stroke="#0270D7"
                          strokeWidth="1"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <svg
                  className="placeholder-playB"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                    style={{ fill: "transparent" }}
                  />
                </svg>
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                ></div>
                <div className="hero-figure-box hero-figure-box-05"></div>
                <div className="hero-figure-box hero-figure-box-06"></div>
                <div className="hero-figure-box hero-figure-box-07"></div>
                <div
                  className="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Dialog
        open={modal}
        classes={{ paper: veriClasses.paper }}
        onClose={() => {
          setModal(!modal);
          setFeedback("verifying...");
          setStatus("info");
        }}
      >
        {feedback === "verifying..." ? (
          <CircularProgress
            size={70}
            classes={{ colorPrimary: spinnerClasses.colorPrimary }}
          />
        ) : (
          <Alert
            style={{ wordWrap: "break-word", width: "100%", height: "100%" }}
            severity={status}
            style={{
              wordBreak: "break-word",
            }}
          >
            {feedback}
            {link !== "" && (
              <a target="_blank" href={link}>
                Check on Blockchain
              </a>
            )}
          </Alert>
        )}
      </Dialog>
      <Dialog
        fullWidth
        maxWidth="xl"
        classes={{ paper: iframeClasses.paper }}
        open={player}
        onClose={() => setPlayer(!player)}
      >
        <iframe
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/3d6DsjIBzJ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Dialog>
    </div>
  );
};

export default Hero;
