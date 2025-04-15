import { Divide } from 'hamburger-react';
import { useState } from 'react';
import NavItems from '../NavItems';
import { pages } from '../../data';
import styles from './hamburgerMenu.module.css';

const HamburgerMenu = ({ updateFunction4 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
        updateFunction4();
    };

    return (
        <div className={styles.mobileOnly}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <Divide toggled={isOpen} toggle={setIsOpen} duration={0.6} color="#4FD1C5" />
            </div>

            {isOpen && (
                <nav className={styles.dropdown}>
                    {pages.map((page, index) => (
                        <NavItems key={index} name={page} path={page} updateFunction5={updateFunction4} /> ))}
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;