import { useEffect, useState } from "react";
import Header from "../component/Header";
import LastFourDrinks from "../component/LastFourDrinks";
import RandomDrink from "../component/RandomDrink";
import { DrinksContext } from "../context/DrinksContext";
import Footer from "../component/Footer";

const HomePage = () => {
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

      {drinks ? (
        <DrinksContext.Provider value={drinks}>
          <LastFourDrinks />
          <RandomDrink />
        </DrinksContext.Provider>
      ) : (
        <p>En cours de chargement</p>
      )}
      < Footer />
    </>

  );
};

export default HomePage;