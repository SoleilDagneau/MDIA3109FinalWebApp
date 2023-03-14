import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

export default function Results({ cocktails }) {
  const [showCocktails, setShowCocktails] = useState(false);

  const getCocktails = async () => {
    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/randomselection.php"
    );
    setCocktails(res.data.drinks);
    setShowCocktails(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cocktail Finder</title>
        <meta name="description" content="Cocktail Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Find a Cocktail</h1>

        <button onClick={getCocktails}>Get Cocktails</button>

        {showCocktails && (
          <div className={styles.resultimg}>
            {cocktails && cocktails.length > 0 ? (
              <div className={styles.grid}>
                {cocktails.slice(0, 10).map((cocktail) => (
                  <div key={cocktail.idDrink} className={styles.result}>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <p>{cocktail.strDrink}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No cocktails found.</p>
            )}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        Powered by <a href="https://www.thecocktaildb.com/">TheCocktailDB</a>
      </footer>
    </div>
  );
}
