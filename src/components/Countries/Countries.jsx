import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  let [visitedCountry, setVisitedCountry] = useState([]);
  let [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // Add Vistied Button Handler
  let addVisitedHandler = (name) => {
    let visitedCountryy = name;
    setVisitedCountry([...visitedCountry, visitedCountryy]);
  };
  // Add Vistied Button Flag
  let vistitedFlagHandler = (flag) => {
    let visitedFlagg = flag;
    setVisitedFlag([...visitedFlag, visitedFlagg]);
  };

  return (
    <>
      <div className="visited-wrapper">
        <ul>
          {visitedFlag.map((visitFlag) => (
            <img className="img-width" src={visitFlag}></img>
          ))}
        </ul>
        <ul className="visited-country-item">
          {visitedCountry.map((vsitCountry) => (
            <li className="country-item">{vsitCountry}</li>
          ))}
        </ul>
      </div>
      <div className="countries-wrapper">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            addVisitedHandler={addVisitedHandler}
            vistitedFlagHandler={vistitedFlagHandler}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
