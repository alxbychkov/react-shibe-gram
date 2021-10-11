import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [inFavorite, setFavorites] = React.useState(props.inFavorite);

    const onFavoriteBtn = () => {
        props.onFavorite(props.image);
        setFavorites(!inFavorite);
    }

    const onDeleteBtn = () => {
        props.onDelete(props.image);
    }

    return (
        <div className={styles.card__item}>
            <div className={styles.card__item__image}>
                <div className={`${styles.card__item__btn__favorite} ${inFavorite ? styles.active : ''}`} onClick={onFavoriteBtn}></div>
                {
                    props.filtered || <div className={styles.card__item__btn__delete} onClick={onDeleteBtn}></div>
                }
                <img width={182} height={182} src={props.image} alt={props.image} />
            </div>
            <div className={styles.card__item__title}>
                {props.image.split('/')[4]}
            </div>
        </div>
    )
}

export default Card;