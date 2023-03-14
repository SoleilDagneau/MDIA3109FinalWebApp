import Head from 'next/head'
import Image from 'next/image'
import { Edu_NSW_ACT_Foundation, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'



export default function Results() {

  const [cocktails, setCocktails] = useState([]);
  async function fetchRandomCocktails() {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/randomselection.php');
    const data = await res.json();
    return data.drinks;
  }
  

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
      <div className={styles.resultimg}> 
      <figure>
         <img src="/drink1.png" />
        <figcaption>
        <h2 className={styles.drinkname}> CRANTINI</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

    <figure>
         <img src="/drink2.png" />
        <figcaption>
        <h2 className={styles.drinkname}> COSMOPOLITAN</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

    <figure>
         <img src="/drink1.png" />
        <figcaption>
        <h2 className={styles.drinkname}> CRANTINI</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

    <figure>
         <img src="/drink2.png" />
        <figcaption>
        <h2 className={styles.drinkname}> COSMOPOLITAN</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

    <figure>
         <img src="/drink1.png" />
        <figcaption>
        <h2 className={styles.drinkname}> CRANTINI</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

    <figure>
         <img src="/drink2.png" />
        <figcaption>
        <h2 className={styles.drinkname}> COSMOPOLITAN</h2>
          <h3 className={styles.ingredient}>Vodka Citron</h3>
        </figcaption>
    </figure>

          
      </div>
        

      </main>
    </>
  )
}
