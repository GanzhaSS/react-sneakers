import React from "react";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

// const arrCards = []
const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, [])

  const onAddToCart = (obj) => {
    // alert('123');
    console.log(obj);
    if (!cartItems.includes(obj)) {
      setCartItems(prev => [...prev, obj]);
    }
  }

  return (

    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/img/icons/search.svg" alt="Search" />
          <input placeholder="Поиск ..." />
        </div>
      </div>
      <div className="d-flex  flex-wrap p-40 ">
        {items.map((item, index) => (
          <Card
            key={index}
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
