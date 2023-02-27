import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Edu_NSW_ACT_Foundation, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Button from '@/components/button'
import Input from '@/components/input'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
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

export default function Home() {
  const router = useRouter();
  const [drinkData, setDrinkData] = useState({});
  const [drinkName, setDrinkName] = useState('');
  const [drinkIngredient, setDrinkIngredient] = useState('');
  const [error, setErrorMessage] = useState('');

  const randDrink = async () => {
    const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    setDrinkData(res);
    console.log(res);
    // changePage();
  }

  const changePage = async () => {
    router.push({
      pathname: '/results',
      query: drinkData,
    });
  }

  const searchDrinkName = (event) => {
    if (event.key === "Enter") {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
        .then((response) => {
          console.clear();
          setDrinkData(response.data)
          console.log(response.data);
          setDrinkName(response.data.drinks.strDrink);
          setErrorMessage("");
        }).catch(err => {
          console.log(err);
          setErrorMessage("Enter another name")
          setData({});
        })
      setDrinkName('')
    }
  }

  const searchDrinkIngredient = (event) => {
    if (event.key === "Enter") {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkIngredient}`)
        .then((response) => {
          console.clear();
          setDrinkData(response.data)
          console.log(response.data);
          setErrorMessage("");
        }).catch(err => {
          console.log(err);
          setErrorMessage("Enter another ingredient")
          setData({});
        })
      setDrinkIngredient('')
    }
  }

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Banner src='/cocktailbanner.png' />
        </div>
        <div>
          <Logo src='/BYOBLOGO.png' />
        </div>
        <input
          txt='enter a cocktail name'
          value={drinkName}
          onChange={event => setDrinkName(event.target.value)}
          onKeyDown={searchDrinkName}
          type="text"
        />
        <input
          txt='search by ingredients'
          value={drinkIngredient}
          onChange={event => setDrinkIngredient(event.target.value)}
          onKeyDown={searchDrinkIngredient}
          type="text"
        />
        <br />
        <h3 className={styles.h3}>OR</h3>
        <ButtonCont>
          {/* <Link
            href={{
              pathname: "/results",
              query: drinkData,
            }}> */}
          <Button
            onClick={() => randDrink()}
            wd='7rem'
            labeltxt='Generate Random Cocktail'
            bg='#F4681E'
            marg='10px'
            wt='300'
            pad='10px'
            size='16px'
          />
          {/* </Link> */}
          <Button
            wd='7rem'
            labeltxt='Generate Random Mocktail'
            bg='#D8334F'
            marg='10px'
            wt='300'
            pad='10px'
            size='16px'
          />
        </ButtonCont>
      </main>
    </>
  )
}
