import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";


const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    (async () => {
      const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
      const ingredientsResponseData = await ingredientsResponse.json();

      setIngredients(ingredientsResponseData.drinks);
    
    })();
}, []);

  return (
    <>
      <Header />
      <section>
        {ingredients ? (
          <div class="centrage">
            {ingredients.map((ingredient) => {
              return (
                <article>
                <h2>{ingredient.strIngredient1}</h2>
                <Link to={`/ingredients/details/${ingredient.strIngredient1}`}><p>Voir les informations sur les ingrédients de cette boisson</p></Link>

                </article>
              );
            })}
          </div>
        ) : (
          <p>Ingrédients en cours de chargement</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default IngredientsPage;