import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  //   withRouter,
} from "react-router-dom";

const Home = (props) => <h1>Welcome Home!</h1>;
const About = (props) => <h1>About Us</h1>;
const Contact = (props) => <h1>Contact Us</h1>;
const Country = ({ country: { name, flag, population } }) => {
  return (
    <div style={countryWrapper} className="countryWrapper">
      <div style={countryStyles} className="country">
        <div style={countryFlagStyle} className="country_flag">
          <img style={img} src={flag} alt={name} />
        </div>
        <h3 style={countryNameStyle} className="country_name">
          {name.toUpperCase()}
        </h3>
        <div class="country_text">
          <p>
            <span>Population: </span>
            {population}
          </p>
        </div>
      </div>
    </div>
  );
};

const navWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const navlink = {
  position: "absolute",
  fontSize: "1rem",
  margin: "auto 1.5rem",
  color: "#333",
};
const countryWrapper = {
  background: "rgb(240, 240, 240)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  justifyItems: "center",
  margin: "1rem 0 3rem 0",
  padding: "1rem",
};
const countryNameStyle = {
  fontSize: "1.6rem",
  color: "#ffa500",
  letterSpacin: ".075rem",
  marginBottom: "1rem",
  fontWeight: "bolder",
};
const countryStyles = {
  maxWidth: "25rem",
  minWidth: "25rem",
  textAlign: "center",
  margin: "0.5rem",
  padding: "2rem",
  borderRadius: "0.2rem",
  background: "white",
};

const countryFlagStyle = {
  height: "12rem",
  width: "20rem",
  textAlign: "center",
  margin: "auto",
};

const img = {
  display: "block",
  margin: "auto",
  maxWidth: "75%",
  maxHeight: "75%",
  minWidth: "75%",
  minHeight: "75%",
  borderRadius: "0.3rem",
  boxShadow: "0 0 0.6rem 0.2rem rgb(241, 225, 225)",
};
const challenges = [
  {
    name: "30 Days Of Python",
    description:
      "30 Days of Python challenge is a step by step guide to learn Python in 30 days.",
    status: "completed",
    days: 30,
    level: "Beginners to Advanced",
    duration: "20 Nov 2019 - 20 Dec 2019",
    slug: "pyhton",
    url:
      "https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of JavaScript",
    description:
      "30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.",
    status: "completed",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Jan 2020 - 30 Jan 2020",
    slug: "javascript",
    url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Days Of React",
    description:
      "30 Days of React challenge is a step by step guide to learn React in 30 days.",
    status: "ongoing",
    days: 30,
    level: "Beginners to Advanced",
    duration: "1 Oct 2020- 30 Oct 2020",
    slug: "react",
    url: "https://github.com/Asabeneh/30-Days-Of-React",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 HTML and CSS",
    description:
      "30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.",

    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "html-and-css",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 ReactNative",
    description:
      "30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "reactnative",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Data Analysis",
    description:
      "30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "data-analysis",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
  {
    name: "30 Machine Learning",
    description:
      "30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.",
    status: "coming",
    days: 30,
    level: "Beginners to Advanced",
    duration: "",
    slug: "machine-learning",
    url: "",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
  },
];

const Challenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Author: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {" "}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Number of days: {days}</small>

    <p>{description}</p>
  </div>
);

const Challenges = (props) => {
  const path = props.location.pathname;
  const slug = path.split("/").slice(path.split("/").length - 1)[0];
  const challenge = challenges.find((challenge) => challenge.slug === slug);
  return (
    <div>
      <h2>30 Days Of React Challenges</h2>
      <ul>
        {challenges.map(({ name, slug }) => (
          <li>
            <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route
          exact
          path={"/challenges"}
          component={() => <h3>Choose any of the challenges</h3>}
        />
        <Route
          path={path}
          component={(props) => <Challenge challenge={challenge} />}
        />
      </Switch>
    </div>
  );
};
const Jenkins = (props) => <h1>Welcome Jenkins</h1>;
const NotFound = (props) => <h1>The page you are looking for is not found</h1>;

const Navbar = ({ username }) => (
  <ul style={navWrapper}>
    <li>
      <NavLink style={navlink} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to="/about">
        About
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to="/contact">
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to={`/user/${username}`}>
        User
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to="/challenges">
        Challenges
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to="/jenkins">
        Jenkins
      </NavLink>
    </li>
    <li>
      <NavLink style={navlink} to="/country">
        Country Data
      </NavLink>
    </li>
  </ul>
);

const User = ({ match, isLoggedIn, handleLogin }) => {
  const username = match.params.username;
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username} to the challenge</h1>
          <small>Now, you can navigate through all the challenges</small> <br />
        </>
      ) : (
        <p>Please login in to access the challenges </p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};
const Welcome = ({ handleLogin, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? "Welcome to the challenge" : <p>Please login in </p>}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

class App extends Component {
  // state = { isLoggedIn: false, firstName: "sham" };
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchCountryData();
  }
  fetchCountryData = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar username={this.state.firstName} />

          <Prompt
            message={({ pathname }) => {
              return this.state.isLoggedIn && pathname.includes("/user/sham")
                ? "Are you sure you want to logout?"
                : true;
            }}
          />

          <Switch>
            {/* <Route component={NotFound} /> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/user/:username"
              component={(props) => (
                <User
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <Welcome
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path="/challenges"
              component={(props) => {
                return this.state.isLoggedIn ? (
                  <Challenges {...props} />
                ) : (
                  <Redirect to="/user/sham" />
                );
              }}
            />
            <Route path="/jenkins" component={Jenkins} />
            <Route
              path="/country"
              component={(props) => {
                return this.state.data.map((country) => (
                  <Country country={country} />
                ));
              }}
            />
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
