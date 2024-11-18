import React from "react";
import closeButton from "../images/closeButton";

export default function PopupWithForm(props) {
  return (
    <div className="popup" id="popup__edit">
      <div className="popup__container">
        <button className="pop-up__close-button">
          <img
            class="popup__close"
            src="./images/Close Icon.jpg"
            alt="close icon"
          />
        </button>
        <div className="popup__card">
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__form" novalidate id="form-profile">
            <input
              class="popup__input popup__text_title"
              type="text"
              placeholder="Nombre"
              minlength="2"
              maxlength="40"
              id="popup__input popup__input_name"
              name="name"
              required
            />
            <span class="popup__input-error popup__input_name-error"> </span>
            <input
              class="popup__input popup__text_about"
              type="text"
              placeholder="Acerca de mí"
              minlength="2"
              maxlength="40"
              id="popup__input popup__input_about"
              name="about"
              required
            />
            <span class="popup__input-error popup__input_about-error"> </span>
            <button
              class="popup__submit-btn popup__submit-btn_action_add pop-up__save-button"
              type="submit"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
      <div class="popup__overlay"></div>
    </div>
  );
}
