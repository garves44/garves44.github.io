import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/home"
                >
                  Jeremy Collins
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/home"
                >
                  Jeremy Collins
                </Link>
              }
            >
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />

              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={LandingPage} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
