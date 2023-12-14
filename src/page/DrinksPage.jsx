import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const DrinksPage = () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    (async () => {
      const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const drinksResponseData = await drinksResponse.json();

      setDrinks(drinksResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />

      <div class="centrage">
        {drinks ? (
          <>
            {drinks.map((drink) => {
              return (
                <article>
                  <h2>{drink.strDrink}</h2>
                  <Link to={`/drink/details/${drink.idDrink}`}>Voir les informations sur cette boisson</Link>
                </article>
              );
            })}
          </>
          ) : (
            <p>Recettes en cours de récupération</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DrinksPage;