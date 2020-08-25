import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jeremy-collins-209545194/"
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
                  href="https://www.freecodecamp.org/garves"
                  rel="noopener noreferrer"
                  target="_blank"
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
