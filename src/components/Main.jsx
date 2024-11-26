import React, { Children } from "react";
import editButton from "../images/Edit Button.jpg";
import trashButton from "../images/trashicons.png";
import addButton from "../images/Rectangle.jpg";
import AddPlacePopup from "./AddPlacePopup.jsx";

import Card from "./Card/Card.jsx";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditAvatarClick,
  onAddPlaceClick,

  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
}) {
  const [Popup, setPopup] = useState(null);
  const newCardPopup = {
    title: "Nuevo Lugar",
    Children: <AddPlacePopup onClose={handleClosePopup} />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const currentUser = {};

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
              onClick={() => handleOpenPopup(newCardPopup)}
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
      {Popup && (
        <Popup onClose={handleClosePopup} title={Popup.title}>
          {Popup.children}
        </Popup>
      )}
    </main>
  );
}
