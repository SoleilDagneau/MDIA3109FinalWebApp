import Image from 'next/image'
import styles from '@/styles/Home.module.css'


const MenuIcon = ({ onClick }) => {
  return (
    <div className="menu-icon" onClick={onClick}>
      <Image className={styles.menubutton} src='/martini.png' width='60' height='60'/>
    </div>
  );
};

export default MenuIcon;
