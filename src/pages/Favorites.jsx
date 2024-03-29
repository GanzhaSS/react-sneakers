import Card from '../components/Card';
import AppContext from '../components/Context';
import React from 'react';

const Favorites = ({ onAddToFav }) => {
    const { favorits } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>
                    Мои закладки
                </h1>
            </div >
            <div className="d-flex  flex-wrap p-40 ">
                {favorits.map((item, index) => (
                    <Card
                        isFavorite={true}
                        onClickFav={onAddToFav}
                        {...item}
                    />
                ))}
            </div>
        </div >
    )
};

export default Favorites;