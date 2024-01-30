import React from 'react';
import AppContext from './components/Context';

const Info = ({ title, image, description }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="d-flex align-center m-10 justify-center flex-column flex">
            <img className="mb-20" src={image} alt="Empty Cart" />
            <h2>{title}</h2>
            <p className="opacity-6 mb-20 mt-20">
                {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                Вернуться
            </button>
        </div>
    )
}

export default Info;