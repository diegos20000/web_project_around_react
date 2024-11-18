import React from "react";
import Logo from "./images/Vector";

const Header = () => {
  return (
    <header class="header">
      <p class="header__title">
        <img src={Logo} alt="Around The U.S." />
      </p>
      <hr class="header__hr" />
    </header>
  );
};
