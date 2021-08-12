import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import PhoneSection from "./components/PhoneSection";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section
        title="Why Deqree"
        subtitle="The future is digital. We are ensuring your credentials stay secure."
        points={[
          "Rapid Onboarding process",
          "Streamlined authorization mechanism",
          "Instant validation",
          "Built on third generation Blockchain",
          "Supports Smart Contracts",
          "Secured by Cardano",
        ]}
      />
      <PhoneSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
