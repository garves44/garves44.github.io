import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ContactForm from "./contactform";

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
              style={{ height: "250px", borderRadius: "50%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello, welcome to my portfolio website! I'm a professional
              software engineer with a lot of passion to code and improve my own
              personal skills. I'm going to learn as much as I can in the coding
              world and move into a job utilizing the skills I obtain. I love
              creating new apps, and staying up to speed with today’s market. I
              want to always produce the best code, so I can take pride in what
              I do. I am constantly learning new ways to code and getting new
              ideas on projects I want to do someday. Feel free to contact me!
            </p>
          </Cell>
          <Cell col={6}>
            <ContactForm></ContactForm>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
