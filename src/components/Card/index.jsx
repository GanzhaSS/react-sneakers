import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../Context";

const Card = ({
    id,
    title,
    price,
    imageURL,
    onClickAdd,
    onClickFav,
    isFavorite = false,
    isLoading = false }) => {
    const { isItemAdded } = React.useContext(AppContext);
    const [itemFavorite, setItemFavorite] = React.useState(isFavorite);

    // console.log(`card ${id} is added: ${isItemAdded(id)}`);
    console.log(title, isItemAdded(id));
    const onClickPlus = () => {
        onClickAdd({ id, title, imageURL, price });
    }
    const onClickAddFav = () => {
        onClickFav({ id, title, imageURL, price });
        setItemFavorite(!itemFavorite);
    }

    return (
        <div className={styles.card}>
            {
                isLoading ? <ContentLoader
                    speed={2}
                    width={160}
                    height={230}
                    viewBox="0 0 150 230"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ece8eb">
                    <rect x="418" y="349" rx="2" ry="2" width="140" height="10" />
                    <rect x="418" y="365" rx="2" ry="2" width="140" height="10" />
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="109" />
                    <rect x="0" y="133" rx="10" ry="10" width="150" height="15" />
                    <rect x="2" y="153" rx="10" ry="10" width="90" height="15" />
                    <rect x="0" y="188" rx="10" ry="10" width="80" height="24" />
                    <rect x="118" y="180" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : <>
                    <div className={styles.favorite} onClick={onClickAddFav}>
                        <img
                            src={itemFavorite ? "/img/icons/liked.svg" : "/img/icons/unliked.svg"}
                            alt="Unliked" />
                    </div>
                    <img width={130} height={120} src={imageURL} alt="" />
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
                                src={isItemAdded(id) ? "/img/icons/btn-plus-filled.svg" : "/img/icons/btn-plus-empty.svg"}
                                alt="Plus" />
                        </div>
                    </div>
                </>
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>
    )
};

export default Card; 