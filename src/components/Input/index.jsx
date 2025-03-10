import React from "react";

const Input = ({ label, placeholder, state, setState }) => {
  return (
    <div className="input-wrapper">
      <p className="label-input">{label}</p>
      <input
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="custom-input"
      />
    </div>
  );
};

export default Input;
