import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const IngredientDetails = () => {

  const { ingredient } = useParams();

  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {

      const urlCocktailsIngredientResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient);
      const urlCocktailsIngredientResponseData = await urlCocktailsIngredientResponse.json();
      setCocktails(urlCocktailsIngredientResponseData.drinks);
    })();
  },[]);

  return (
    <>
      <Header />
      <div class="centrage">
        {cocktails ? (
          <div>
            {cocktails.map((cocktail) => (
              <article key={cocktail.idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <p><b>Id :</b> {cocktail.idDrink}</p>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </article>
            ))}
          </div>
        ) : (
          <p>Ingrédient des boissons en cours de chargement<br/>Veillez Patientez</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default IngredientDetails;