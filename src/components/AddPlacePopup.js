import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

export default function AddPlacePopup({isOpen,onClose,onAddPlaceSubmit}){
     
     const [name, setName] = useState('');
     const [link, setLink] = useState('');
           
    function handleSubmit(e){
        e.preventDefault();
        onAddPlaceSubmit({name,link});
    }

    function onNameChange(e){
        setName(e.target.value);
    }

    function onLinkChange(e){
        setLink(e.target.value);
    }

    return(
        <PopupWithForm
          onSubmit={handleSubmit}
          title="Create place"
          onClose={onClose}
          name="add__form"
          isOpen={isOpen}
          buttonText="Create"
        >
          <div className="popup__form-control">
            <input
              type="text"
              className="popup__form-input"
              id="inputTitle"
              placeholder="Title"
              name="form__title"
              required
              minLength="1"
              maxLength="30"
              onChange={onNameChange}
            />
            <p className="popup__form-errorMsg" id="inputTitle-error"></p>
          </div>
          <div className="popup__form-control">
            <input
              id="inputLink"
              type="url"
              className="popup__form-input"
              placeholder="Image link"
              name="form__imageLink"
              onChange={onLinkChange}
              required
            />
            <p className="popup__form-errorMsg" id="inputLink-error"></p>
          </div>
        </PopupWithForm>
    )
}