import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
const CategorieDetails = () => {

  const { category } = useParams();

  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {

      const urlCocktailsCategorieResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category);
      const cocktailsCategorieResponseData = await urlCocktailsCategorieResponse.json();
      setCocktails(cocktailsCategorieResponseData.drinks);
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
          <p>Catégories des boissons en cours de chargement<br/>Veillez Patientez</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategorieDetails;
