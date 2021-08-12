import React from "react";
import anime from "animejs/lib/anime.es.js";
import { useHistory } from "react-router-dom";
import "./stylesheet.css";

const Signin = () => {
  const history = useHistory();
  React.useEffect(() => {
    var current = null;
    document
      .querySelector("#email-login")
      .addEventListener("focus", function (e) {
        if (current) current.pause();
        current = anime({
          targets: "path",
          strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: "easeOutQuart",
          },
          strokeDasharray: {
            value: "240 1386",
            duration: 700,
            easing: "easeOutQuart",
          },
        });
      });
    document
      .querySelector("#password-login")
      .addEventListener("focus", function (e) {
        if (current) current.pause();
        current = anime({
          targets: "path",
          strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: "easeOutQuart",
          },
          strokeDasharray: {
            value: "240 1386",
            duration: 700,
            easing: "easeOutQuart",
          },
        });
      });
    document
      .querySelector("#submit-login")
      .addEventListener("focus", function (e) {
        if (current) current.pause();
        current = anime({
          targets: "path",
          strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: "easeOutQuart",
          },
          strokeDasharray: {
            value: "530 1386",
            duration: 700,
            easing: "easeOutQuart",
          },
        });
      });
  }, []);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@deqree.in" && pass === "deqree.in") {
      history.push("/dashboard");
    } else {
      setError("Invalid credentials");
      setEmail("");
      setPass("");
    }
  };

  return (
    <div className="page-login">
      <div className="container-login">
        <div className="left-login">
          <div className="login-login">Login</div>
          <div className="eula-login">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="right-login">
          <svg className="svg-login" viewBox="0 0 320 300">
            <defs>
              <linearGradient
                inkscapeCollect="always"
                id="linearGradient-login"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  style={{ stopColor: "#0273da" }}
                  offset="0"
                  id="stop876"
                />
                <stop
                  style={{ stopColor: "#0f89fa" }}
                  offset="1"
                  id="stop878"
                />
              </linearGradient>
            </defs>
            <path
              className="path-login"
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
          </svg>
          <form onSubmit={(e) => handleSubmit(e)} className="form-login">
            <label className="label-login" htmlFor="email-login">
              Email
            </label>
            <input
              className="input-login"
              type="email"
              id="email-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label-login" htmlFor="password-login">
              Password
            </label>
            <input
              className="input-login"
              type="password"
              id="password-login"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              className="input-login"
              type="submit"
              id="submit-login"
              value="Submit"
            />
          </form>
          <span style={{ paddingLeft: "16px", color: "red" }}>{error}</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
