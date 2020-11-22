import React, { Fragment } from "react";

import RadioButton from "../../../common/radioButton";

const Scale = (props) => {
  const { name } = props;

  return (
    <Fragment>
      {[0, 1, 2, 3].map((scaleValue) => {
        return (
          <div className="col-12 col-md-2 mt-1 mt-md-0">
            <RadioButton value={scaleValue} name={name} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Scale;
