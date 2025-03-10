import React from "react";
import "./styles.css";

const Button = ({ text, blue }) => {
  return <div className={blue ? "btn btn-blue" : "btn"}>{text}</div>;
};

export default Button;
