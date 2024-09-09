import food from "./restauranfood.jpg";

export default function Header() {
  return (
    <header className="Header">
      <div className="Text-Part">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="Image-Part">
        <img src={food} />
      </div>
    </header>
  );
}
