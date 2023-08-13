import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedIn  from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/rahul-maurya-093852171/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/C5603AQH7wB7QQTFpew/profile-displayphoto-shrink_800_800/0/1606676828654?e=1697068800&v=beta&t=UPYbQaz9e1it66QcsSfYT_6i9Bl8hfSffnnBT9Z_Heg"
              alt="Founder"
            />
            <Typography>Rahul Maurya</Typography>
            <Button onClick={visitInstagram} color="primary">
              LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @rahulmaurya. Only with the
              purpose to learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/rahul-maurya-093852171/"
              target="blank"
            >
              <LinkedIn className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/rahul-maurya-093852171/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
