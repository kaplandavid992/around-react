import Footer from './Footer.js';
import editImagePen from '../images/editImagePen.png';
import React from 'react';
import {api} from '../utils/api.js'

function Main(props){
  const [userName, setUserName] = React.useState('Loading Name...');
  const [userDescription, setUserDescription] = React.useState('Loading Role...');
  const [userAvatar, setUserAvatar] = React.useState('../images/loader.gif');
  React.useEffect(() => {
    let userId;
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resUser, resCards]) => {
      userId = resUser._id;
      setUserDescription(resUser.about);
      setUserAvatar(resUser.avatar);
      setUserName(resUser.name);
      const cards = Array.from(resCards);
      cards.forEach((card) => {
        console.log('');
        // gallery.addItem(createCard(card));
      });
    })
    .catch(console.log);  
  });

  return (
      <>
      <section className="profile">
        <div className="profile__imageContainer">
          <img
            className="profile__image"
            src={userAvatar}
            alt="face of person matching profile"
          />

          <img
            className="profile__editImage"
            src={editImagePen}
            alt="edit image pen icon"
            onClick={props.onEditAvatarClick}
          />
        </div>

        <div className="profile__text-container">
          <div className="profile__name-edit-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              className="button profile__edit-btn"
              type="button"
              aria-label=""
            ></button>
          </div>
          <p className="profile__role">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
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