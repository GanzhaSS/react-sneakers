import React from "react";
import styles from "./Card.module.scss";

console.log(styles);

const Card = ({ title,
    price,
    imageURL,
    onClickAdd,
    onClickFav }) => {

    const [isAdded, setAdded] = React.useState(false);
    const [itemFavorite, setItemFavorite] = React.useState(false);

    const onClickPlus = () => {
        onClickAdd({ title, imageURL, price });
        setAdded(!isAdded);
    }
    const onClickAddFav = () => {
        onClickFav({ title, imageURL, price });
        setItemFavorite(!itemFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickAddFav}>
                <img
                    src={itemFavorite ? "/img/icons/liked.svg" : "/img/icons/unliked.svg"}
                    alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageURL} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <div>
                    <img
                        className={styles.plus}
                        onClick={onClickPlus}
                        src={isAdded ? "/img/icons/btn-plus-filled.svg" : "/img/icons/btn-plus-empty.svg"}
                        alt="Plus" />
                </div>
            </div>
        </div>
    )
};

export default Card; 