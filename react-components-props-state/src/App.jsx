import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'
import Counter from './Counter'

function App() {
  return (
    <div>
      <h1>Learning Components, Props & State</h1>

      {/* <Greeting salute="Mr." name="Rohith" />
      <Greeting /> */}





      <Greeting name="USER" />
      <Counter />
    </div>
  );
}

export default App;
