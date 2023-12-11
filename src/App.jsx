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

  const onAddToCart = () => {
    alert('123');
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
        {items.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageURL={obj.imageURL}
            onClickAdd={() => {
              onAddToCart();
            }}
            onClickFav={() => console.log('Добавили в закладки')} />
        ))}

      </div>
    </div >
  );
}

export default App;
