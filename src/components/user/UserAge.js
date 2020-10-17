import React from "react";

const PersonAge = ({ yearBorn }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBorn;
  return <p> I am {age} years old</p>;
};

export default PersonAge;
