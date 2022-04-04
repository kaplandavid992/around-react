function Card({ card, likesCount, onCardClick, text }) {
  function handleClick() {
    onCardClick(card, text);
  }
  return (
    <li className="elements__element">
      <img
        src={card}
        alt=" "
        className="elements__image"
        onClick={handleClick}
      />
      <button className="button elements__delete-icon"></button>
      <div className="elements__rectangle">
        <h2 className="elements__text">{text}</h2>
        <div className="elements__likesContainer">
          <button
            className="button elements__like-btn"
            type="button"
            aria-label=""
          />
          <p className="elements__likesNumber">{likesCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
