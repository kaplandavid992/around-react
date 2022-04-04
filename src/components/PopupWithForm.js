import exitIcon from "../images/exit_icon.png";

function PopupWithForm(props) {
  const isOpen = props.isOpen ? "popup_active" : "";
  return (
    <div className={`popup ${isOpen}`} id={props.name}>
      <div className="popup__window">
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
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__form-header">{props.title}</h2>
          {props.children}
          <button
            className="popup__form-submit-btn"
            type="submit"
            aria-label=""
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
