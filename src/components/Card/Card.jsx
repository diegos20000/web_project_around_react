import React from "react";
import trashButton from "./images/trashButton";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  function handleClick() {
    onCardClick(cardData);
  }

  function handleLikeClick() {
    onCardLike(cardData);
  }

  function handleCardDelete() {
    onCardDelete(cardData);
  }

  return (
    <div className="element" key={cardData._id}>
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleCardDelete}
      >
        <img
          src={trashButton}
          alt="Botón de Eliminar"
          className="element__button-trash-img"
        />
      </button>
      <img
        src={cardData.link}
        className="element__img"
        alt={`imagen de ${cardData.name}`}
        onClick={handleClick}
      />
      <div className="element_text-like">
        <div class="element__text">
          <p class="element__name">{cardData.name}</p>
        </div>
        <button
          className={CardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
        <p className="element__counter">{cardData.likes.length}</p>
      </div>
    </div>
  );
}
