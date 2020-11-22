import React from "react";

import PlaceholderImage from "./placeholder.jpg";

const Mentor = (props) => {
  return (
    <div className="card m-2">
      <img className="card-img-top" src={PlaceholderImage} alt="Placeholder" />
      <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">{props.data.name}</h5>
      </div>
      <div className="card-body mt-n4 d-flex justify-content-center">
        <h5 className="card-title">{props.data.gender}</h5>
      </div>
    </div>
  );
};

export default Mentor;
