import Card from '../components/Card';

const Favorites = ({ items, onAddToFav }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>
                    Мои закладки
                </h1>
            </div >
            <div className="d-flex  flex-wrap p-40 ">
                {items.map((item, index) => (
                    <Card
                        mainId={index}
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