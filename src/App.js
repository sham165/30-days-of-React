import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { countriesData } from "./data/countries";
// import reactImage from "./asset/images/react_logo.png";
import { showDate } from "./utils/display-date-and-time";

class App extends React.Component {
  state = {
    // loggedIn: false,
    // techs: ["HTML", "CSS", "JS"],
    // message: "Click show time or Greet people to change me",
    country: countriesData[0],
    // firstName: "",
    // message: "",
    key: "",
  };
  // handleLogin = () => {
  //   this.setState({
  //     loggedIn: !this.state.loggedIn,
  //   });
  // };
  handleTime = () => {
    let message = showDate(new Date());
    this.setState({ message });
  };
  // greetPeople = () => {
  //   let message = "Welcome to 30 Days Of React Challenge, 2020";
  //   this.setState({ message });
  // };
  // handleClick = (e) => {
  //   this.setState({
  //     message: "Welcome to the world of events",
  //   });
  // };
  // handleMouseMove = (e) => {
  //   this.setState({
  //     message: "mouse is moving",
  //   });
  // };
  // handleChanges = (e) => {
  //   this.setState({
  //     firstName: e.target.value,
  //     message: e.target.value,
  //   });
  // };
  // handleKeyPress = (e) => {
  //   this.setState({
  //     message:
  //       `${e.target.value} has been pressed and the keycode is` + e.charCode,
  //   });
  // };

  // handleBlur = (e) => {
  //   this.setState({
  //     message: "Input field has been blurred",
  //   });
  // };

  // handleCopy = (e) => {
  //   this.state({
  //     message: "Using 30 days of React for commercial purpose id not allowed",
  //   });
  // };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Shams",
        lastName: "C",
      },
      date: new Date(),
    };
    // const techs = ["HTML", "CSS", "JavaScript"];
    // const user = { ...data.author, image: reactImage };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        {/* <div>
          <button onClick={this.handleClick}>Click Me</button>
          <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
          <p onCopy={this.handleCopy}>
            Check copy right permission by copying this text
          </p>

          <p>{this.state.message}</p>
          <label htmlFor=""> Test for onKeyPress Event: </label>
          <input type="text" onKeyPress={this.handleKeyPress} />
          <br />

          <label htmlFor=""> Test for onBlur Event: </label>
          <input type="text" onBlur={this.handleBlur} />

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input
                onChange={this.handleChange}
                name="firstName"
                value={this.state.value}
              />
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div> */}
        <Main
          // techs={techs}
          handleTime={this.handleTime}
          // greetPeople={this.greetPeople}
          // loggedIn={this.state.loggedIn}
          // handleLogin={this.handleLogin}
          // message={this.state.message}
          country={this.state.country}
          // user={user}
        />
        <Footer date={new Date()} />
      </div>
    );
  }
}

export default App;
