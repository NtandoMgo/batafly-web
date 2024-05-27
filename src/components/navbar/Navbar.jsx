import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Batafly Consulting
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#home">Home</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

