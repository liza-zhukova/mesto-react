function PopupWithForm(props){
    
    //расставить пропсы

    return(
        <div className={`popup popup_type_${props.name}`}   /*id="profilePopup"*/>
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

export default PopupWithForm;