import React, { useContext } from "react";

import Mentor from "../mentor";
import { store } from "../../context/filterContext";

const MentorList = () => {
  const { state } = useContext(store);
  const { mentors } = state;

  return (
    <div className="container">
      <div className="row">
        {mentors
          ? Object.keys(mentors).map((mentor, index) => {
              return (
                <div key={index} className="col-12 col-md-4 col-lg-3">
                  <Mentor data={mentors[mentor]} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MentorList;
