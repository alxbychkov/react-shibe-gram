import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [inFavorite, setFavorite] = React.useState(props.inFavorite)
    console.log(props.image, inFavorite);
    const onFavoriteBtn = () => {
        props.onFavorite(props.image);
        setFavorite(!inFavorite);
    }

    const onDeleteBtn = () => {
        props.onDelete(props.image);
    }

    return (
        <div className={styles.card__item}>
            <div className={styles.card__item__image}>
                <div className={`${styles.card__item__btn__favorite} ${inFavorite ? styles.active : ''}`} onClick={onFavoriteBtn}></div>
                <div className={styles.card__item__btn__delete} onClick={onDeleteBtn}></div>
                <img width={182} height={182} src={props.image} alt={props.image} />
            </div>
        </div>
    )
}

export default Card;