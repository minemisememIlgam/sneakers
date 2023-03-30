import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState();

  const [state, setState] = useState();
  const onClickButton = () => {
    setState(state === alert("вы добавили в корзину"));
  };
  const uClickedOnFav = () => {
    setState(state === alert("Вы добавили в избранное"));
  };

  const [count, setCount] = useState(0);
  const wasClickedPlus = () => {
    setCount(count + 1);
  };
  const wasClickedMinus = () => {
    setCount(count - 1);
  };
  const [cartOpened, setCartOpened] = useState(false);

  fetch("https://64243b8e4740174043366e0e.mockapi.io/items") //обращаемся к бэку а после ответ превращаем в джейсон и после джейсон выводим в консоль лог
    .then((res) => {
      return res.json();
    })
    .then((json) => setItems(json)); //fetch чтобы обращаться к бэку (ссылка мокапи)

  return (
    <div className="wrapper clear">
      <center>
        <h1>{count} </h1>
        <button onClick={wasClickedPlus}>+</button>
        <button onClick={wasClickedMinus}>-</button>
      </center>
      {cartOpened ? (
        <Drawer onCloseDrawer={() => setCartOpened(false)} />
      ) : null}

      <Header setClickCart={() => setCartOpened(true)} />
      {/* у хэдера появляется реакция на клик он клик карт с анонимной функцией которая меняет булево значение открытия корзины на тру */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Veskere boty</h1>
          <div className="search-block d-flex">
            <input placeholder="Hledani..." />
          </div>
        </div>
        <div className="d-flex">
          {items.map((value) => (
            <Card
              onClickFavorite={uClickedOnFav}
              onClickPlus={onClickButton}
              title={value.name}
              price={value.price}
              imageUrl={value.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
