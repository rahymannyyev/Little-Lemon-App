import greek from "../Assets/greek salad.jpg";
import bruchetta from "../Assets/bruchetta.png";
import lemon from "../Assets/lemon dessert.jpg";
import moped from "../Assets/moped.png";

export default function Main() {
  return (
    <main>
      <div className="Main-Header">
        <h1>This weeks specials</h1>
        <button>Online Menu</button>
      </div>
      <div className="Main-List">
        <ul>
          <li>
            <img className="food" src={greek} />
            <div className="Name-Price">
              <h3>Greek salad</h3>
              <p>$12.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="Order">
              <h3>Order a delivery</h3>
              <img src={moped} />
            </div>
          </li>
          <li>
            <img className="food" src={bruchetta} />
            <div className="Name-Price">
              <h3>Bruchetta</h3>
              <p>$5.99</p>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="Order">
              <h3>Order a delivery</h3>
              <img src={moped} />
            </div>
          </li>
          <li>
            <img className="food" src={lemon} />
            <div className="Name-Price">
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <div className="Order">
              <h3>Order a delivery</h3>
              <img src={moped} />
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
