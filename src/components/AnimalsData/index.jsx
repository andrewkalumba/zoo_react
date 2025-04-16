import { useState } from "react";
import styles from './animalsData.module.css'
import { getImageUrl } from "../../Utils/function";

const AnimalsData = ({ wildLife3, showFullContent = false }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => setShowPopUp(!showPopUp);

  const FullContent = () => (
    <div className={styles.fullContent}>
      <h2 className={styles.title2}>{wildLife3.name}</h2>
      <img className={styles.image} src={getImageUrl(wildLife3.image)} alt={wildLife3.name} />
      <p><strong>Food:</strong> {wildLife3.food}</p>
      <p><strong>Found:</strong> {wildLife3.found}</p>
      <p><strong>Life:</strong> {wildLife3.lifespan}</p>
      <p><strong>Description:</strong> {wildLife3.description}</p>
      <p><strong>Length:</strong> {wildLife3.length}</p>
      <p><strong>Weight:</strong> {wildLife3.weight}</p>
    </div>
  );

  return (
    <div className={styles.cardContainer}>
      {!showFullContent &&
        <div className={styles.lessInfo}>
          <h2>{`Name: ${wildLife3.name}`}</h2>
          <img className={styles.image} src={getImageUrl(wildLife3.image)} alt={wildLife3.name} />
          <div>{`Food: ${wildLife3.food}`}</div>
          <p>{`Found: ${wildLife3.found}`}</p>
          <button className={styles.button} onClick={togglePopUp}>Read More</button>
        </div>
      }

      {showFullContent ? (
        <FullContent />
      ) : (
        <>
          {showPopUp && (
            <div className={styles.backdrop} onClick={togglePopUp}>
              <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <FullContent />
                <button className={styles.button} onClick={togglePopUp}>Close</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AnimalsData  
