import { useEffect, useState } from "react"
import { animalsArray, animalsMainData } from "../../data"
import AnimalsData from "../../components/AnimalsData"
import MainContentStartPage from "../../components/MainContentStartPage"
import { useLocation } from "react-router-dom"
import Bubbles from "../../components/Bubbles"
import styles from './animalGroups.module.css'

const AnimalGroupPage = ({ groupName = "all", updateFunction2, wildLife2, isHomePage }) => {
    const [showPage, setShowPage] = useState(true)
    const location = useLocation()

    // Get the list of animals based on the group
    const getAnimalList = () => {
        if (groupName === "all") {
            return animalsArray.length > 0
                ? animalsArray
                : animalsMainData.filter(item => item.group.toLowerCase().includes("animals"))
        }

        return animalsArray.length > 0
            ? animalsArray.filter(animal => animal.group.toLowerCase() === groupName)
            : animalsMainData.filter(item => item.group.toLowerCase() === groupName)
    }

    const groupList = getAnimalList()

    // Pick a default animal to show on the start page
    const defaultAnimal = () => {
        const match = animalsMainData.find(item =>
            groupName === "all"
                ? item.group.toLowerCase().includes("animals")
                : item.group.toLowerCase() === groupName
        )
        return match || animalsMainData[0]
    }

    useEffect(() => {
        updateFunction2(null)
        setShowPage(true)
    }, [location.pathname])

    const handleClick = (animal) => {
        if (wildLife2 && wildLife2.name === animal.name) {
            updateFunction2(null)
            setShowPage(true)
        } else {
            updateFunction2(animal)
            setShowPage(false)
        }
    }

    return (
        <div className={styles.container}>
              <Bubbles bubbleCount={30} />
            <div className={styles.sideMenu}>
                {groupList.map((animal, index) => {
                    const isActive = wildLife2 && wildLife2.name === animal.name
                    return (
                        <span key={index} onClick={() => handleClick(animal)} className={`${styles.menuItem} ${isActive ? styles.active : ""}`}> {animal.name} </span>
                    )
                })}
            </div>

            <div className={styles.mainContent}>
                {showPage || !wildLife2
                    ? <MainContentStartPage wildLife3={defaultAnimal()} />
                    : <AnimalsData wildLife3={wildLife2} showFullContent={!isHomePage} />}
            </div>
        </div>
    )
}

export default AnimalGroupPage
