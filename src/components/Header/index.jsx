import Logo from "../Logo";
import Navigation from "../Navigation";
import styles from './header.module.css';
import HamburgerMenu from "../HamburgerMenu";
import { useState } from 'react';
import Time from "../Time";

const Header = ({ updateFunction3 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.pageTitle}>
                <h1 className= {styles.title}>Wild Safari Wonders</h1>
                <Navigation updateFunction4={updateFunction3} isMobile={!isMenuOpen} />
            </div>
            <HamburgerMenu updateFunction4={handleMenuToggle} />
            <Time/>
        
        </div>
    );
};

export default Header;