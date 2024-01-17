import Card from '../components/Card';

const Favorites = ({ items }) => {
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
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageURL}
                    />
                ))}
            </div>
        </div >
    )
};

export default Favorites;