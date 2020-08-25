import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jeremy Collins</h2>
            <img
              src="../images/jeremy.jpg"
              alt="profile picture"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello, welcome to my portfolio website! I'm a student web
              developer with a lot of passion to code and improve my own
              personal skills. Hoping to learn as much as I can from this course
              and move into a job utilizing the skills I obtain. I’ve been
              exposed to developing in html/css/php/javascript/etc from friends
              and family who work in the industry. I’ve messed around with a
              personal site and some scripts for my personal use here and there.
              I’m excited to learn full stack developing, and stay up to speed
              with today’s market. I want to always produce the best code, so I
              can take pride in what I do. I am constantly learning new ways to
              code and getting new ideas on projects I want to do someday.
              Hopefully someday I can do some work for you! :)
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (801) 735-9624
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    Jeremy C Collins
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    garves44@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                    https://github.com/garves44/
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
