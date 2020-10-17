// index.js
import React from "react";
import ReactDOM from "react-dom";
import { AppFunction } from "./App";
import App from "./App";
import image from "./images/beach.png";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};
// JSX element, header
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};
const PersonAge = ({ yearBorn }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBorn;
  return <p> I am {age} years old</p>;
};
// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};
// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} height="200px" width="200px" />
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
);
// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);
// CSS styles in JavaScript Object
const buttonStyle = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};
// HexaColor component
const HexaColor = () => {
  let str = "0123456788abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <small>City: {city}</small>
    </div>
  );
};
// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};

// main component
const Main = ({
  user,
  techs,
  greetPeople,
  handleTime,
  yearBorn,
  countries,
}) => (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <div>
        <h3>Countries List</h3>
        <Countries countries={countries} />
      </div>
      <UserCard user={user} />
      <PersonAge yearBorn={yearBorn} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyle} />
      <Button text="Greet Plople" onClick={greetPeople} style={buttonStyle} />
      <Button
        text="Hi!"
        onClick={() => alert("Well, Hello")}
        style={buttonStyle}
      />
      <strong>
        <p>
          {" "}
          <HexaColor />
        </p>
      </strong>{" "}
    </div>
  </main>
);
// footer component
const Footer = (copyRight) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear}</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Shams",
      lastName: "C",
    },
    date: new Date(),
    // copyRight: "Copyright 2020",
  };

  const yearBorn = 1995;

  const date = new Date();

  const techs = ["HTML", "CSS", "JavaScript"];

  const countries = [
    { name: "Finland", city: "Helsinki" },
    { name: "Sweden", city: "Stockholm" },
    { name: "Denmark", city: "Copenhagen" },
    { name: "Norway", city: "Oslo" },
    { name: "Iceland", city: "Reykjavík" },
  ];

  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: image };

  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        yearBorn={yearBorn}
        countries={countries}
      />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
