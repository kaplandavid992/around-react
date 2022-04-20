import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header.js";
import Main from "./Main.js";
import EditProfilePopup from "./EditProfilePopup.js"
import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import loader from "../images/loader.gif";

function App() {

  const [currentUser, setCurrentUser] = useState({ name: 'Loading Name...', about:'Loading Role...', avatar:loader,});
  // const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  
  useEffect(() => {
    api.getUserInfo().then((resUser) => {
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

  function handleUpdateUser(inputFields){
    console.log(inputFields);
        api.editUserInfo(inputFields).then((resUser) => {
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
      <PopupWithForm
        onClose={closeAllPopups}
        title="Change profile picture"
        name="editProfileImage__form"
        isOpen={isEditAvatarPopupOpen}
        buttonText="Save"
      >
        <div className="popup__form-control">
          <input
            id="inputImageLink"
            type="url"
            className="popup__form-input"
            placeholder="Insert new image link"
            name="form__imageLink"
            value=""
            required
          />
          <p className="popup__form-errorMsg" id="inputImageLink-error"></p>
        </div>
      </PopupWithForm>
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
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
