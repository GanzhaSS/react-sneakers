import React from "react";
import styles from "./Card.module.scss";

console.log(styles);

const Card = (props) => {
    const [isAdded, setAdd] = React.useState(false);

    const handleAdd = () => {
        setAdd(!isAdded);
        console.log(props.title + isAdded);
    }

    React.useEffect(() => {
        console.log('Переменная изменилась');
    }, [isAdded]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFav}>
                <img src="/img/icons/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageURL} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <div>
                    <img className={styles.plus} onClick={handleAdd} src={isAdded ? "/img/icons/btn-plus-filled.svg" : "/img/icons/btn-plus-empty.svg"} alt="Plus" />
                </div>
            </div>
        </div>
    )
};

export default Card; 