import styles from "./Card.module.scss";

console.log(styles);

const Card = (props) => {
    console.log(props);
    return (
        <div className={styles.card}>
            <div className={styles.favorite}><img src="/img/icons/unliked.svg" alt="Unliked" /></div>
            <img width={133} height={112} src={props.imageURL} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className={styles.button} onClick={props.onClick}>
                    <img width={11} height={11} src="/img/icons/plus-empty.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
};

export default Card;