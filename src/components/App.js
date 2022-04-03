import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header.js";
import Main from "./Main.js";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
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
    console.log("bbbbbb" + selectedCard);
    setIsImagePopupOpen(true);
    setSelectedCard({ ...selectedCard, link: cardLink, text: cardText });
  }

  return (
    <div className="page">
      <PopupWithForm
        title="Edit Profile"
        name="edit__form"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form-control">
          <input
            id="inputName"
            type="text"
            className="popup__form-input"
            placeholder="Name"
            name="form__name"
            value=""
            required
            maxLength="40"
            minLength="2"
          />
          <p className="popup__form-errorMsg" id="inputName-error"></p>
        </div>
        <div className="popup__form-control">
          <input
            id="inputRole"
            type="text"
            className="popup__form-input"
            placeholder="About me"
            name="form__role"
            value=""
            required
            maxLength="200"
            minLength="2"
          />
          <p className="popup__form-errorMsg" id="inputRole-error"></p>
        </div>
        <button className="popup__form-submit-btn" type="submit" aria-label="">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm
        title="Create place"
        onClose={closeAllPopups}
        name="add__form"
        isOpen={isAddPlacePopupOpen}
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
        <button
          className="popup__form-submit-btn popup__form-submit-btn_inactive"
          type="submit"
          aria-label=""
          disabled
        >
          Create
        </button>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        title="Change profile picture"
        name="editProfileImage__form"
        isOpen={isEditAvatarPopupOpen}
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
        <button className="popup__form-submit-btn" type="submit" aria-label="">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        title="Are you sure?"
        name="confirmDelete__form"
      >
        <button className="popup__form-submit-btn" type="submit" aria-label="">
          Yes
        </button>
      </PopupWithForm>
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
  );
}

export default App;
