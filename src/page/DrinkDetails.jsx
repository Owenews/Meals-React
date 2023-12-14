import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const DrinkDetails = () => {
  const { id } = useParams();

  const [drink, setDrink] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsDrinkResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
      const cocktailsDrinkResponseData = await urlCocktailsDrinkResponse.json();
      
      setDrink(cocktailsDrinkResponseData.drinks[0]);
    })();
  }, [id]);

  return (
    <>
      <Header />
      <div class="centrage">
        {drink ? (
          <article>
            <h2>{drink.strDrink}</h2>
            <Link to={`/categories/details/${drink.strCategory}`}><p><b>Nom :</b> {drink.strCategory}</p></Link>
            <img class="displayed" src={drink.strDrinkThumb} alt={drink.strDrink} />
            <Link to={`/ingredients/details/${drink.strIngredient1}`}><p><b>Ingrédient :</b>  {drink.strIngredient1}</p></Link>
            <p><b>Instructions :</b> {drink.strInstructions}</p>
            <p><b>Date de modification :</b> {drink.dateModified}</p>
          </article>
        ) : (
          <p>Boisson en cours de chargement<br/>Veillez Patientez</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DrinkDetails;

