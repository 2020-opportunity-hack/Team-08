import React from "react";

import { SectionHeading } from "../styles/common";
import GenderPreferences from "../../containers/questions/gender-preferences/gender-preferences";
import { StateProvider } from "../../context/filterContext";

const PreferencesForm = (props) => {
  return (
    <StateProvider>
      <div className="container mt-5">
        <div className="row">
          <SectionHeading className="col-12 alert alert-warning">
            <h3>This is a sample page</h3>
          </SectionHeading>

          <SectionHeading className="col-12">
            <h1>Set Preferences for Mentor Match</h1>
          </SectionHeading>
          <SectionHeading className="col-12 mt-4">
            <h4>
              Select preferences for each of the following on a scale of 0 to 3
            </h4>
          </SectionHeading>
          <SectionHeading className="col-12 mt-1">
            <h4>0 means you are not comfortable at all</h4>
          </SectionHeading>
          <SectionHeading className="col-12 mt-1">
            <h4>3 means you're most comfortable</h4>
          </SectionHeading>

          <GenderPreferences />

          <SectionHeading className="col-12 mt-1">
            <span
              className="btn btn-link text-decoration-none"
              onClick={() => props.history.push("/find-match")}
            >
              <h2>Find Match</h2>
            </span>
          </SectionHeading>
        </div>
      </div>
    </StateProvider>
  );
};

export default PreferencesForm;
