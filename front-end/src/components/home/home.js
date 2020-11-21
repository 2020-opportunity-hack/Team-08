import React from "react";

import { HomeContainer, LogoImage } from "../styles/home";
import Logo from "./logo.png";

const Home = (props) => {
  return (
    <HomeContainer>
      <LogoImage src={Logo} />
      <span
        className="btn btn-link text-decoration-none"
        onClick={() => props.history.push("/find-match")}
      >
        <h2>Find Match</h2>
      </span>
    </HomeContainer>
  );
};

export default Home;
