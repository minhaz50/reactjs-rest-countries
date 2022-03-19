import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, capital, name, flags, population } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>
        <strong>{name.common}</strong>
      </h2>
      <h3>Capital: {capital}</h3>
      <p>
        <strong>Popultion: {population}</strong>
      </p>
      <p>
        <strong>Area: {area}</strong>
      </p>
    </div>
  );
};

export default Country;
