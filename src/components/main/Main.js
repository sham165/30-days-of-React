import React from "react";
import Country from "../country/Country";

// main component
class Main extends React.Component {
  render() {
    const { country } = this.props;

    return (
      <main>
        <div className="main-wrapper">
          <Country country={country} />
        </div>
      </main>
    );
  }
}

export default Main;
