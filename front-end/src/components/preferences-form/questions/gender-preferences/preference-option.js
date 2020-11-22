import React, { Fragment } from "react";

import RadioButton from "../../../common/radioButton";

const PreferenceOption = (props) => {
  const { name, selectedValue, onClickEvent } = props;

  return (
    <Fragment>
      {["yes", "no"].map((option) => {
        return (
          <div key={option} className="col-12 col-md-2 mt-1 mt-md-0">
            <RadioButton
              value={option}
              name={name}
              isSelected={selectedValue === option}
              onClickEvent={onClickEvent}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default PreferenceOption;
