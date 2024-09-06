import logo from '../../assets/logo.png';
function Header({ setIsCreate }) {
  return (
    <header className="header">
      <h1 className="logo">
        <img src={logo} alt="" />
      </h1>
      <nav className="nav">
        <ul className="gnb">
          <li>
            <button>액션</button>
          </li>
          <li>
            <button>코미디</button>
          </li>
          <li>
            <button>SF장르</button>
          </li>
          <li>
            <button>드라마</button>
          </li>
        </ul>
      </nav>
      <div className="util">
        <button
          className="new-btn"
          onClick={() => {
            setIsCreate((prev) => !prev);
          }}
        >
          신규등록
        </button>
      </div>
    </header>
  );
}

export default Header;
