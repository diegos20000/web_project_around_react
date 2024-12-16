import React, { useState, useContext, useEffect } from "react";
import editButton from "../../images/Edit Button.jpg";
import trashButton from "../../images/trashicons.png";
import addButton from "../../images/Rectangle.jpg";
import AddPlacePopup from "./popup/NewCard/NewCard.jsx";
import api from "../../utils/api.js";
import Card from "./Card/Card.jsx";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import EditProfile from "./popup/EditProfile/EditProfile.jsx";

export default function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  if (!currentUser) {
    return null;
  }

  return (
    <main className="content">
      <div
        className="profile"
        id="profile__avatar_update"
        style={{ backgroundImage: `url(${currentUser.avatar})` }}
      >
        <img
          src={currentUser.avatar}
          alt="Avatar de usuario"
          className="profile__img"
          onClick={onEditAvatarClick}
        />
        <section className="profile__info">
          <div className="group">
            <p className="group__name">{currentUser.name}</p>{" "}
            <button
              className="group__button"
              type="button"
              id="open-popup"
              onClick={onEditProfileClick}
            >
              <img src={editButton} alt="Edit button" />
            </button>
          </div>
          <p className="profile__exp">{currentUser.about}</p>
        </section>
        <button
          className="profile__addbutton"
          type="button"
          onClick={onAddPlaceClick}
        >
          <img
            src={addButton}
            alt="Add Button"
            className="profile__button-img"
          />
        </button>
      </div>
      <div className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={() => onCardClick(card)}
            onCardLike={onCardLike}
            onCardDelete={() => onCardDelete(card)}
          />
        ))}
      </div>
    </main>
  );
}
