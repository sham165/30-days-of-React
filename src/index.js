//index.js

import React from "react";
import ReactDOM from "react-dom";

// class base component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright 2020</p>
        </div>
      </footer>
    );
  }
}

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
