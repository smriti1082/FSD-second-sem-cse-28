import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student'



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <h2>Student Information</h2>
    <Student name="Raj" course="B.tech" marks="90"/>
    <Student name="Ram" course="M.tech" marks="95"/>
    <Student name="Rohan" course="MCA" marks="98"/>
    <Student/>
    </>
  )
}

export default App