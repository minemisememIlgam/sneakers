import { useState } from "react";
function Card({ onClickFavorite, onClickPlus, price, imageUrl, title }) {
  // const [btn, setBtn] = useState("/img/plusik.jpg");

  // const afterClick = () => {
  //   setBtn(btn === "/img/selected.svg");
  // };
  const [isAdded, setIsAdded] = useState(false);
  const afterClick = () => {
    setIsAdded(!isAdded);
  };
  const [isFavourite, setIsFavourite] = useState(false);
  const afterClickFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  console.log(isAdded);

  return (
    <div className="card">
      <div className="favourite" onClick={afterClickFavourite}>
        <img src={isFavourite ? "/img/licked.svg" : "/img/unlicked.svg"} />{" "}
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5> </h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>{title}</span>
          <b>{price}</b>
        </div>

        <img
          onClick={afterClick}
          wudth={11}
          height={11}
          src={isAdded ? "/img/selected.svg" : "/img/plusik.jpg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
