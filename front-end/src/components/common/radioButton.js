import React from "react";

const RadioButton = (props) => {
  const { value, name } = props;

  return (
    <div className="form-control">
      <input type="radio" value={value} id={`${name}-${value}`} name={name} />
      <label
        className="ml-4 font-weight-bold text-capitalize"
        htmlFor={`${name}-${value}`}
      >
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
