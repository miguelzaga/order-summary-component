import hero from "../images/illustration-hero.svg";
import iconMusic from "../images/icon-music.svg";

function Card() {
  return (
    <section className="card">
      <img
        className="card__hero"
        src={hero}
        alt="person with headphones dancing"
      ></img>
      <h1 className="card__title">Order Summary </h1>
      <p className="card__description">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!{" "}
      </p>
      <div className="card__plan plan">
        <img src={iconMusic} alt="" className="plan__icon"></img>
        <h2 className="plan__name">Annual Plan</h2>
        <p className="plan__price"> $59.99/year</p>
        <button className="plan__btn-change">Change</button>
      </div>
      <button className="card__btn">Proceed to Payment</button>
      <button className="card__btn-cancel">Cancel Order</button>
    </section>
  );
}

export default Card;
