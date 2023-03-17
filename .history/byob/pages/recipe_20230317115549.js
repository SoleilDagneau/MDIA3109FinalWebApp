import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import styled from 'styled-components';


const Logo = styled.img`
margin-top: -4rem;
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

const Recipe = () => {
  const router = useRouter();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      const { id } = router.query;
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
    };
    fetchCocktail();
  }, []);

  return (
    <div>
      {cocktail ? (
        <div>
          <h1>{cocktail.strDrink}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h2>Ingredients:</h2>
          <ul>
            {Object.keys(cocktail)
              .filter((key) => key.startsWith("strIngredient"))
              .map((key) => {
                if (cocktail[key]) {
                  return <li key={key}>{cocktail[key]}</li>;
                }
                return null;
              })}
          </ul>
          <h2>Instructions:</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recipe;
