import { useState } from "react";
import styles from "../styles/Results.module.css";

export default function Results({ cocktails }) {
  const [showCocktails, setShowCocktails] = useState(false);
  const [randomCocktails, setRandomCocktails] = useState([]);

  const getRandomCocktails = () => {
    setShowCocktails(true);
    const randomSelection = [];
    while (randomSelection.length < 10) {
      const randomIndex = Math.floor(Math.random() * cocktails.length);
      const randomCocktail = cocktails[randomIndex];
      if (!randomSelection.includes(randomCocktail)) {
        randomSelection.push(randomCocktail);
      }
    }
    setRandomCocktails(randomSelection);
  };

  return (
    <div className={styles.results}>
      <button onClick={getRandomCocktails}>Get Random Cocktails</button>
      {showCocktails && (
        <div className={styles.cocktailGrid}>
          {randomCocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <p>{cocktail.strDrink}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
