import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Button from '@/components/button'
import Menu from '@/components/menu'
import MenuIcon from '@/components/menuicon'
import { useState } from 'react';



const inter = Inter({ subsets: ['latin'] })
const Logo = styled.img`
width: 18rem;
display: flex;
`
const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin
`

const ButtonCont = styled.div`
margin-top: 70px;
`


const HomePage = () => {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  const handlePopupMenuClick = () => {
    setIsPopupMenuOpen(!isPopupMenuOpen);
  };

  return (
    <div className={styles.main}>
      <header>
        <nav>
          
              <MenuIcon onClick={handlePopupMenuClick} />
           
        </nav>
      </header>
      {isPopupMenuOpen && <Menu />}
      <img className={styles.circleImg} src='byobcircle.png' />
      <main>
      <Cont>
          <div>
              <Logo src='/BYOBLOGO.png' />
              <h3 className={styles.h3}>become your own bartender.</h3>
          </div>
          <ButtonCont>
            <a href='/results'><Button wd='14rem' labeltxt='START MIXING' bg='#D8334F' pad='15px'/></a>
          </ButtonCont>
        </Cont>
      </main>
    </div>
  );
};

export default HomePage;
