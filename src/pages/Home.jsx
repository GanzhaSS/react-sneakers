import Card from '../components/Card';
import AppContext from "../components/Context";
import React from 'react';

function Home({ items,
    searchValue,
    setSearchValue,
    cartItems,
    onChangeSearchInput,
    onAddToFav,
    onAddToCart,
    onClickClear,
    isLoadingPage }) {
    const { isItemAdded } = React.useContext(AppContext);
    const renderItems = () => {

        const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (
            isLoadingPage
                ? [...Array(6)]
                : filtredItems).map((item, index) => (
                    <Card
                        key={index}
                        mainId={index}
                        onClickAdd={(obj) => { onAddToCart(obj); }}
                        onClickFav={(obj) => { onAddToFav(obj); }}
                        isAddToCart={isItemAdded(item && item.id)}
                        isLoading={isLoadingPage}
                        {...item} />
                ))
    }


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
                {renderItems()}

            </div>
        </div >
    );
}

export default Home;