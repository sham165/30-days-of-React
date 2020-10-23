import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Country = ({
  country: { name, capital, flag, languages, population, currencies },
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        {" "}
        <span> Capital: </span> {capital}{" "}
      </>
    ) : (
      ""
    );
  const formattedLanguage = languages.length > 1 ? `Languages` : `Language`;
  const formattedCurrency = currencies.length > 1 ? `Currencies` : `Currency`;

  //   console.log(languages);
  //   console.log(currencies);

  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>{formatedCapital}</p>
        <p>
          <span>{formattedLanguage}: </span>
          {languages.map((language) => language.name).join(", ")}
        </p>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>{formattedCurrency}: </span>
          {currencies.map((currency) => currency.name).join(", ")}{" "}
          {currencies.map((currency) => currency.symbol).join(", ")}
        </p>{" "}
      </div>
    </div>
  );
};

const Cat = ({ cat: { name, weight, origin, temperament } }) => {
  return (
    <div className="cats">
      <div className="cats_detail">
        <h3>Cat name: {name.toUpperCase} </h3>
        <p>Origin: {origin} </p>
        <p>Temperament are: {temperament}</p>
        <p>Weight: {weight.matric} </p>{" "}
      </div>
    </div>
  );
};

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchCountryData();
  }

  fetchCountryData = async () => {
    // const url = "https://restcountries.eu/rest/v2/all"; //country url
    const url = "https://api.thecatapi.com/v1/breeds"; //cat breeds

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

  render() {
    return (
      <div className="App">
        <h1>Fetching API using Fetch</h1>
        <h1>Calling Api</h1>
        {/* <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className="countries-wrapper">
            {this.state.data.map((country) => (
              <Country key={country.name} country={country} />
            ))}
          </div>
        </div> */}
        <div>
          <p>There are {this.state.data.length} cats breed</p>
          <div className="cats-wrapper">
            {this.state.data.map((cat) => (
              <Cat cat={cat} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
