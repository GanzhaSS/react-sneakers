import React from 'react';

const Info = ({ title, description }) => {
    return (
        <div className="d-flex align-center justify-center flex-column flex">
            <img className="mb-20" src="/img/icons/empty_cart.svg" alt="Empty Cart" />
            <h2>{title}</h2>
            <p className="opacity-6">
                {description}
            </p>
            <button onClick={onClick} className="greenButton">
                Вернуться
            </button>
        </div>
    )
}

export default Info;