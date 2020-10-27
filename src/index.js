import React from "react";
import ReactDOM from "react-dom";
import useFetch from "./useFetch";

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div class="country_text">
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  );
};

const App = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const countryData = useFetch(url);

  return (
    <div className="App">
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {countryData.length} countries in the api</p>
        <div className="countries-wrapper">
          {countryData.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
