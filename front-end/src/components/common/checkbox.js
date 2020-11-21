import React from "react";

const CheckBox = (props) => {
  const { genderId, isChecked, toggle, gender } = props;
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id={genderId}
        value={genderId}
        checked={isChecked}
        onClick={() => toggle(gender)}
      />
      <label class="form-check-label" for={genderId}>
        <h5>{gender}</h5>
      </label>
    </div>
  );
};

export default CheckBox;
