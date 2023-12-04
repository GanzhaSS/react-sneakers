import Card from './components/Card';
import Header from "./components/Header";
import Drawer from './components/Drawer';

const App = () => {
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
      <div className="d-flex justify-between flex-wrap m-40">
        <Card />
      </div>
    </div >
  );
}

export default App;
