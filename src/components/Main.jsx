import React from "react";
import editButton from "../images/Edit Button.jpg";
import trashButton from "../images/trashicons.png";
import addButton from "../images/Rectangle.jpg";

import Card from "./Card/Card.jsx";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditAvatarClick,
  onAddPlaceClick,
  onEditProfileClick,
  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
}) {
  const currentUser = {};
  /*const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return null;
  }*/

  return (
    <main className="content">
      <div
        className="profile"
        id="profile__avatar_update"
        onClick={onEditAvatarClick}
        style={{ backgroundImage: `url(${currentUser.avatar})` }}
      >
        <img
          src={currentUser.avatar}
          alt="Avatar de usuario"
          className="profile__img"
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
              <img src={editButton} alt="Edit button" />{" "}
            </button>
          </div>
          <p className="profile__exp">{currentUser.about}</p>{" "}
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
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </div>
    </main>
  );
}
