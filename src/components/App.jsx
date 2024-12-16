import React, { useState, useEffect, useRef } from "react";
import Header from "./Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import api from "../utils/api.js";
import ConfirmDeletePopup from "./ConfirmDeletePopup.jsx";
import ImagePopup from "../components/Main/components/Popup/ImagePopup/ImagePopup.jsx";
import EditProfile from "../components/Main/components/Popup/EditProfile/EditProfile.jsx";
import EditAvatar from "../components/Main/components/Popup/EditAvatar/EditAvatar.jsx";
import AddPlacePopup from "../components/Main/components/Popup/NewCard/NewCard.jsx";
import Footer from "./Footer/Footer.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(`Error obteniendo los datos del usuario: ${err}`);
      });
    const handleEscKey = (evt) => {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleDeletePopupClick(card) {
    setCardToDelete(card);
    setIsDeletePopupOpen(true);
  }

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    const likes = card.likes || [];
    const isLiked = likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(`Error al dar/retirar like: ${err}`));
  }
  async function handleCardDelete(card) {
    if (!cardToDelete) {
      return;
    }
    return api
      .deleteCard(cardToDelete._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        console.log("Tarjeta eliminada correctamente");
        closeAllPopups();
      })
      .catch((err) => console.error(`Error al eliminar la tarjeta: ${err}`));
  }

  async function handleAddPlaceSubmit({ link, name }) {
    return api
      .createCard(link, name)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al añadir nueva tarjeta ${err}`);
      });
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const handleUpdateAvatar = (avatar) => {
    api
      .updateAvatar(avatar)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al actualizar el avatar: ${err}`);
      });
  };

  async function onUpdateUser(name, about) {
    return api
      .updateUserProfile(name, about)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al actualizar el perfil: ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsDeletePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          cards={cards}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeletePopupClick}
        />

        <EditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={onUpdateUser}
        />

        <ConfirmDeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleCardDelete}
        ></ConfirmDeletePopup>

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <EditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
