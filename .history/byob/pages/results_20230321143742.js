import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';
import styled from 'styled-components';
import Link from 'next/link';


const Logo = styled.img`
margin-top: 50px;
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
  const [ingredientError, setIngredientError] = useState(null); // error for ingredient input
  const [nameError, setNameError] = useState(null); // error for name input

  const searchCocktailsByName = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
      setShowCocktails(true);
      setNameError(null);
    } catch (error) {
      setNameError('Invalid input. Please try again.');
    }
  };  

  const searchCocktailsByIngredient = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
      setShowCocktails(true);
      setIngredientError(null);
    } catch (error) {
      setIngredientError('Invalid input. Please try again.');
    }
  };

  return (
    <>
      {/* ... */}
      <div className={styles.search}>
        <input
          className={styles.input}
          placeholder='Search by Alcohol'
          type="text"
          id="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        /> 
        <button
          className={styles.button1}
          onClick={searchCocktailsByIngredient}
        >
          <span>➜</span>
        </button>
      </div>          
      {ingredientError && <p className={styles.errorMessage}>{ingredientError}</p>}
      <div className={styles.search}> 
        <input
          className={styles.input}
          placeholder='Search by Drink Name'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={styles.button1}
          onClick={searchCocktailsByName}
        >
          <span>➜</span>
        </button>
      </div>
      {nameError && <p className={styles.errorMessage}>{nameError}</p>}
      {/* ... */}
    </>
  );
}
