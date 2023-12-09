const Drawer = (props) => {
    console.log(props);
    return (
        <div className="overlay">
            <div className="drawer  d-flex flex-column">
                <h2 className="d-flex mb-30 justify-between">
                    Корзина
                    <img onClick={props.onClickClose} className="btnRemove" src="/img/icons/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}></div>
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="btnRemove" src="/img/icons/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" /> */}
                        <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}></div>
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="btnRemove" src="/img/icons/btn-remove.svg" alt="Remove" />
                    </div>

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