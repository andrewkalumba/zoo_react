import styles from './footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.elites} >@2025 Wild Safari Wonders</div>

            <div className={styles.footerLogo}>
                <h2 className={styles.pageTitle}>About Us</h2>
                <ul>
                    <li>
                        <a href="+46 760347287"> Contact: +46 760347287</a>
                    </li>
                    <li>
                        <a className={styles.email_link} href="mailto:andrewkalumba29@gmail.com">Email Us: andrewkalumba29@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer

