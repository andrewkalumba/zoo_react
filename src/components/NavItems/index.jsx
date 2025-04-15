import { NavLink } from "react-router-dom";
import styles from './navItems.module.css';

const NavItems = ({ name, path, updateFunction5 }) => {
    return (
            <NavLink to={path.toLowerCase() === "home" ? "/" : path.toLowerCase()} onClick={() => updateFunction5(name)} className={({ isActive }) => isActive ? styles.active : styles.nav}>{name} </NavLink>
        );
};

export default NavItems;
