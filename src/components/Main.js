import { api } from '../utils/api';
import { useEffect, useState } from 'react';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}){

    const [name, setUserName] = useState('');
    const [about, setUserOpinion] = useState([]);
    const [avatar, setUserAvatar] = useState([]);
    const [cards, setCards] = useState([]);
    
    useEffect(() =>{
        api.getProfileInfo()
        .then((res) => {
            setUserName(res.name);
            setUserOpinion(res.about);
            setUserAvatar(res.avatar);   
  })
  .catch((err) => console.log(err));
    }, []);

    useEffect(() =>{
        api.getCards()
        .then((res) => {
            setCards(res);   
  })
  .catch((err) => console.log(err));
    }, []);

    return(
        <main className="main">
        <section className="profile">
            <div className="profile__avatar-container" onClick={onEditAvatar}>
                <img className="profile__avatar" src={`${avatar}`}/>
                <button className="profile__avatar-edit" type="button" aria-label="аватар профиля"></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-name">{name}</h1>
                <button className="profile__info-edit-button" onClick={onEditProfile} type="button" aria-label="редактировать профиль"></button>
                <p className="profile__info-opinion">{about}</p>
            </div>
            <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="добавить карточку"></button>
        </section>
        <section className="cards">
            <div className="element">
                { cards.map(card =>(
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                    />
                ))}
            </div>
        </section>
    </main>
    )
}

export default Main;