// index.js
import React from "react";
import ReactDOM from "react-dom";
import image from "./images/beach.png";

// const welcome = "Welcome to 30 Days Of React";
// const title = "Getting Started React";
// const subtitle = "JavaScript Library";
const author = {
  firstName: "Shams",
  lastName: "C",
};
// const date = "Oct 2, 2020";

// JSX element, header
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          Student: {props.firstName} {props.lastName}
        </p>
        <small>Date: {props.date}</small>
      </div>
    </header>
  );
};

const numOne = 1;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

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
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li>{tech}</li>);
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
const buttoneStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};

const Button = () => <button style={buttoneStyles}> action </button>;

const HexaColor = () => {
  let str = "0123456788abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
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
        <TechList />
      </ul>
      {result}
      {personAge}
      <UserCard />
      <Button />
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

const copyRight = "Copyright 2020";

// JSX element, footer
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const App = () => (
  <div className="app">
    <Header
      welcome="Welcome to 30 Days Of React"
      title="Getting Started React"
      subtitle="JavaScript Library"
      firstName="Shams"
      lastName="C"
      date="Oct 4, 2020"
    />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
