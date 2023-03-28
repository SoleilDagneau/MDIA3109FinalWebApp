import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Map from '../components/Map'
import Menu from '@/components/Menu'
import MenuIcon from '@/components/Menuicon'
import { useState } from 'react';


export default function Home() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  const handlePopupMenuClick = () => {
    setIsPopupMenuOpen(!isPopupMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="author" content="The BYOB team" />
        <meta property="og:title" content="The BYOB map page" />
        <meta property="og:description" content="Our interactive map page" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      
      <main className={styles.main}>
      <header>
        <nav>
          
              <MenuIcon onClick={handlePopupMenuClick} />
           
        </nav>
      </header>
      {isPopupMenuOpen && <Menu />}
        <Map/>
      </main>
    </>
  )
}


