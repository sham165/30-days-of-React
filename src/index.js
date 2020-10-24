import React, { Component } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text, style }) => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CopmParam, name = "default") => {
  const colors = [
    {
      name: "default",
      backgroundColor: "#e7e7e7",
      color: "#000000",
    },
    {
      name: "react",
      backgroundColor: "#61dbfb",
      color: "#ffffff",
    },
    {
      name: "success",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
    },
    {
      name: "info",
      backgroundColor: "#2196F3",
      color: "#ffffff",
    },
    {
      name: "warning",
      backgroundColor: "#ff9800",
      color: "#ffffff",
    },
    {
      name: "danger",
      backgroundColor: "#f44336",
      color: "#ffffff",
    },
  ];
  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: "10px 45px",
    border: "none",
    borderRadius: 3,
    margin: "2",
    curser: "pointer",
    fontSize: "1.25rem",
    color,
  };
  return (props) => {
    return <CopmParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, "react");
const InfoButton = buttonWithStyles(Button, "info");
const SuccessButton = buttonWithStyles(Button, "success");
const WarningButton = buttonWithStyles(Button, "warning");
const DangerButton = buttonWithStyles(Button, "danger");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          text="No Style"
          onClick={() => alert("There is no style yet")}
        />
        <NewButton
          text="Styled Button"
          onClick={() => alert("I am the default style")}
        />
        <SuccessButton
          text="Success"
          onClick={() => alert("I am Successfull")}
        />
        <ReactButton text="React" onClick={() => alert("React styled")} />
        <InfoButton text="Info" onClick={() => alert("I am with Info color")} />
        <WarningButton text="Warning" onClick={() => alert("Warning styled")} />
        <DangerButton
          text="Danger"
          onClick={() => alert("Danger, you can't go back")}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
