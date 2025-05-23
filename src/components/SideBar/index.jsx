import styles from './sideBar.module.css' // Create this CSS module for styles

const SideBar = ({ groupList, wildLife2, handleClick }) => {
    return (
        <div className={styles.sideMenu}>
            {groupList.map((animal, index) => {
                const isActive = wildLife2 && wildLife2.name === animal.name
                return (
                    <span
                        key={index}
                        onClick={() => handleClick(animal)}
                        className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                    >
                        {animal.name}
                    </span>
                )
            })}
        </div>
    )
}

export default SideBar