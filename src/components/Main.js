function Main({handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick}){

    return(
        <main className="main">
        <section className="profile">
            <div className="profile__avatar-container">
                <img className="profile__avatar" />
                <button className="profile__avatar-edit" onClick={handleEditAvatarClick} type="button" aria-label="аватар профиля"></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                <button className="profile__info-edit-button" onClick={handleEditProfileClick} type="button" aria-label="редактировать профиль"></button>
                <p className="profile__info-opinion">Исследователь океана</p>
            </div>
            <button className="profile__add-button" onClick={handleAddPlaceClick} type="button" aria-label="добавить карточку"></button>
        </section>
        <section className="cards">
            <ul className="element">
                <template id="template">
                    <li className="element__card">
                        <img className="element__card-img" />
                        <div className="element__card-item">
                            <h2 className="element__card-item-text"></h2>
                            <div className="element__card-item_like-container">
                                <button className="element__card-item-like" type="button" aria-label="лайк"></button>
                                <p className ="element__card-item-like-number"></p>
                            </div>
                        </div>
                        <button className="element__card-delete" aria-label="удалить"></button>
                    </li>
                </template>
            </ul>
        </section>
    </main>
    )
}

export default Main;