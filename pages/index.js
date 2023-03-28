import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Button from '@/components/Button'
import Menu from '@/components/Menu'
import MenuIcon from '@/components/Menuicon'
import { useState } from 'react';



const Logo = styled.img`
width: 18rem;
display: flex;
`
const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 30px;
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
          <div className={styles.buttonCont}>
            <a href='/results'><Button wd='14rem' labeltxt='START MIXING' bg='#D8334F' pad='15px'/></a>
          </div>
        </Cont>
      </main>
    </div>
  );
};

export default HomePage;
