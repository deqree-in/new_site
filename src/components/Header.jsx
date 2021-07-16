import { AppBar, Toolbar, ButtonGroup, Button } from "@material-ui/core";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "black" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="deqree.in" height="120" />
        <span
          className="nav"
          style={{
            // width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span className="links" style={{ justifySelf: "flex-end" }}>
            <Button variant="text" style={{ color: "white" }}>
              About
            </Button>
            <Button variant="text" style={{ color: "white" }}>
              Contact
            </Button>
          </span>
          <ButtonGroup variant="contained">
            <Button style={{ backgroundColor: "white" }}>Log in</Button>
            <Button style={{ backgroundColor: "white" }}>Sign up</Button>
          </ButtonGroup>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
