import React from "react";

const RadioButton = (props) => {
  const { value, name, isSelected, onClickEvent, shouldDisable } = props;

  const selectCurrentValue = (event) => {
    onClickEvent(name, event.target.value);
  };

  return (
    <div className="form-control">
      {isSelected ? (
        shouldDisable ? (
          <input
            type="radio"
            value={value}
            id={`${name}-${value}`}
            name={name}
            onChange={(event) => selectCurrentValue(event)}
            defaultChecked
            disabled
          />
        ) : (
          <input
            type="radio"
            value={value}
            id={`${name}-${value}`}
            name={name}
            onChange={(event) => selectCurrentValue(event)}
            defaultChecked
          />
        )
      ) : shouldDisable ? (
        <input
          type="radio"
          value={value}
          id={`${name}-${value}`}
          name={name}
          onChange={(event) => selectCurrentValue(event)}
          disabled
        />
      ) : (
        <input
          type="radio"
          value={value}
          id={`${name}-${value}`}
          name={name}
          onChange={(event) => selectCurrentValue(event)}
        />
      )}
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
