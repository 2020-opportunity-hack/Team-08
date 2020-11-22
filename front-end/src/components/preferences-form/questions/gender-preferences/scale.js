import React, { Fragment } from "react";

import RadioButton from "../../../common/radioButton";

const Scale = (props) => {
  const { name, selectedValue, onClickEvent, shouldDisable } = props;

  return (
    <Fragment>
      {[0, 1, 2, 3].map((scaleValue) => {
        return (
          <div key={scaleValue} className="col-12 col-md-2 mt-1 mt-md-0">
            <RadioButton
              value={scaleValue}
              name={name}
              isSelected={selectedValue === scaleValue}
              onClickEvent={onClickEvent}
              shouldDisable={shouldDisable}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Scale;
