function Card(props) {
  function handleClick() {
    props.onCardClick(props.card, props.text);
  }
  return (
    <li className="elements__element" key={props.key} onClick={handleClick}>
      <img src={props.card} alt=" " className="elements__image" />
      <button className="button elements__delete-icon"></button>
      <div className="elements__rectangle">
        <h2 className="elements__text">{props.text}</h2>
        <div className="elements__likesContainer">
          <button
            className="button elements__like-btn"
            type="button"
            aria-label=""
          ></button>
          <p className="elements__likesNumber">{props.likesCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
