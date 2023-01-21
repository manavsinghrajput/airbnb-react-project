import "./styles.css";
import logo from "./images/logo.png";
import photo from "./images/Group.png";
import cardData from "./cardData";

function Head() {
  return (
    <header className="container">
      <nav className="container__nav">
        <img className="nav__logo" alt="website-logo" src={logo} />
      </nav>
      <img
        className="container__display-image"
        alt="grid-collection"
        src={photo}
      />

      <h1 className="container__head">Online Experiences</h1>
      <p className="container__article">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img className="card__image" alt="" src={props.image} />
      <div className="card__stats">
        <img className="card__stats__icon" alt="" src={props.ratingIcon} />
        <span>{props.rating}</span>
        <span>({props.reviews}) - </span>
        <span>{props.country}</span>
      </div>
      <p className="card__description">{props.title}</p>
      <p className="card__accounts">
        <strong>From {props.cost}$</strong> / person
      </p>
    </div>
  );
}

export default function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        image={card.image}
        ratingIcon={card.ratingIcon}
        rating={card.rating}
        reviews={card.reviews}
        country={card.country}
        title={card.title}
        cost={card.cost}
      />
    );
  });
  return (
    <div className="App">
      <Head />
      <section className="card-items">{cardElements}</section>

      {/* <Card
        image={img1}
        image2={star}
        rating={4.5} //store number like this in case any calculation is to be done on rating
        country="USA"
        topic="Life lessons from Manvendra Singh"
        rate="119"
      />
      <Card
        image={img2}
        image2={star}
        rating="4.0" //stored like a string,no maths can be done on this string
        country="Indonesia"
        topic="Course on Wedding photography"
        rate="348"
      />
      <Card
        image={img3}
        image2={star}
        rating="5.0"
        country="India"
        topic="Dirt Biking in the Dunes"
      rate="199"
      /> */}
    </div>
  );
}
