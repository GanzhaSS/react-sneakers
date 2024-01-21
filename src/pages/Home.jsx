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
                            onClickAdd={(obj) => {
                                onAddToCart(obj);

                            }}
                            onClickFav={(obj) => {
                                onAddToFav(obj);
                            }
                            }
                            {...item} />
                    ))}

            </div>
        </div >
    );
}

export default Home;