import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anindya Dey </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently in 4th year of my college.
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering from <span className="purple">VIT Vellore.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar and Ukulele
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
