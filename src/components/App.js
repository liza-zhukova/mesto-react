import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() =>{
    api.getProfileInfo()
    .then((res) => {
        setCurrentUser(res);   
  })
.catch((err) => console.log(err));
    api.getCards()
    .then((res) => {
      setCards(res);   
  })
.catch((err) => console.log(err));
}, []);
  
 
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  };

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  };

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  function handleCardClick(card){
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  function handleCardDelete(card){
  api
    .deleteCard(card._id)
    .then(() => {
        setCards(items => items.filter(item => item._id !== card._id));
    })
    .catch((err) => console.log(err))
  };

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
        
      api
        .changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
  };

  function handleUpdateUser(data){
    api
      .editProfile(data)
      .then((res) =>{
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch ((err) => console.log(err))
  };

  function handleUpdateAvatar (newAvatar) {
    api
      .updateAvatar(newAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />

      <Main onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />

      <Footer />

      <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}>
      </EditProfilePopup>

      <PopupWithForm
        name='popup__add-card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        buttonName='Создать'
        onClose={closeAllPopups}>
          <label className="popup__container-field">
            <input id="title-input" className="popup__container-item" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30" />
            <span className="title-input-error popup__container-error"></span>
          </label>
          <label className="popup__container-field">
            <input id="link-input" className="popup__container-item" type="url" placeholder="Ссылка на картинку" name="link" required />
            <span className="link-input-error popup__container-error"></span>
          </label>
      </PopupWithForm>

      <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      onUpdateAvatar={handleUpdateAvatar}>
      </EditAvatarPopup>

      <PopupWithForm
        name='popup__delete'
        title='Вы уверены?'
        buttonName='Да'
        onClose={closeAllPopups}
        >
      </PopupWithForm>

      <ImagePopup
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      card={selectedCard}>
      </ImagePopup>
    </div> 
  </CurrentUserContext.Provider>
  )
}

export default App;  