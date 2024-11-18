import React from "react";

export default function EditProfile(onClose) {
  return (
    <div class="popup__card">
      <h3 class="popup__title">Editar perfil</h3>
      <form class="popup__form" novalidate id="form-profile">
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
  );
}
