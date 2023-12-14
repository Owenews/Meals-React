import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const CategoriesPage = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
      const categoriesResponseData = await categoriesResponse.json();

      setCategories(categoriesResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section>
        {categories ? (
          <div class="centrage">
            {categories.map((category) => {
              return (
                <article>
                  <h2>{category.strCategory}</h2>
                  <Link to={`/categories/details/${category.strCategory}`}><p>Voir les informations sur cette catégorie de boisson </p></Link>

                </article>
              );
            })}
          </div>
        ) : (
          <p>En cours de chargement</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CategoriesPage;
