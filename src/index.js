// index.js
import React from "react";
import ReactDOM from "react-dom";
import image from "./images/beach.png";

const author = {
  firstName: "Shams",
  lastName: "C",
};

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
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          Student: {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>Date: {showDate(props.data.date)}</small>
      </div>
    </header>
  );
};

const yearBorn = 1995;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} is {age} years old
  </p>
);

// JSX element, main
const TechList = (props) => {
  // const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = props.techs.map((tech) => <li>{tech}</li>);
  return techsFormatted;
};

const UserCard = () => (
  <div className="user-card">
    <img src={image} alt="beach" height="200px" width="200px" />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
);

const Button = (props) => (
  <button className="button-styles" onClick={props.onClick}>
    {" "}
    {props.text}{" "}
  </button>
);

const HexaColor = () => {
  let str = "0123456788abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const greetPeople = () => {
  alert("Welcome to 30 Days Of React Challenge, 2020");
};

const handletime = () => {
  alert(showDate(new Date()));
};
const Main = () => (
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
        <TechList techs={["HTML", "CSS", "JavaScript"]} />
      </ul>
      {/* {result} */}
      {personAge}
      <UserCard />
      <Button text="Show time" onClick={handletime} />
      <br />
      <Button text="Greet Plople" onClick={greetPeople} />
      <br />
      <Button text="Hi!" onClick={() => alert("Well, Hello")} />
      <br />
      <strong>
        <p>
          <HexaColor />
        </p>
        <p>
          <HexaColor />
        </p>
        <p>
          <HexaColor />
        </p>
        <p>
          <HexaColor />
        </p>
      </strong>
    </div>
  </main>
);

// JSX element, footer
const Footer = (props) => (
  <footer>
    <div className="footer-wrapper">
      <p>{props.data.copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: { firstName: "Shams", lastName: "C" },
    date: new Date(),
    copyRight: "Copyright 2020",
  };
  return (
    <div className="app">
      <Header data={data} />
      <Main />
      <Footer data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
