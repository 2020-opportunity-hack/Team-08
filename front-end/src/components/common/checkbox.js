import React from "react";

const CheckBox = (props) => {
  const { genderId, isChecked, toggle, gender } = props;

  const toggleState = (event) => {
    toggle(gender, event.target.checked);
  };

  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={genderId}
        value={genderId}
        checked={isChecked}
        onChange={(event) => toggleState(event)}
      />
      <label className="form-check-label" htmlFor={genderId}>
        <h5>{gender}</h5>
      </label>
    </div>
  );
};

export default CheckBox;
