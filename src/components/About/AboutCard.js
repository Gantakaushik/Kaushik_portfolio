import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ganta Kaushik </span>
            from <span className="purple"> Ongole, Andhra Pradesh India.</span>
            <br /> I am About to complete my degree in{" "}
            <span className="purple"> Computer Apllications </span> from KL
            University {" "}
            <span className="purple">
              {" "}
              Hyderabad{" "}
            </span>{" "}
            with
            <span className="purple"> 9.4 CGPA. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football and Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ganta Kaushik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
