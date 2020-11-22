import React, { Fragment } from "react";

import RadioButton from "../../../common/radioButton";

const PreferenceOption = (props) => {
  const { name } = props;

  return (
    <Fragment>
      {["yes", "no"].map((option) => {
        return (
          <div className="col-12 col-md-2 mt-1 mt-md-0">
            <RadioButton value={option} name={name} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default PreferenceOption;
