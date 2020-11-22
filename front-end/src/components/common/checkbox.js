import React from "react";

const CheckBox = (props) => {
  const { id, isChecked, toggle, value } = props;

  const toggleState = (event) => {
    toggle(id, event.target.checked);
  };

  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        value={id}
        checked={isChecked}
        onChange={(event) => toggleState(event)}
      />
      <label className="form-check-label" htmlFor={id}>
        <h5>{value}</h5>
      </label>
    </div>
  );
};

export default CheckBox;
