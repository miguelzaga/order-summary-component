import { render } from "react-dom";
import "./scss/style.scss";

function App() {
  return (
    <div>
      Order Summary You can now listen to millions of songs, audiobooks, and
      podcasts on any device anywhere you like! Annual Plan $59.99/year Change
      Proceed to Payment Cancel Order
    </div>
  );
}

render(<App />, document.getElementById("root"));
