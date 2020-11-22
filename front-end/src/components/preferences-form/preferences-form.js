import React from "react";

import { SectionHeading } from "../styles/common";
import GenderPreferences from "./questions/gender-preferences/gender-preferences";
import { StateProvider } from "../../context/filterContext";

const PreferencesForm = () => {
  return (
    <StateProvider>
      <div className="container mt-5">
        <div className="row">
          <SectionHeading className="col-12">
            <h1>Set Preferences for Mentor Match</h1>
          </SectionHeading>
          <SectionHeading className="col-12 mt-4">
            <h4>
              Select preferences for each of the following on a scale of 0 to 3
            </h4>
          </SectionHeading>
          <SectionHeading className="col-12 mt-1">
            <h4>0 means you are not confortable at all</h4>
          </SectionHeading>
          <SectionHeading className="col-12 mt-1">
            <h4>3 means you're most conformatble</h4>
          </SectionHeading>
          <GenderPreferences />
        </div>
      </div>
    </StateProvider>
  );
};

export default PreferencesForm;
