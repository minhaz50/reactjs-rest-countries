import React from "react";

const Country = (props) => {
  return (
    <div>
      <h1>Country Name: {props.name}</h1>
      <h4>Capital Name: {props.capital}</h4>
    </div>
  );
};

export default Country;
