import React from "react";
import { people } from "./data";
import "./App.css";

/*About Page Content*/
const About = () => (
  <main>
    <h1>About Us</h1>
    <ul>
      {people.map((person) => (
        <li>
          <Person {...person} />
        </li>
      ))}
    </ul>
  </main>
);

/*Employee Information*/
const Person = ({ name, position, email, about, img }) => (
  <div class="person">
    <h2>
      {name} - {position}
    </h2>
    <div class="person-info">
      <img
        src={`..${process.env.PUBLIC_URL}/img/${img}`}
        alt={name}
        id="ImgInfoStyle"
      />
      <div class="person-details">
        <div class="person-description">{about}</div>
        <address>
          <a href={`mailto:${email}`}>{email}</a>
        </address>
      </div>
    </div>
  </div>
);

export default About;
