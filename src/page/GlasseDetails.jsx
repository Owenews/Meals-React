import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const GlasseDetails = () => {

  const { glasse } = useParams();

  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsGlasseResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glasse);
      const cocktailsGlasseResponseData = await urlCocktailsGlasseResponse.json();
      
      setCocktails(cocktailsGlasseResponseData.drinks);
    })();
  },[]);

  return (
    <>
      <Header />
      <div>
        {cocktails ? (
          <div class="centrage">
            {cocktails.map((cocktail) => (
              <article key={cocktail.idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <p><b>Id :</b> {cocktail.idDrink}</p>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </article>
            ))}
          </div>
        ) : (
          <p>En cours de chargement</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GlasseDetails;