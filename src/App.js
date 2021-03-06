import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/landingpage";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Resume from "./components/resume";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Jeremy Collins
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/">About Me</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Jeremy Collins
                </Link>
              }
            >
              <Navigation>
                <Link to="/">About Me</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />

              <Switch>
                <Route exact path="/home" component={LandingPage} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Projects} />
                <Route
                  exact
                  path="/p1-death-roll"
                  component={() => {
                    window.open(
                      "https://garves44.github.io/p1-death-roll/",
                      "_blank"
                    );
                    // window.location.href =
                    //   "https://garves44.github.io/p1-death-roll/";
                    return null;
                  }}
                ></Route>
                <Route path="/" component={LandingPage} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
