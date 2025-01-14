import React, { useEffect, useRef, useState } from "react";

import PopupWithForm from "../Popup";

export default function EditAvatar({ onClose, isOpen, onUpdateAvatar }) {
  const avatarRef = useRef();
  const [buttonText, setButtonText] = useState("Guardar");

  async function handleSubmit(e) {
    e.preventDefault();

    const avatarURL = avatarRef.current.value;
    if (!isValidURL(avatarURL)) {
      return;
    }

    const defaultSubmitText = buttonText;
    setButtonText("Guardando...");

    await onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function isValidURL(string) {
    const regex = /^(https?:\/\/[^\s]+)/;
    return regex.test(string);
  }

  useEffect(() => {
    setButtonText("Guardar");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="popup__card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <fieldset className="popup__card">
        <input
          className="pop-up__form-item pop-up__form-item-about popup__input"
          type="url"
          placeholder="URL de la imagen"
          id="link"
          name="link"
          ref={avatarRef}
          required
        />
        <span className="pop-up__form-error pop-up__form-error_link"></span>
      </fieldset>
    </PopupWithForm>
  );
}
