import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import styles from './footer.module.css'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.socialIcons}>
                    <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
                    <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
                    <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
                    <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
                </div>
                <p>© {new Date().getFullYear()} Wild Safari Wonders</p>
            </div>
        </footer>
    );
};

export default Footer;


