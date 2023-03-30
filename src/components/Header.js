function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="gg" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Obchod s nejlepsima boty!</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.setClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="ggg" />
          <span>400 Kc.</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
