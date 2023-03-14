import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Edu_NSW_ACT_Foundation, Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';
import { useEffect } from 'react';

export default function Results() {
  const [showCocktails, setShowCocktails] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const getRandomCocktails = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
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
        <h2 className={styles.h2}>INGREDIENTS: "vodka"</h2>

        {!showCocktails && (
          <Button labeltxt="Random Cocktail" onClick={getRandomCocktails} />
        )}

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
