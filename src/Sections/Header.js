import food from "./restauranfood.jpg";

export default function Header({ onReserveClick }) {
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
        <button onClick={onReserveClick}>Reserve a table</button>{" "}
      </div>
      <div className="Image-Part">
        <img src={food} alt="Food" />
      </div>
    </header>
  );
}
