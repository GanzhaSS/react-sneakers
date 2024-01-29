import React from 'react';
import AppContext from './Context';

const Info = ({ title, image, description }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="d-flex align-center justify-center flex-column flex">
            <img className="mb-20" src={image} alt="Empty Cart" />
            <h2>{title}</h2>
            <p className="opacity-6">
                {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                Вернуться
            </button>
        </div>
    )
}

export default Info;