import React, { useState } from "react";
import React from "react";

export default function AddPlacePopup(isOpen, onClose) {
  const { title, children } = props;
  return (
    <div className="popup__card">
      <h3 className="popup__title">New Place</h3>
      <form className="popup__form" id="form-cards" novalidate>
        <input
          className="popup__input popup__input_title"
          type="text"
          placeholder="Title"
          name="title"
          id="input__card_title"
          minlength="2"
          maxlength="30"
          list=""
          required
        />
        <span className="popup__input-error input__card_title-error"> </span>
        <input
          class="popup__input popup__input_url"
          type="url"
          placeholder="Image URL"
          name="link"
          id="input__card_link"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__input-error input__card_link-error"></span>
        <button
          className="popup__submit-btn popup__submit-btn_action_add pop-up__save-button"
          id="card-submit-button"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
