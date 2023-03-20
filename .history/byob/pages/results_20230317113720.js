import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Logo = styled.img`
margin-top: 4rem;
width: 18rem;
display: flex;
`
const Banner = styled.img`
display: flex;
align-items:baseline;
margin-top: -2rem;
`
const ButtonCont = styled.div`
display: flex;
padding: 10px;

`

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

      <main className={styles.main}>
        <div>
            <Logo src='/BYOBLOGO.png' />
        </div>
        
       
        <div className={styles.search}>
        
          <input className={styles.input}
          placeholder='Search by Ingredient'
            type="text"
            id="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          /> 
          <button className={styles.button1} onClick={searchCocktailsByIngredient}><span>➜</span></button>
          
        </div>
        <div className={styles.search}>
          
          <input className={styles.input}
           placeholder='Search by Name'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className={styles.button1} onClick={searchCocktailsByName}><span>➜</span></button>
          
        </div>
        <div className={styles.or}>OR</div>
        <div className={styles.buttons}> 
            <button onClick={getRandomCocktails}>Generate Random <br/>Cocktail</button>
            <button onClick={getRandomMocktail}>Generate Random  <br/>Mocktail</button>
        </div>

       

      
        <h1 className={styles.h1}>YOUR SEARCH</h1>

        {showCocktails && (
          <div className={styles.resultimg}>
            {cocktails.map((cocktail) => (
              <Link
              key={cocktail.idDrink}
              href={`/recipe?`}
              <figure key={cocktail.idDrink}>
                <img className={styles.resimg} src={cocktail.strDrinkThumb} />
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
