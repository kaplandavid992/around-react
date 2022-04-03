import Footer from './Footer.js';
import editImagePen from '../images/editImagePen.png';
import React from 'react';
import {api} from '../utils/api.js'

function Main(props){
  const [userName, setUserName] = React.useState('Loading Name...');
  const [userDescription, setUserDescription] = React.useState('Loading Role...');
  const [userAvatar, setUserAvatar] = React.useState('../images/loader.gif');
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    // let userId;
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resUser, resCards]) => {
      // userId = resUser._id;
      setUserDescription(resUser.about);
      setUserAvatar(resUser.avatar);
      setUserName(resUser.name);
      setCards(Array.from(resCards));
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
        <ul className="elements__list">
      
        {cards.map((card) => (
          
          <li className="elements__element" key={card._id}>
          <img src={card.link} alt=" " className="elements__image" />
          <button className="button elements__delete-icon"></button>
          <div className="elements__rectangle">
            <h2 className="elements__text">{card.name}</h2>
            <div className="elements__likesContainer">
              <button
                className="button elements__like-btn"
                type="button"
                aria-label=""
              ></button>
              <p className="elements__likesNumber">{card.likes.length}</p>
            </div>
          </div>
        </li>
        ))}

        </ul>
      </section>
      <Footer />
      </>
)
}

export default Main;