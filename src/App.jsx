import React from "react";
import axios from "axios";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

// const arrCards = []
const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Items').then(res => {
      setItems(res.data);
    });
    axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart').then(res => {
      setCartItems(res.data);
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart', obj);
    setCartItems(prev => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickClear = () => {
    setSearchValue('')
  }

  return (

    <div className="wrapper clear">
      {cartOpened ?
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        /> : null}
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40 d-flex align-center justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="/img/icons/search.svg" alt="Search" />
          {searchValue ? <img className="clear" onClick={onClickClear} src="/img/icons/btn-remove.svg" alt="Clear" /> : null}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
        </div>
      </div>
      <div className="d-flex  flex-wrap p-40 ">
        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index + item.title}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onClickAdd={(obj) => {
                onAddToCart(obj);
                console.log(obj);
              }}
              onClickFav={() => console.log('Добавили в закладки')} />
          ))}

      </div>
    </div >
  );
}

export default App;
