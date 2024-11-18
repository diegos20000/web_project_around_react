import React from "react";
import editButton from "./images/editButton";
import addButton from "./images/addButton";
import Card from "../Card/Card";
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
  const currentUser = useContext(CurrentUserContext);

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
          alt="Jacques Cousteau"
          className="profile__img"
        />
        <section className="profile__info">
          <div class="group">
            <p class="group__name">{currentUser.name}</p>
            <button
              className="group__button"
              type="button"
              id="open-popup"
              onClick={onEditProfileClick}
            >
              <img src={editButton} alt="Edit button" />
            </button>
          </div>
          <p class="profile__exp">{currentUser.about}</p>
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
    </main>
  );
}
