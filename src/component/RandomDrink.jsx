import { useContext } from "react";
import { DrinksContext } from "../context/DrinksContext";
import { Link } from "react-router-dom";

const RandomDrink = () => {
  const drinks = useContext(DrinksContext);

  const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];

  return (
    <section>
      <Link to={`/categories/`}><h2>Catégorie de boisson aléatoire :</h2></Link>
      <article>
        <h3>{randomDrink.strCategory}</h3>
        <img class="displayed" src={randomDrink.strDrinkThumb} alt={randomDrink.strDrink} />
      </article>
    </section>
  );
};

export default RandomDrink;