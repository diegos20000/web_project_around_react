import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import logo from "./images/Vector.jpg";
import avatar from "./images/avatar pic.jpeg";

import React from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <template id="card__template">
          <div class="element">
            <div class="element__trash">
              <img
                class="element__trash_icon"
                src="./images/trashnuevo.svg"
                alt="trash icon"
              />
            </div>
            <img src="" class="element__img" />
            <div class="element_text-like">
              <div class="element__text">
                <p class="element__name"></p>
              </div>
              <button class="element__likes"></button>
              <p class="element__counter">0</p>
            </div>
          </div>
        </template>
      </div>
    </>
  );
}

export default App;
