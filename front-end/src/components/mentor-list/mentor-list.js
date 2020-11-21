import React from "react";

import Mentors from "./mentor-list.json";
import Mentor from "../mentor";

const MentorList = () => {
  return (
    <div className="container">
      <div className="row">
        {Mentors
          ? Object.keys(Mentors).map((mentor, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3">
                  <Mentor key={index} data={Mentors[mentor]} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MentorList;
