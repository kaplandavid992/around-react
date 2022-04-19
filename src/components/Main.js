import Footer from "./Footer.js";
import Card from "./Card.js";
import editImagePen from "../images/editImagePen.png";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { api } from "../utils/api.js";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser.name;
  const about = currentUser.about;
  const avatar = currentUser.avatar;

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

  return (
    <>
      <section className="profile">
        <div className="profile__imageContainer">
          <img
            className="profile__image"
            src={avatar}
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
            <h1 className="profile__name">{name}</h1>
            <button
              onClick={props.onEditProfileClick}
              className="button profile__edit-btn"
              type="button"
              aria-label=""
            ></button>
          </div>
          <p className="profile__role">{about}</p>
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
            <Card
              onCardDelete={handleCardDelete.bind(this, card)}
              onCardLike={handleCardLike.bind(this, card)}
              onCardClick={props.onCardClick}
              key={card._id}
              text={card.name}
              likesCount={card.likes.length}
              card={card.link}
              owner={card.owner._id}
              likesData={card.likes}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Main;
