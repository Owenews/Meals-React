import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import DrinksPage from "./page/DrinksPage";
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";
import GlassesPage from "./page/GlassesPage";
import DrinkDetails from "./page/DrinkDetails";
import CategorieDetails from "./page/CategorieDetails";
import IngredientDetails from "./page/IngredientDetails";
import GlasseDetails from "./page/GlasseDetails";
import SearchResultPage from "./page/SearchResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/glasses" element={<GlassesPage />} />
        <Route path="/drink/details/:id" element={<DrinkDetails />} />
        <Route path="/categories/details/:category" element={<CategorieDetails/>} />
        <Route path="/ingredients/details/:ingredient" element={<IngredientDetails/>} />
        <Route path="/glasses/details/:glasse" element={<GlasseDetails/>} />
        <Route path="/searchResults/:research" element={<SearchResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

