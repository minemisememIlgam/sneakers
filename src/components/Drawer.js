function Drawer({ onCloseDrawer }) {
  return (
    <div className="overlay">
      <div className="d-flex">
        <div className="drawer">
          <h2 className="mb-30">Kosik</h2>{" "}
          <img
            onClick={onCloseDrawer}
            className="cu-p"
            src="/img/selected.svg"
            alt="close"
          />
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/odin.jpg"
                alt="sneakers"
              ></img>
              <div className="mr-20">
                <p className="mb-5">Panske Nike Air Max 270</p>
                <b>5000 kc</b>
              </div>
              <img
                className="removeBtn"
                src="/img/cartt.svg"
                alt="Remove"
              ></img>
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/odin.jpg"
                alt="sneakers"
              ></img>
              <div className="mr-20">
                <p className="mb-5">Panske Nike Air Max 270</p>
                <b>5000 kc</b>
              </div>
              <img
                className="removeBtn"
                src="/img/cartt.svg"
                alt="Remove"
              ></img>
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li>
                  <span>Cena celkem:</span>
                  <div></div>
                  <b>10.000 Kc</b>
                </li>
                <li>
                  <span>DPH je 18%</span>
                  <div></div>
                  <b>1800 Kc</b>
                </li>
              </ul>
              <button className="greenButton">Prejit k platbe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
