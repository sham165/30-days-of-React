import React from "react";

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

export default TechList;
