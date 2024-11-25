import React from "react";
import trashButton from "../../images/trashicons.png";
import { useState } from "react";

export default function Card(props) {
  const [card, setCard] = useState(props.card);
  const [isSelected, setIsSelected] = useState(false);

  if (!card) {
    return null;
  }

  const { name, link, isLiked, _id, likes = [] } = card;

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleCardDelete() {
    props.onCardDelete(card);
  }

  const cardDeleteButtonClassName = "element__button-trash";
  const CardLikeButtonClassName = isLiked
    ? "element__button-like_active"
    : "element__button-like";

  return (
    <div className="card" key={_id}>
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
        src={link}
        className="element__img"
        alt={`imagen de ${name}`}
        onClick={handleClick}
      />
      <div className="element_text-like">
        <div className="element__text">
          <p className="element__name">{name}</p>
        </div>
        <button
          className={CardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
        <p className="element__counter">{likes.length}</p>
      </div>
    </div>
  );
}
