import React, { Fragment, useContext, useEffect, useState } from "react";

import Scale from "./scale";
import { actions, store } from "../../../context/filterContext";
import CheckBox from "../../../components/common/checkbox";
import MenteePreferenceServices from "../../../services/mentee-preferences-service";
import $ from "jquery";

const GenderPreferences = () => {
  const { state, dispatch } = useContext(store);
  const genderPreferences = state.preferences.gender;

  const [, setWarningForMale] = useState(false);
  const [, setWarningForFemale] = useState(false);
  const [, setWarningForTransgender] = useState(false);
  const [, setWarningForNonBinary] = useState(false);
  const [, setUpdateState] = useState();

  const genderValues = [
    { name: "male", value: "Male" },
    { name: "female", value: "Female" },
    { name: "transgender", value: "Transgender" },
    { name: "nonBinary", value: "Non Binary" },
    { name: "noPreferences", value: "No Preferences" },
  ];

  useEffect(() => {}, [genderPreferences]);

  const updateGenderPreference = (name, value) => {
    let genderPreferencesData = {};

    switch (name) {
      case "male":
        genderPreferencesData = {
          ...state.preferences.gender,
          male: parseInt(value),
        };
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: genderPreferencesData,
        });
        setUpdateState();
        break;

      case "female":
        genderPreferencesData = {
          ...state.preferences.gender,
          female: parseInt(value),
        };
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: genderPreferencesData,
        });
        setUpdateState();
        break;

      case "transgender":
        genderPreferencesData = {
          ...state.preferences.gender,
          transgender: parseInt(value),
        };
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: genderPreferencesData,
        });
        setUpdateState();
        break;

      case "nonBinary":
        genderPreferencesData = {
          ...state.preferences.gender,
          nonBinary: parseInt(value),
        };
        dispatch({
          type: actions.UPDATE_GENDER_PREFERENCES,
          payload: genderPreferencesData,
        });
        setUpdateState();
        break;

      case "noPreferences":
        genderPreferencesData = {
          noPreferences: value,
        };

        dispatch({
          type: actions.UPDATE_DEFAULT_GENDER_PREFERENCES,
          payload: genderPreferencesData,
        });
        setUpdateState();
        break;
      default:
        break;
    }
  };

  const saveData = () => {
    const genderPreferences = state.preferences.gender;

    if (
      genderPreferences.male === undefined ||
      !genderPreferences.female === undefined ||
      !genderPreferences.transgender === undefined ||
      !genderPreferences.nonBinary === undefined
    ) {
      if (!genderPreferences.noPreferences) {
        setWarningForMale(genderPreferences.male);
        setWarningForFemale(genderPreferences.female);
        setWarningForTransgender(genderPreferences.transgender);
        setWarningForNonBinary(genderPreferences.nonBinary);
      } else {
        MenteePreferenceServices.genderPreferenceUpdate(genderPreferences).then(
          (response) => {
            console.log("VP_DEBUG: Response -", response);
            $("#save-gender-preferences").modal("show");
          }
        );
      }
    } else {
      MenteePreferenceServices.genderPreferenceUpdate(genderPreferences).then(
        (response) => {
          console.log("VP_DEBUG: Response -", response);
          $("#save-gender-preferences").modal("show");
        }
      );
    }
  };

  return (
    <Fragment>
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
              <div
                key={index}
                className="row d-flex justify-content-center mt-3"
              >
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

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => saveData()}
            >
              Save
            </button>

            <Modal />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="save-gender-preferences"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="SaveGenderPreferences"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Data Saved Successfully
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderPreferences;
