import AnimalsData from "../AnimalsData";
import MainContentStartPage from "../MainContentStartPage";
import styles from "./MainContent.module.css";

const MainContent = ({ showPage, wildLife2, isHomePage, defaultAnimal }) => {
  return (
    <div className={styles.mainContent}>
      {showPage || !wildLife2
        ? <MainContentStartPage wildLife3={defaultAnimal} />
        : <AnimalsData wildLife3={wildLife2} showFullContent={!isHomePage} />}
    </div>
  );
};

export default MainContent;
