import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import AnimalGroupPage from './components/AnimalGroupPage'

function App() {
  const [wildLife, setWildLife] = useState(null)

  const updateFunction = (animal) => {
    setWildLife(animal)
  }

  return (
    <Routes>
      <Route element={<Layout updateFunction2={updateFunction}/>}>
        <Route path="/" element={<AnimalGroupPage groupName="all" updateFunction2={updateFunction} wildLife2={wildLife} isHomePage={true}/>} />
        <Route path="/mammals" element={<AnimalGroupPage groupName="mammals" updateFunction2={updateFunction} wildLife2={wildLife} />} />
        <Route path="/birds" element={<AnimalGroupPage groupName="birds" updateFunction2={updateFunction} wildLife2={wildLife} />} />
        <Route path="/reptiles" element={<AnimalGroupPage groupName="reptiles" updateFunction2={updateFunction} wildLife2={wildLife} />} />
      </Route>
    </Routes>
  )
}

export default App
