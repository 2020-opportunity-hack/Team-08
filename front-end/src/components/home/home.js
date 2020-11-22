import React from "react";

import { HomeContainer, LogoImage } from "../styles/home";
import Logo from "./logo.png";

const Home = (props) => {
  return (
    <div className="container-fluid">
      <HomeContainer>
        <div className="row">
          <div className="col-12">
            <LogoImage src={Logo} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <span
              className="btn btn-link text-decoration-none"
              onClick={() => props.history.push("/find-match")}
            >
              <h2>Find Match</h2>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <span
              className="btn btn-link text-decoration-none"
              onClick={() => props.history.push("/set-mentor-preferences")}
            >
              <h2>Set Preferences for Mentor Match</h2>
            </span>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default Home;
