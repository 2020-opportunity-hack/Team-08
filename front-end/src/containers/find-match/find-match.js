import React, { Fragment, useState } from "react";

import {
  FilterSectionHeading,
  FilterIcon,
} from "../../components/styles/find-match";
import Filters from "../filters";
import MentorList from "../../components/mentor-list/mentor-list";

const FindMatch = () => {
  const [shouldShowFilters, setShouldShowFilters] = useState(false);

  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <FilterSectionHeading className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-5">
            <div
              data-toggle="collapse"
              data-target={`#vp-filters`}
              aria-expanded="false"
              className="btn"
              onClick={() => setShouldShowFilters(!shouldShowFilters)}
            >
              <h3>
                Filters
                <FilterIcon
                  className="ml-2 fas fa-chevron-down"
                  displayFilters={shouldShowFilters}
                />
              </h3>
            </div>
          </FilterSectionHeading>
        </div>
      </div>

      <div id="vp-filters" className="collapse">
        <Filters />
      </div>

      <MentorList />
    </Fragment>
  );
};

export default FindMatch;
