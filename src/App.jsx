import { Route, Routes } from "react-router-dom";

import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from './components/Drawer';
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

// const arrCards = []
const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorits, setFavorits] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Items').then(res => {
      setItems(res.data);
    });
    axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart').then(res => {
      setCartItems(res.data);
    });
    axios.get('https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits').then(res => {
      setFavorits(res.data);
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart', obj);
    setCartItems(prev => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    console.log('id: ', id);
    // axios.delete(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart/${id}`);
    // setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  const onAddToFav = (obj) => {
    if (favorits.find(obj => obj.id === obj.id)) {
      axios.delete('https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits/${obj.id}');
      setFavorits((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits', obj);
      setFavorits(prev => [...prev, obj]);
    }
  }

  const onRemoveFromFav = (id) => {
    axios.delete(`https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits/${id}`);
    setFavorits(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickClear = () => {
    setSearchValue('')
  }

  return (
    <div className="wrapper clear">
      {
        cartOpened ?
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          /> : null}
      <Header
        onClickCart={() => setCartOpened(true)}
      />

      <Routes>
        <Route path="/" element={<Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFav={onAddToFav}
          onAddToCart={onAddToCart}
          onClickClear={onClickClear}
        />} />

        <Route path="/favorites" element={<Favorites
          items={favorits}
          onAddToFav={onAddToFav} />} />
      </Routes>


    </div >
  );
}

export default App;
