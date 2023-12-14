import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const Search = () => {
    window.location.href = `/searchResults/${searchQuery}`;
  };
  
  const KeyDown = (event) => {
    if (event.key === "Enter") {
      Search();
    }
  };
  
  return (
    <header>
      <a href="http://localhost:3000/"><img class="displayed" src="https://www.thecocktaildb.com/images/logo.png" alt="Logo de boisson" /></a>
      <h1>Come and Drink Whatever You Want !!!</h1>
      <nav>
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="/glasses">Glasses</Link>
          </li>
        </ul>
      </nav>

      <input type="text" placeholder="Rechercher un cocktail" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={KeyDown}/>
      <button onClick={Search}></button>
    </header>
  );
};

export default Header;