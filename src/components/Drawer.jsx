const Drawer = ({ onClose, items = [], onRemove }) => {
    return (
        <div className="overlay">
            <div className="drawer  d-flex flex-column">
                <h2 className="d-flex mb-30 justify-between">
                    Корзина
                    <img onClick={onClose} className="btnRemove" src="/img/icons/btn-remove.svg" alt="Click" />
                </h2>
                {
                    items.length > 0 ?
                        <div>
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
                                <button className="greenButton">
                                    Оформить заказ
                                    <img src="/img/icons/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        :
                        <div className="d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" src="/img/icons/empty_cart.svg" alt="Empty Cart" />
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">
                                Добавьте хотя бы одну пару кроссовок, чтобы сдлать заказ
                            </p>
                            <button onClick={onClose} className="greenButton">
                                Вернуться
                            </button>
                        </div>
                }
            </div>
        </div>
    )
};

export default Drawer;