import React from "react";
import HexaColor from "../color/HexaColor";
import TechList from "../techs/TechList";
import Countries from "../country/Country";
import UserCard from "../user/UserCard";
import PersonAge from "../user/UserAge";
import Button from "../shared/Button";
import { buttonStyle } from "../../styles/button-styles";
import Country from "../country/Country";

const Message = ({ message }) => (
  <div
    style={{
      border: "2px solid #61dbfb",
      margin: 25,
      padding: 10,
    }}
  >
    <h3>{message}</h3>
  </div>
);
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = (props) => (
  <div style={{ border: "2px solid rgb(0,255,0", margin: 10, padding: 10 }}>
    <h2>Welcome to 30 Days Of React</h2>
  </div>
);

// main component
class Main extends React.Component {
  render() {
    const {
      user,
      techs,
      greetPeople,
      handleTime,
      yearBorn,
      countries,
      loggedIn,
      handleLogin,
      message,
      country,
    } = this.props;
    console.log(message);

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
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

          <UserCard user={user} />

          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}

          <PersonAge yearBorn={yearBorn} />

          <div>
            <h3>Countries List</h3>
            <Countries countries={countries} />
          </div>

          <div>
            <Button text="Show Time" onClick={handleTime} style={buttonStyle} />{" "}
            <Button
              text="Greet Plople"
              onClick={greetPeople}
              style={buttonStyle}
            />{" "}
            <Button
              text="Hi!"
              onClick={() => alert("Well, Hello")}
              style={buttonStyle}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? "Logout" : "Login"}
              style={buttonStyle}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
          <HexaColor />
          <HexaColor />
          <Country country={country} />
        </div>
      </main>
    );
  }
}

export default Main;
