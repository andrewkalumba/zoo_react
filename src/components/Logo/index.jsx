import logo from '../../assets/logo5.jpg'
import styles from './logo.module.css'

const Logo = () => {
    return(
        <img className={styles.logo} src={logo} alt="ZooLogo"  width={120}/>

    )
}

export default Logo