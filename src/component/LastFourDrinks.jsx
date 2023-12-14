import { useContext } from "react";
import { DrinksContext } from "../context/DrinksContext";
import { Link } from "react-router-dom";

const LastFourDrinks = () => {
  const drinks = useContext(DrinksContext);

  const lastFourDrinks = drinks.slice(-4);

  return (
    <section>
      <Link to={`/drinks/`}><h2>Les dernières boissons :</h2></Link>


      {lastFourDrinks.map((drink) => {
        return (
          <article>
            <h3>{drink.strDrink}</h3>
            <Link to={`/drink/details/${drink.idDrink}`}><h1>Voir les détails de la boisson</h1></Link>
            <img class="displayed" src={drink.strDrinkThumb} alt={drink.strDrink} />
          </article>
        );
      })}
    </section>
  );
};

export default LastFourDrinks;