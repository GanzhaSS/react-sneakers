import { Route, Routes } from "react-router-dom";

import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from './components/Drawer';
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import AppContext from "./components/Context";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorits, setFavorits] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoadingPage, setIsLoadingPage] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      setIsLoadingPage(true);
      const itemsResponse = await axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Items');
      const cartResponse = await axios.get('https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart');
      const favoritesResponse = await axios.get('https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits');

      setIsLoadingPage(false);

      setCartItems(cartResponse.data);
      setFavorits(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, [])

  const onAddToCart = async (obj) => {
    console.log('___ obj.mainId  ' + obj.mainId);
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        console.log('DELETE');
        axios.delete(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.mainId) !== Number(obj.id)));
      } else {
        console.log('ADD');
        const { data } = axios.post(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart`, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в Корзину');
    }
  }

  const onRemoveItem = (id) => {
    console.log('id: ', id);
    axios.delete(`https://6574bd6fb2fbb8f6509c9c36.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFav = async (obj) => {
    try {
      if (favorits.find((favObj) => favObj.mainId === obj.mainId)) {
        await axios.delete(`https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits/${obj.id}`);
        setFavorits((prev) => prev.filter((item) => item.mainId !== obj.mainId));
      } else {
        const { data } = await axios.post(`https://6581496f3dfdd1b11c42dbc1.mockapi.io/Favorits`, obj);
        setFavorits((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в Закладки');
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickClear = () => {
    setSearchValue('')
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorits, isItemAdded }}>
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
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFav={onAddToFav}
            onAddToCart={onAddToCart}
            onClickClear={onClickClear}
            isLoadingPage={isLoadingPage}
          />} />

          <Route path="/favorites" element={<Favorites
            onAddToFav={onAddToFav} />} />
        </Routes>


      </div >
    </AppContext.Provider>
  );
}

export default App;
