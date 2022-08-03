import { render } from "react-dom";
import "./scss/style.scss";
import Card from "./components/Card";

function App() {
  return (
    <main className="wrapper">
      <Card />
    </main>
  );
}

render(<App />, document.getElementById("root"));
