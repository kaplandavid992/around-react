import aroundUsLogo from './images/logoAroundUS.svg';
import editImagePen from './images/editImagePen.png';
import exitIcon from './images/exit_icon.png'

function App() {
  return (
      <body className="page">
    <div className="popup" id="editProfile">
      <div className="popup__window">
        <button className="popup__exit-btn" type="reset" aria-label="">
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>
        <form
          className="popup__form"
          name="edit__form"
          id="editProfileForm"
          novalidate
        >
          <h2 className="popup__form-header">Edit profile</h2>
          <div className="popup__form-control">
            <input
              id="inputName"
              type="text"
              className="popup__form-input"
              placeholder="Name"
              name="form__name"
              value=""
              required
              maxlength="40"
              minlength="2"
            />
            <p className="popup__form-errorMsg" id="inputName-error"></p>
          </div>
          <div className="popup__form-control">
            <input
              id="inputRole"
              type="text"
              className="popup__form-input"
              placeholder="About me"
              name="form__role"
              value=""
              required
              maxlength="200"
              minlength="2"
            />
            <p className="popup__form-errorMsg" id="inputRole-error"></p>
          </div>
          <button className="popup__form-submit-btn" type="submit" aria-label="">
            Save
          </button>
        </form>
      </div>
    </div>

    <div className="popup" id="addImage">
      <div className="popup__window">
        <button className="popup__exit-btn" type="reset" aria-label="">
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>

        <form
          className="popup__form"
          name="add__form"
          id="createNewPlaceForm"
          novalidate
        >
          <h2 className="popup__form-header">Create place</h2>
          <div className="popup__form-control">
            <input
              type="text"
              className="popup__form-input"
              id="inputTitle"
              placeholder="Title"
              name="form__title"
              required
              minlength="1"
              maxlength="30"
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
              required
            />
            <p className="popup__form-errorMsg" id="inputLink-error"></p>
          </div>
          <button
            className="popup__form-submit-btn popup__form-submit-btn_inactive"
            type="submit"
            aria-label=""
            disabled
          >
            Create
          </button>
        </form>
      </div>
    </div>

    <div className="popup" id="editProfileImage">
      <div className="popup__window">
        <button className="popup__exit-btn" type="reset" aria-label="">
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>
        <form
          className="popup__form"
          name="editProfileImage__form"
          id="editProfileImageForm"
          novalidate
        >
          <h2 className="popup__form-header">Change profile picture</h2>
          <div className="popup__form-control">
            <input
              id="inputImageLink"
              type="url"
              className="popup__form-input"
              placeholder="Insert new image link"
              name="form__imageLink"
              value=""
              required
            />
            <p className="popup__form-errorMsg" id="inputImageLink-error"></p>
          </div>
          <button className="popup__form-submit-btn" type="submit" aria-label="">
            Save
          </button>
        </form>
      </div>
    </div>

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

    <div className="popup" id="confirmDelete">
      <div className="popup__window">
        <button className="popup__exit-btn" type="reset" aria-label="">
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>
        <form
          className="popup__form"
          name="confirmDelete__form"
          id="confirmDeleteForm"
          novalidate
        >
          <h2 className="popup__form-header">Are you sure?</h2>  
          <button className="popup__form-submit-btn" type="submit" aria-label="">
            Yes
          </button>
        </form>
      </div>
    </div>

    <header className="header">
      <img
        src={aroundUsLogo}
        alt="around the us logo"
        className="header__title-logo"
      />
    </header>

    <main>
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
      <footer className="footer">
        <p className="footer__text">© 2022 Around The U.S.</p>
      </footer>
    </main>

    <template id="card-template">
      <li className="elements__element">
        <img src=" " alt=" " className="elements__image" />
        <button className="button elements__delete-icon"></button>
        <div className="elements__rectangle">
          <h2 className="elements__text"></h2>
          <div className="elements__likesContainer">
            <button
              className="button elements__like-btn"
              type="button"
              aria-label=""
            ></button>
            <p className="elements__likesNumber"></p>
          </div>
        </div>
      </li>
    </template>
  </body>
  );
}

export default App;
