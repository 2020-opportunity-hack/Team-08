import React from "react";

import { HomeContainer, LogoImage } from "../styles/home";
import Logo from "./logo.png";

const Home = () => {
  return (
    <HomeContainer>
      <LogoImage src={Logo} />
    </HomeContainer>
  );
};

export default Home;
