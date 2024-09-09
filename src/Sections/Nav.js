import logo from "./Logo.png";

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Logo">
        <img src={logo} />
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#aome">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login"> Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
