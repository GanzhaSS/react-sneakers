import Card from '../components/Card';

function Home({ items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFav,
    onAddToCart,
    onClickClear }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                < h1 > {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"} </h1>
                <div className="search-block d-flex">
                    <img src="/img/icons/search.svg" alt="Search" />
                    {searchValue ? <img className="clear" onClick={onClickClear} src="/img/icons/btn-remove.svg" alt="Clear" /> : null}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
                </div>

            </div >
            <div className="d-flex  flex-wrap p-40 ">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            onClickAdd={(obj) => {
                                onAddToCart(obj);
                                console.log(obj);
                            }}
                            onClickFav={(obj) => {
                                onAddToFav(obj);
                                // obj.itemFavorite ? onAddToFav(obj) : onRemoveFromFav(obj.id);
                                console.log('Добавили в закладки');
                            }
                            } />
                    ))}

            </div>
        </div >
    );
}

export default Home;