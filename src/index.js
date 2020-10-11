// index.js
import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Student: Shams C</p>
      <small>Date: Oct 2, 2020</small>
    </div>
  </header>
);

// JSX element, main
const mainStyles = {
  backgroundColor: "#F3F0F5",
};
const main = (
  <main style={mainStyles}>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  </main>
);

const footerStyles = {
  backgroundColor: "#61DBFB",
};
// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
