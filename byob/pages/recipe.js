import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Button from '@/components/button'

const inter = Inter({ subsets: ['latin'] })
const Logo = styled.img`
width: 18rem;
display: flex;
`
const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 12rem;
`

const ButtonCont = styled.div`
margin-top: 70px;
`

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Recipe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img className={styles.recipeimg} src='/drink3.png'/>
        <div className={styles.titlecont}> 
        <h3 className={styles.drinkname2}>COSMOPOLITAN</h3>
        <img className={styles.icon} src='/heart.png'/>
        <img className={styles.icon} src='/location.png'/>
        </div>
        
        <div className={styles.description}> The classic, punchy Cosmopolitan includes vodka, 
            Triple Sec, cranberry juice and ice and is usually 
            garnished with orange peel. Some recipes also use a 
            dash of fresh lime juice to make it even more 
            refreshing or flavoured vodka for a twist.</div>
            <h3 className={styles.ingredient2}>INGREDIENTS</h3>
            <p className={styles.description}> 
            1 1/2 OZ VODKA CITRON
            </p>
            <p className={styles.description}> 
            1/2 OZ COINTREAU
            </p>
            <p className={styles.description}> 
            1/2 OZ FRESH LIME JUICE
            </p>
            <p className={styles.description}> 
            2 OZ CRANBERRY JUICE
            </p>
      </main>
    </>
  )
}
