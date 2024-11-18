import React from "react";

export default function EditAvatar(onClose) {
  return (
    <div className="pop-up__container">
      <button class="pop-up__close-button">
        <img src="./images/Close Icon.jpg" alt="Pop up close icon" />
      </button>
      <form class="popup__form" id="popUp-Form">
        <h3 class="pop-up__title">Cambiar foto de perfil</h3>
        <fieldset class="pop-up__input-container">
          <input
            class="pop-up__form-item pop-up__form-item-about popup__input"
            type="url"
            placeholder="URL de la imagen"
            id="link"
            name="link"
            required
          />
          <span className="pop-up__form-error pop-up__form-error_link"></span>
        </fieldset>
        <button className="pop-up__save-button" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}
