import React from "react";
import Info from "./Info";

const Drawer = ({ onClose,
    items = [],
    onRemove }) => {

    const [isCompleted, setIsCompleted] = React.useState(false);
    const onClickOrder = () => {
        setIsCompleted(true);
    }

    return (
        <div className="overlay">
            <div className="drawer  d-flex flex-column">
                <h2 className="d-flex mb-30 justify-between">
                    Корзина
                    <img onClick={onClose} className="btnRemove" src="/img/icons/btn-remove.svg" alt="Click" />
                </h2>
                {
                    items.length > 0
                        ?
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageURL})` }}></div>
                                        <div className="mr-20">
                                            <p className="mb-5">
                                                {obj.title}
                                            </p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="btnRemove" src="/img/icons/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="cartToltalBlock">
                                <ul >
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button onClick={onClickOrder} className="greenButton">
                                    Оформить заказ
                                    <img src="/img/icons/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        :
                        (<Info
                            title="Корзина пустая"
                            description="Добавьте хотя бы одну пару кроссовок"
                            image="/img/icons/empty_cart.svg"
                        />)}
            </div>
        </div>
    )
};

export default Drawer;