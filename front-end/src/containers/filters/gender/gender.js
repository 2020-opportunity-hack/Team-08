import React, { Fragment, useContext, useEffect, useState } from "react";

import CheckBox from "../../../components/common/checkbox";
import { actions, store } from "../../../context/filterContext";

const Gender = () => {
  const [isMaleFilterActive, setIsMaleFilterActive] = useState(false);
  const [isFemaleFilterActive, setIsFemaleFilterActive] = useState(false);
  const [isOtherFilterActive, setIsOtherFilterActive] = useState(false);

  const { dispatch } = useContext(store);

  const toggleState = (gender, value) => {
    switch (gender) {
      case "Male":
        setIsMaleFilterActive(value);
        break;
      case "Female":
        setIsFemaleFilterActive(value);
        break;
      case "Other":
        setIsOtherFilterActive(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch({
      type: actions.FILETR_GENDER,
      payload: {
        isMaleFilterActive,
        isFemaleFilterActive,
        isOtherFilterActive,
      },
    });
  }, [isMaleFilterActive, isFemaleFilterActive, isOtherFilterActive, dispatch]);

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
