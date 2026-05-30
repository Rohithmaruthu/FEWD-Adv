import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("Red")
  
  const changeColor = () => {
    setColor("Blue")
  }

  return (
    <>
      <h1>My fav color is {color}</h1>
      <button onClick={changeColor}>BLUE</button>
    </>
  )
}

export default App
