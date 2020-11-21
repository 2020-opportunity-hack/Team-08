import React, { Fragment, useState } from "react";

import CheckBox from "../../../components/common/checkbox";

const Gender = () => {
  const [isGenderFilterActive, setIsGenderFilterActive] = useState(false);

  const [isMaleFilterActive, setIsMaleFilterActive] = useState(false);
  const [isFemaleFilterActive, setIsFemaleFilterActive] = useState(false);
  const [isOtherFilterActive, setIsOtherFilterActive] = useState(false);

  const toggleState = (gender) => {
    switch (gender) {
      case "Male":
        setIsMaleFilterActive(!isMaleFilterActive);
        break;
      case "Female":
        setIsFemaleFilterActive(!isFemaleFilterActive);
        break;
      case "Other":
        setIsOtherFilterActive(!isOtherFilterActive);
        break;
      default:
        break;
    }

    setIsGenderFilterActive(
      isMaleFilterActive && isFemaleFilterActive && isOtherFilterActive
    );
  };

  return (
    <Fragment>
      <div className="col-10 offset-1 d-flex justify-content-center">
        <h4 className="mr-3">Gender: </h4>
      </div>
      <div className="col-10 offset-1 d-flex justify-content-center">
        <CheckBox
          genderId="maleGender"
          isChecked={isMaleFilterActive}
          toggle={toggleState}
          gender="Male"
        />
        <CheckBox
          genderId="femaleGender"
          isChecked={isFemaleFilterActive}
          toggle={toggleState}
          gender="Female"
        />
        <CheckBox
          genderId="otherGender"
          isChecked={isOtherFilterActive}
          toggle={toggleState}
          gender="Other"
        />
      </div>
    </Fragment>
  );
};

export default Gender;
