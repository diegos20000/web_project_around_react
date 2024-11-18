import React from "react";

export default function Popup(props) {
  const { title, children } = props;
  return (
    <div>
      <div class="pop-up__container">
        <button class="pop-up__close-button">
          <img src="./images/Close Icon.jpg" alt="Pop up close icon" />
        </button>
        <form class="pop-up__form">
          <h3 class="pop-up__title pop-up__delete-title">{title}</h3>
          {children}
          <input type="hidden" name="cardId" class="popup__input" />
          <button class="pop-up__save-button" type="submit">
            Sí
          </button>
        </form>
      </div>
    </div>
  );
}
