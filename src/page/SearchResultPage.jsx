import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SearchResultPage = () => {

const { research } = useParams();

  const [cocktailSearched, setCocktailSearched] = useState(null);

  useEffect(() => {
    (async () => {

      const urlCocktailReponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + research);
      const dataCocktailSearched  = await urlCocktailReponse.json();
      setCocktailSearched(dataCocktailSearched.drinks);
    })();
  }, []);


  return (
    <>
      <Header />
      <div class="centrage">
        {cocktailSearched ? (
          <>
            {cocktailSearched.map((drink) => {
              return (
                <article>
                  <h2>{drink.strDrink}</h2>
                  <Link to={`/drink/details/${drink.idDrink}`}>Voir les informations sur cette boisson</Link>
                </article>
              );
            })}
          </>
        ) : (
          <p>Recherche en cours</p>
        )}
      </div>
    </>
  );
};

export default SearchResultPage;