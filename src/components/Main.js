import Footer from './Footer.js';
import editImagePen from '../images/editImagePen.png';
import React from 'react';

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
          />
        </div>

        <div className="profile__text-container">
          <div className="profile__name-edit-container">
            <h1 className="profile__name"></h1>
            <button
              className="button profile__edit-btn"
              type="button"
              aria-label=""
            ></button>
          </div>
          <p className="profile__role"></p>
        </div>
        <button
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