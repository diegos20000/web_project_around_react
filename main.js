import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";

import React from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const Main = () => {
  return (
    <main class="content">
      <div class="profile" id="profile__avatar_update">
        <img src={avatar} alt="Jacques Cousteau" class="profile__img" />
        <section class="profile__info">
          <div class="group">
            <p class="group__name">Jacques Cousteau</p>
            <button class="group__button" id="open-popup">
              <img src="./images/Edit Button.jpg" alt="Edit button" />
            </button>
          </div>
          <p class="profile__exp">Explorador</p>
        </section>
        <button class="profile__addbutton">
          <img
            src="./images/Rectangle.jpg"
            alt="Add Button"
            class="profile__button-img"
          />
        </button>
      </div>

      <div class="elements"></div>
    </main>
  );
};
