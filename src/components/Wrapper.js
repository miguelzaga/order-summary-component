import Card from "./Card";
import backgroundMobile from "../images/pattern-background-mobile.svg";
import backgroundDesktop from "../images/pattern-background-desktop.svg";

function Wrapper() {
  return (
    <main className="wrapper">
      <picture className="wrapper__bg">
        <source srcSet={backgroundDesktop} media="(min-width: 640px)" />
        <img src={backgroundMobile} alt="" />
      </picture>
      <Card />
    </main>
  );
}

export default Wrapper;
