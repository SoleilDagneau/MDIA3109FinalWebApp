import Link from 'next/link';
import styles from '@/styles/Home.module.css'

import styled from "styled-components";

const MenuCont = styled.div`
position: absolute;
top: 58px;
left: 0;
background-color: #D8334F;
padding: 10px;
display: flex;
flex-direction: column;
align-items: flex-end;
margin: 5px 0;
font-family: 'Quicksand', sans-serif;
font-size: 18px;
color: white;
`

const Menu = () => {
  return (
    <MenuCont>
      <Link href="/">
        Home
      </Link>
      <Link href="/results">
        Search
      </Link>
      <Link href="/map">
       Map
      </Link>
    </MenuCont>
  );
};

export default Menu;
