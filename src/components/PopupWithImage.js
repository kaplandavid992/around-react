import exitIcon from '../images/exit_icon.png';

function PopupWithImage(){
    return (
        <div className="popup" id="imagePopUp">
        <div className="popup__window popup__window_imagePopUp">
          <button className="popup__exit-btn" type="reset" aria-label="">
            <img
              className="popup__exit-icon"
              src={exitIcon}
              alt="exit icon button"
            />
          </button>
          <img src=" " className="popup__imagePopUp" alt=" " />
          <p className="popup__imagePopUp-text"></p>
        </div>
      </div>
    )
}

export default PopupWithImage;