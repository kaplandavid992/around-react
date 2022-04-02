import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Header from "./Header.js";
import Main from "./Main.js";
import React from "react";


function App() {
  return (
    <div className="page">
      <PopupWithForm title="Edit Profile" name="edit__form">
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
      <PopupWithForm title="Create place" name="add__form">
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
        title="Change profile picture"
        name="editProfileImage__form"
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
      <PopupWithForm title="Are you sure?" name="confirmDelete__form">
        <button className="popup__form-submit-btn" type="submit" aria-label="">
          Yes
        </button>
      </PopupWithForm>
      <PopupWithImage/>
      <Header />
      <Main />
      <template id="card-template">
        <li className="elements__element">
          <img src=" " alt=" " className="elements__image" />
          <button className="button elements__delete-icon"></button>
          <div className="elements__rectangle">
            <h2 className="elements__text"></h2>
            <div className="elements__likesContainer">
              <button
                className="button elements__like-btn"
                type="button"
                aria-label=""
              ></button>
              <p className="elements__likesNumber"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
