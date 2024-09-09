import logo from "../Assets/Logo.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} />
      <ul>
        <li>
          <a>Doormat Navigation</a>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      <ul>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Adress</a>
        </li>
        <li>
          <a>phone number</a>
        </li>
        <li>
          <a>email</a>
        </li>
      </ul>
      <ul>
        <li>
          <a>Social Media Links</a>
        </li>
        <li>
          <a>Adress</a>
        </li>
        <li>
          <a>phone number</a>
        </li>
        <li>
          <a>email</a>
        </li>
      </ul>
    </footer>
  );
}
