import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  
 
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


  return (
    <div className="page">
      <Header />

      <Main onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick}/>

      <Footer />

      <PopupWithForm
      name='popup__profile'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      buttonName='Сохранить'
      onClose={closeAllPopups}>
      <label className="popup__container-field">
        <input id="name-input" className="popup__container-item" type="text" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
        <span className="name-input-error popup__container-error"></span>
      </label>  
      <label className="popup__container-field">
        <input id="opinion-input" className="popup__container-item" type="text" placeholder="О себе" name="about" required minLength="2" maxLength="200" />
        <span className="opinion-input-error popup__container-error"></span>
      </label>
      </PopupWithForm>

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

      <PopupWithForm
      name='popup__edit-avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      buttonName='Сохранить'
      onClose={closeAllPopups}>
      <label className="popup__container-field">
        <input id="avatar-input" className="popup__container-item" type="url" placeholder="Ссылка на картинку" name="avatar" required />
        <span className="avatar-input-error popup__container-error"></span>
      </label>
      </PopupWithForm>

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
  )
}

export default App;  