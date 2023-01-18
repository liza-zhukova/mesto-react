import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  };

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  };


  return (
    <div className="page">
      <Header />
      <Main handleEditProfileClick={handleEditProfileClick} 
            handleAddPlaceClick={handleAddPlaceClick} 
            handleEditAvatarClick={handleEditAvatarClick} />
      <Footer />
      {  
      //вставить через компонент PopupWithForm
      
        isEditProfilePopupOpen && (
          <div className="popup" id="profilePopup">
            <div className="popup__container" id="profilePopupContainer">
              <h2 className="popup__container-title">Редактировать профиль</h2>
              <form className="popup__container-form" method="post" name="myForm" noValidate>
                  <label className="popup__container-field">
                    <input id="name-input" className="popup__container-item" type="text" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
                    <span className="name-input-error popup__container-error"></span>
                  </label>  
                  <label className="popup__container-field">
                    <input id="opinion-input" className="popup__container-item" type="text" placeholder="О себе" name="about" required minLength="2" maxLength="200" />
                    <span className="opinion-input-error popup__container-error"></span>
                  </label>
                  <button type="submit" className="popup__container-button">Сохранить</button>
              </form>
              <button className="popup__close" id ="closeEditButton" type="button" aria-label="закрыть"></button>
            </div>
          </div>
        )
      }
      {
        isAddPlacePopupOpen && (
          <div className="popup" id="addCardPopup">
            <div className="popup__container" id="addPopupContainer">
              <h2 className="popup__container-title">Новое место</h2>
              <form className="popup__container-form" method="post" name="cardForm" noValidate>
                <label className="popup__container-field">
                  <input id="title-input" className="popup__container-item" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30" />
                  <span className="title-input-error popup__container-error"></span>
                </label>
                <label className="popup__container-field">
                  <input id="link-input" className="popup__container-item" type="url" placeholder="Ссылка на картинку" name="link" required />
                  <span className="link-input-error popup__container-error"></span>
                </label>
                <button type="submit" className="popup__container-button">Создать</button>
              </form>
              <button className="popup__close" id ="closeAddButton" type="button" aria-label="закрыть"></button>
            </div>
          </div>
        )
      }
      {
        isEditAvatarPopupOpen && (
          <div className="popup" id="editAvatarPopup">
            <div className="popup__container" id="editAvatarPopupContainer">
              <h2 className="popup__container-title">Обновить аватар</h2>
              <form className="popup__container-form" method="post" name="userAvatar" noValidate>
                <label className="popup__container-field">
                  <input id="avatar-input" className="popup__container-item" type="url" placeholder="Ссылка на картинку" name="avatar" required />
                  <span className="avatar-input-error popup__container-error"></span>
                </label>
                <button type="submit" className="popup__container-button">Сохранить</button>
              </form>
              <button className="popup__close" id ="closeavatarButton" type="button" aria-label="закрыть"></button>
            </div>
          </div>
        )
      }
    </div> 
  )
}

export default App;  

//готовая разметка JSX

      // {
      //   isCardPopup && (
      //     <div className="popup popup_photo" id="cardPopup">
      //       <div className="popup__photo-container" id="cardPopupContainer">
      //         <img className="popup__photo-big" />
      //         <p className='popup__photo-container-title'></p>
      //         <button className="popup__close" id="closeCardButton" type="button" aria-label="закрыть"></button>
      //       </div>
      //     </div>
      //   )
      // }

      // {
      //   isDeletePopup && (
      //     <div className="popup" id="deletePopup">
      //       <div className="popup__container" id="deletePopupContainer">
      //         <h2 className="popup__container-title">Вы уверены?</h2>  
      //         <form className="popup__container-form popup__container-form_delete" method="post" name="deleteCard" novalidate>
      //             <button type="submit" className="popup__container-button">Да</button>
      //         </form>
      //         <button className="popup__close" id ="closedeleteButton" type="button" aria-label="закрыть"></button>
      //       </div>
      //     </div>
      //   )
      // }