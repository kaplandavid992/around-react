import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header.js";
import Main from "./Main.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import api from "../utils/api.js";
import loader from "../images/loader.gif";


function App() {
  
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "Loading Name...",
    about: "Loading Role...",
    avatar: loader,
  });
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(cardId, likesData) {
    const isLiked = likesData.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(cardId, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === cardId ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(cardId) {
    api
      .confirmDelete(cardId)
      .then(setCards(cards.filter((item) => item._id !== cardId)));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardLink, cardText) {
    setIsImagePopupOpen(true);
    setSelectedCard({ ...selectedCard, link: cardLink, text: cardText });
  }

  function handleAddPlace(inputFields){
    api
      .postNewCard(inputFields)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.log);
  }

  function handleUpdateUser(inputFields) {
    api
      .editUserInfo(inputFields)
      .then((resUser) => {
        setCurrentUser(resUser);
        closeAllPopups();
      })
      .catch(console.log);
  }

  function handleUpdateAvatar(imageLink) {
    api
      .editAvatarImage(imageLink)
      .then((resUser) => {
        setCurrentUser(resUser);
        closeAllPopups();
      })
      .catch(console.log);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((resUser) => {
        setCurrentUser(resUser);
      })
      .catch(console.log);
  }, []);
  
  useEffect(() => {
    api
      .getInitialCards()
      .then((resCards) => {
        setCards(Array.from(resCards));
      })
      .catch(console.log);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlace}
        />
        <PopupWithForm
          onClose={closeAllPopups}
          title="Are you sure?"
          name="confirmDelete__form"
          buttonText="Yes"
        ></PopupWithForm>
        <ImagePopup
          card={selectedCard.link}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
          text={selectedCard.text}
        />
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
