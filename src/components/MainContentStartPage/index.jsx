import { getImageUrl } from '../../Utils/function'
import styles from './animals.module.css'

const MainContentStartPage = ({ wildLife3 }) => {
    //console.log(wildLife3)

    return (
        <div className={styles.container}>
        <div className={styles.main}>
            <h1 className={styles.groupName}>{wildLife3.group}</h1>
            <img className={styles.image} src={getImageUrl(wildLife3.image)} alt={wildLife3.name || 'animal group'} />
            <p className={styles.description}>{wildLife3.description}</p>
        </div>
        </div>
    );
}

export default MainContentStartPage;

