import React from "react";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

const arrCards = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageURL: "/img/sneakers/1.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 13333, imageURL: "/img/sneakers/2.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 14444, imageURL: "/img/sneakers/3.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 2705', price: 12222, imageURL: "/img/sneakers/4.jpg" }
]
const App = () => {

  const [cartOpened, setCartOpened] = React.useState(false);
  return (

    <div className="wrapper clear">
      <Drawer />
      <Header />
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
