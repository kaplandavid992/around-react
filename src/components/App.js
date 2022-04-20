import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header.js";
import Main from "./Main.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import loader from "../images/loader.gif";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((resCards) => {
        setCards(Array.from(resCards));
      })
      .catch(console.log);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api
      .confirmDelete(card._id)
      .then(setCards(cards.filter((item) => item !== card)));
  }


  const [currentUser, setCurrentUser] = useState({
    name: "Loading Name...",
    about: "Loading Role...",
    avatar: loader,
  });
  // const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((resUser) => {
        setCurrentUser(resUser);
      })
      .catch(console.log);
  }, []);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
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

  function handleUpdateUser(inputFields) {
    console.log(inputFields);
    api
      .editUserInfo(inputFields)
      .then((resUser) => {
        setCurrentUser(resUser);
        closeAllPopups();
      })
      .catch(console.log);
  }

  function handleUpdateAvatar(imageLink) {
    api.editAvatarImage(imageLink)
      .then((resUser) => {
        setCurrentUser(resUser);
        closeAllPopups();
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          title="Create place"
          onClose={closeAllPopups}
          name="add__form"
          isOpen={isAddPlacePopupOpen}
          buttonText="Create"
        >
          <div className="popup__form-control">
            <input
              type="text"
              className="popup__form-input"
              id="inputTitle"
              placeholder="Title"
              name="form__title"
              required
              minLength="1"
              maxLength="30"
            />
            <p className="popup__form-errorMsg" id="inputTitle-error"></p>
          </div>
          <div className="popup__form-control">
            <input
              id="inputLink"
              type="url"
              className="popup__form-input"
              placeholder="Image link"
              name="form__imageLink"
              required
            />
            <p className="popup__form-errorMsg" id="inputLink-error"></p>
          </div>
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
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
