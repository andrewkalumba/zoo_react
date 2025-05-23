import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { animalsArray, animalsMainData } from "../../data"
import Bubbles from "../../components/Bubbles"
import styles from './animalGroups.module.css'
import SideBar from "../../components/SideBar"
import MainContent from "../../components/MainContent"

const AnimalGroupPage = ({ groupName = "all", updateFunction2, wildLife2, isHomePage }) => {
    const [showPage, setShowPage] = useState(true)
    const location = useLocation() //lets your component know where it is in the app

    const getAnimalList = () => {
        if (groupName === "all") {
            return animalsArray.length > 0 &&
                animalsArray
        }

        return animalsArray.length > 0 &&
            animalsArray.filter(animal => animal.group.toLowerCase() === groupName)
    }

    const groupList = getAnimalList()

    const defaultAnimal = () => {
        const match = animalsMainData.find(item => groupName === "all"
            ? item.group.toLowerCase().includes("animals")
            : item.group.toLowerCase() === groupName
        )
        return match
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

            <SideBar groupList={groupList} wildLife2={wildLife2} handleClick={handleClick} />

            <MainContent showPage={showPage} wildLife2={wildLife2} isHomePage={isHomePage} defaultAnimal={defaultAnimal()} />
        </div>
    )
}

export default AnimalGroupPage
