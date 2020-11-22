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
      case "male":
        setIsMaleFilterActive(value);
        break;
      case "female":
        setIsFemaleFilterActive(value);
        break;
      case "other":
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
          id="male"
          isChecked={isMaleFilterActive}
          toggle={toggleState}
          value="Male"
        />
        <CheckBox
          id="female"
          isChecked={isFemaleFilterActive}
          toggle={toggleState}
          value="Female"
        />
        <CheckBox
          id="other"
          isChecked={isOtherFilterActive}
          toggle={toggleState}
          value="Other"
        />
      </div>
    </Fragment>
  );
};

export default Gender;
