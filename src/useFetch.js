import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(url);
        const countryData = await response.json();
        setCountryData(countryData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryData();
  }, [url]);
  return countryData;
};

export default useFetch;

// import { useState, useEffect } from 'react'

// const useFetch = () => {
//   const [data, setData] = useState([])

//   const fetchData = async () => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       setData(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])
// }
