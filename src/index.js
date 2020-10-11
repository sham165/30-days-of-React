import React from "react";
import ReactDOM from "react-dom";

// const jsxElement = <h1> This is a JSX element</h1>;
// const title = <h2>Getting Started with React</h2>;

const headerStyle = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

const header = (
  <header style={headerStyle}>
    <div className="header-wrapper">
      <h1>Welcome to 30 days of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Shams C</p>
      <small>Oct 11th 2020</small>
    </div>
  </header>
);

const mainStyles = {
  backgroundColor: "#F3F0F5",
};
const main = (
  <main style={mainStyles}>
    <p>
      {" "}
      Prerequisite to get started react.js:
      <ui>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ui>
    </p>
  </main>
);

const footerStyle = {
  backgroundColor: "#61DBFB",
};
const footer = (
  <footer style={footerStyle}>
    <p>Copyright 2020</p>
  </footer>
);

const app = (
  <div classname="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
