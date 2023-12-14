import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const GlassesPage = () => {
  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
    (async () => {
      const glassesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
      const glassesResponseData = await glassesResponse.json();

      setGlasses(glassesResponseData.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <section>
        {glasses ? (
          <div class="centrage">
            {glasses.map((glasse) => {
              return (
                <article>
                  <h2>{glasse.strGlass}</h2>
                  <Link to={`/glasses/details/${glasse.strGlass}`}><p>Voir tous les verres de ce cocktail</p></Link>
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

export default GlassesPage;