import React, { useContext, useEffect } from "react";

import Scale from "./scale";
import { actions, store } from "../../../../context/filterContext";
import CheckBox from "../../../common/checkbox";

const GenderPreferences = () => {
  const { state, dispatch } = useContext(store);
  const genderPreferences = state.preferences.gender;

  const genderValues = [
    { name: "male", value: "Male" },
    { name: "female", value: "Female" },
    { name: "transgender", value: "Transgender" },
    { name: "nonBinary", value: "Non Binary" },
    { name: "noPreferences", value: "No Preferences" },
  ];

  const updateGenderPreference = (name, value) => {
    switch (name) {
      case "male":
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: {
            key: "male",
            value: parseInt(value),
          },
        });
        break;
      case "female":
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: {
            key: "female",
            value: parseInt(value),
          },
        });
        break;
      case "transgender":
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: {
            key: "transgender",
            value: parseInt(value),
          },
        });
        break;
      case "nonBinary":
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: {
            key: "nonBinary",
            value: parseInt(value),
          },
        });
        break;
      case "noPreferences":
        dispatch({
          type: actions.UPDATE_DEFAULT_GENDER_PREFERENCES,
          payload: {
            value,
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="col-12 mt-5 alert-secondary rounded p-2">
      <h4>Gender:</h4>
      <div className="container-fluid">
        {[...genderValues].map((genderValue, index) => {
          return genderValue.name === "noPreferences" ? (
            <div key={index} className="row mt-3">
              <div className="col-12 d-flex justify-content-center">
                <CheckBox
                  id="noPreferences"
                  isChecked={genderPreferences.noPreferences}
                  toggle={updateGenderPreference}
                  value={genderValue.value}
                />
              </div>
            </div>
          ) : (
            <div key={index} className="row d-flex justify-content-center mt-3">
              <div className="col-12 col-md-2">
                <h4>{genderValue.value}:</h4>
              </div>
              <Scale
                name={genderValue.name}
                selectedValue={genderPreferences[genderValue.name]}
                onClickEvent={updateGenderPreference}
                shouldDisable={genderPreferences.noPreferences}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenderPreferences;
