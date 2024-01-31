import Info from '../Info';
import React from "react";
import AppContext from './Context';
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose,
    items = [],
    onRemove }) => {

    const [isLoadingPage, setIsLoadingPage] = React.useState(false);
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [orderID, setOrderID] = React.useState(null);

    const onClickOrder = async () => {
        try {
            setIsLoadingPage(true);
            const { data } = await axios.post(`https://6581496f3dfdd1b11c42dbc1.mockapi.io/Orders`, { items: cartItems });
            setOrderID(data.id);
            setIsCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const element = cartItems[i];
                await axios.delete(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart/` + element.id);
                await delay(1000);
            }

        } catch (e) {
            alert("Ошибка при создании заказа");
            console.error(`${e.name}: ${e.message}`);
        }
        setIsLoadingPage(false);
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
                                <button disabled={isLoadingPage} onClick={onClickOrder} className="greenButton">
                                    Оформить заказ
                                    <img src="/img/icons/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        :
                        (<Info
                            title={isCompleted ? "Заказ оформлен" : "Корзина пустая"}
                            description={isCompleted ? `Ваш заказ ${orderID} передан курьерской службе` : "Добавьте хотя бы одну пару кроссовок"}
                            image={isCompleted ? "/img/icons/complete_order.svg" : "/img/icons/empty_cart.svg"}
                        />)}
            </div>
        </div>
    )
};

export default Drawer;