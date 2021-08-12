import React from "react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";
import { Dialog } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import "./index.css";

const Hero = () => {
  const [modal, setModal] = React.useState(false);
  const [feedback, setFeedback] = React.useState("verifying...");

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
  }, []);

  const fileUploader = React.useRef();

  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(fileUploader.current);
    axios.post("https://deqree.in/verifier", formData).then((response) => {
      setFeedback(JSON.stringify(response.data));
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
                    {/* <button
                      className="button button-primary"
                      type="submit"
                      onClick={() => setModal(!modal)}
                    >
                      Verify
                    </button> */}
                  </form>
                </div>
              </div>
              <div
                className="hero-figure anime-element"
                style={{ marginTop: isMobile ? 0 : "10vh" }}
              >
                <svg
                  className="placeholder"
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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modal}
        onClose={() => setModal(!modal)}
      >
        <span
          style={{
            padding: "16px",
            backgroundColor: "#1c2027",
            color: "white",
            borderRadius: "0px",
            wordWrap: "break-word",
          }}
        >
          {feedback}
        </span>
      </Dialog>
    </div>
  );
};

export default Hero;
