import React from "react";

import Gender from "./gender";

const Filters = () => {
  return (
    <div className="container mt-2 mb-4">
      <div className="row rounded-lg alert-info">
        <Gender />
      </div>
    </div>
  );
};

export default Filters;
