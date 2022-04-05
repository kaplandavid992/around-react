import exitIcon from "../images/exit_icon.png";

function ImagePopup(props) {
  const isOpen = props.isOpen ? "popup_active" : "";
  return (
    <div className={`popup ${isOpen}`} id="imagePopUp">
      <div className="popup__window popup__window_imagePopUp">
        <button
          className="popup__exit-btn"
          type="reset"
          aria-label=""
          onClick={props.onClose}
        >
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>
        <img
          src={props.card}
          className="popup__imagePopUp"
          alt={`view of ${props.text}`}
        />
        <p className="popup__imagePopUp-text">{props.text}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
