const Drawer = ({ onClose, items = [], onRemove }) => {
    return (
        <div className="overlay">
            <div className="drawer  d-flex flex-column">
                <h2 className="d-flex mb-30 justify-between">
                    Корзина
                    <img onClick={onClose} className="btnRemove" src="/img/icons/btn-remove.svg" alt="Click" />
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageURL})` }}></div>
                            <div className="mr-20">
                                <p className="mb-5">
                                    {obj.title}
                                    Мужские Кроссовки Nike Air Max 270
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
                    <button className="greenButton">
                        Оформить заказ
                        <img src="/img/icons/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Drawer;