function Card({card}){
    return(
        <div className="element__card">
            <img className="element__card-img"  src={card.link} alt={card.name}/>
            <div className="element__card-item">
                <h2 className="element__card-item-text">{card.name}</h2>
                <div className="element__card-item_like-container">
                    <button className="element__card-item-like" type="button" aria-label="лайк"></button>
                    <p className ="element__card-item-like-number">{card.likes.length}</p>
                </div>
            </div>
            <button className="element__card-delete" aria-label="удалить"></button>
        </div>
    )
};

export default Card;