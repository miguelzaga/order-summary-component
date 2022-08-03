import { render } from "react-dom";
import "./scss/style.scss";
import Wrapper from "./components/Wrapper";

function App() {
  return <Wrapper />;
}

render(<App />, document.getElementById("root"));
