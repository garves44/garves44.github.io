import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/images/jeremy.jpg"
              alt="Jeremy Profile Picture"
              style={{
                borderRadius: "50%",
                overflow: "visible",
                boxShadow:
                  "0 8px 24px 0 rgba(0, 0, 0, 0.5), 0 8px 24px 0 rgba(0, 0, 0, 0.5)",
                height: "300px",
                width: "300px",
                marginTop: "100px",
                border: "solid 3px black",
              }}
            />

            <div className="banner-text">
              <h1>Full Stack Software Engineer</h1>

              <Grid className="skills-grid">
                <Cell className="skill-cell" col={2} offset={1}>
                  <span className="image-wrapper">
                    <img
                      src="/images/icons8-react-120.png"
                      alt="react logo"
                      className="skill-image"
                    />
                  </span>
                  <div>
                    <h4 className="skill-title">Frontend</h4>
                    <p>React, Gatsby, WordPress</p>
                  </div>
                </Cell>
                <Cell className="skill-cell" col={2}>
                  <span className="image-wrapper">
                    <img
                      src="/images/icons8-visual-studio-code-2019-240.png"
                      alt="vscode logo"
                      className="skill-image"
                    />
                  </span>
                  <div>
                    <h4 className="skill-title">Tools</h4>
                    <p>
                      VSCode, Git, Github, DBeaver, Robo 3T, Postman, Insomnia
                    </p>
                  </div>
                </Cell>
                <Cell className="skill-cell" col={2}>
                  <span className="image-wrapper">
                    <img
                      src="/images/leaf.png"
                      alt="leaf"
                      className="skill-image"
                    />
                  </span>
                  <div>
                    <h4 className="skill-title">Databases</h4>
                    <p>MongoDB, MySQL, Firebase, Contentful</p>
                  </div>
                </Cell>
                <Cell className="skill-cell" col={2}>
                  <span className="image-wrapper">
                    <img
                      src="/images/nodejs.png"
                      alt="Node logo"
                      className="skill-image "
                    />
                  </span>
                  <div>
                    <h4 className="skill-title">Backend</h4>
                    <p>Node, ExpressJS, GraphQL, PHP</p>
                  </div>
                </Cell>
                <Cell className="skill-cell" col={2}>
                  <span className="image-wrapper">
                    <img
                      src="/images/servers.png"
                      alt="Node logo"
                      className="skill-image "
                    />
                  </span>
                  <div>
                    <h4 className="skill-title">Servers</h4>
                    <p>
                      Netlify, Heroku, AWS EC2, AWS s3, Digital Ocean, Antsle
                    </p>
                  </div>
                </Cell>
              </Grid>
              <hr />
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jeremycollins44/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/garves44"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.freecodecamp.org/garves"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCHWSg52EeOcRd1n8a8ZKJOg?view_as=subscriber"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
