import { useState } from "react";
import "./Country.css";

const Country = ({ country, addVisitedHandler, vistitedFlagHandler }) => {
  //   console.log(country);
  let { name, cca2, flags, population } = country;
  let { visited, setVisited } = useState(false);

  return (
    <div className="card-wrapper">
      <img src={flags.png} alt="" />
      <h3>{name.common}</h3>
      <h5>Population: {population}</h5>
      <h5>id: {cca2}</h5>
      <button
        onClick={() => {
          addVisitedHandler(name.common);
        }}
      >
        Add Visited
      </button>
      <button
        onClick={() => {
          vistitedFlagHandler(flags.png);
        }}
      >
        Visited Flag
      </button>
    </div>
  );
};

export default Country;
