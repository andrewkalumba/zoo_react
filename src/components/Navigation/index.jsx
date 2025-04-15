import { pages } from '../../data';
import styles from './nav.module.css';
import NavItems from '../NavItems';
import { useState } from 'react';

const Navigation = ({ isMobile }) => {
    const [submenuToggle, setSubMenuToggle] = useState(false);

    const handleClick = (trigger = false) => {
        setSubMenuToggle(trigger);
    };

    return (
        <nav className={`${styles.navItem} ${isMobile ? styles.hidden : ''}`}>
            {pages.map((item, index) => <NavItems key={index} path={item} name={item} updateFunction={handleClick} />)}
        </nav>
    );
};

export default Navigation;