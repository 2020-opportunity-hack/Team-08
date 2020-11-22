import React from "react";

import Scale from "./scale";
import PreferenceOption from "./preference-option";

const GenderPreferences = () => {
  return (
    <div className="col-12 mt-5 alert-secondary rounded p-2">
      <h4>Gender:</h4>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-2">
            <h4>Male:</h4>
          </div>
          <Scale name={"male"} />
        </div>

        <div className="row d-flex justify-content-center mt-3">
          <div className="col-12 col-md-2">
            <h4>Female:</h4>
          </div>
          <Scale name={"female"} />
        </div>

        <div className="row d-flex justify-content-center mt-3">
          <div className="col-12 col-md-2">
            <h4>Transgender:</h4>
          </div>
          <Scale name={"transgender"} />
        </div>

        <div className="row d-flex justify-content-center mt-3">
          <div className="col-12 col-md-2">
            <h4>Non Binary:</h4>
          </div>
          <Scale name={"nonBinary"} />
        </div>

        <div className="row d-flex justify-content-center mt-3">
          <div className="col-12 col-md-3">
            <h4>No Preferences:</h4>
          </div>
          <PreferenceOption name={"no-preferences"} />
        </div>
      </div>
    </div>
  );
};

export default GenderPreferences;
