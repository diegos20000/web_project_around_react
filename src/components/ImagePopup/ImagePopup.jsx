import React from "react";
import closeButton from "../../images/Close Icon.jpg";

export default function ImagePopup(card, onClose) {
  return (
    <div className={`pop-up popup-image ${card ? "pop-up_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          className="pop-up__close-button"
          id="popup__close_img"
          onClick={onClose}
        >
          <img src={closeButton} alt="Pop up close icon" />
        </button>
        <div className="popup__image-content">
          <img
            className="pop-up__image-zoom"
            src={card?.link}
            alt={`imagen de ${card?.name}`}
          />
          <h3 className="popup_title-img">{card?.name}</h3>
        </div>
        <div className="popup__overlay"></div>
      </div>
    </div>
  );
}
