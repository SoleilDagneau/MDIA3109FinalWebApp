import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';

export default function Results() {
  const [name, setName] = useState('');
  const [showCocktails, setShowCocktails] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [ingredient, setIngredient] = useState('');

  const searchCocktailsByName = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    setCocktails(data.drinks);
    setShowCocktails(true);
  };  

  const getRandomCocktails = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await response.json();
    setCocktails(data.drinks);
    setShowCocktails(true);
  };

  const getRandomMocktail = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.drinks.length);
    const randomMocktail = data.drinks[randomIndex];
    setCocktails([randomMocktail]);
    setShowCocktails(true);
  };

  const searchCocktailsByIngredient = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setCocktails(data.drinks);
    setShowCocktails(true);
  };

  return (
    <>
      <Head>
        <title>Results</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main1}>
        <h1 className={styles.h1}>YOUR SEARCH</h1>
        <div className={styles.search}>

          
          <label htmlFor="ingredient">Search by Ingredient:</label>
          <input
            type="text"
            id="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <Button labeltxt="Search" onClick={searchCocktailsByIngredient} />
        </div>



        <div className={styles.buttons}>
          <Button labeltxt="Random Cocktails" onClick={getRandomCocktails} />
          <Button labeltxt="Random Mocktail" onClick={getRandomMocktail} />
        </div>

        {showCocktails && (
          <div className={styles.resultimg}>
            {cocktails.map((cocktail) => (
              <figure key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} />
                <figcaption>
                  <h2 className={styles.drinkname}>{cocktail.strDrink}</h2>
                  <h3 className={styles.ingredient}>
                    {cocktail.strIngredient1}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
