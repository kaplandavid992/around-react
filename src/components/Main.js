import Footer from './Footer.js';
import editImagePen from '../images/editImagePen.png';
import React from 'react';

function handleEditAvatarClick(){
    // formValidators["editProfileImage__form"].resetValidation();
    // editProfileImgPopup.open();
    const avatarPopup = document.querySelector("#editProfileImage__form");
    avatarPopup.classList.add("popup_active");
}

function handleEditProfileClick(){
  const editPopup = document.querySelector("#edit__form");
    editPopup.classList.add("popup_active");
    // formValidators["edit__form"].resetValidation();
    // const userData = profileUserInfo.getUserInfo();
    // inputName.setAttribute("value", userData.name);
    // inputRole.setAttribute("value", userData.role);
    // editPopup.open();
//     const pop = document.querySelector(".");
//     pop
}

function handleAddPlaceClick(){
  const addPopup = document.querySelector("#add__form");
    addPopup.classList.add("popup_active");
//     formValidators["add__form"].resetValidation();
//     addPopup.open();
}

function Main(){
return (
      <>
      <section className="profile">
        <div className="profile__imageContainer">
          <img
            className="profile__image"
            src="<%=require('./images/profileone.jpg')%>"
            alt="face of person matching profile"
          />

          <img
            className="profile__editImage"
            src={editImagePen}
            alt="edit image pen icon"
            onClick={handleEditAvatarClick}
          />
        </div>

        <div className="profile__text-container">
          <div className="profile__name-edit-container">
            <h1 className="profile__name"></h1>
            <button
              onClick={handleEditProfileClick}
              className="button profile__edit-btn"
              type="button"
              aria-label=""
            ></button>
          </div>
          <p className="profile__role"></p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="button profile__add-btn"
          type="button"
          aria-label=""
        ></button>
      </section>
      
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>

      <Footer />
      </>
)
}


export default Main;