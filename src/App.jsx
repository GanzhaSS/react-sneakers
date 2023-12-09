import React from "react";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

const arrCards = []
const App = () => {

  const [cartOpened, setCartOpened] = React.useState(false);
  return (

    <div className="wrapper clear">
      {cartOpened ? <Drawer onClickClose={() => setCartOpened(false)} /> : null}
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
      <div className="d-flex  flex-wrap m-40">
        {arrCards.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageURL={obj.imageURL}
            onClickAdd={() => {
              console.log(`Добавили в корзину раз `);
            }}
            onClickFav={() => console.log('Добавили в закладки')} />
        ))}

      </div>
    </div >
  );
}

export default App;
