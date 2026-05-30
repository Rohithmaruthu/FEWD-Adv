import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useContext } from 'react'
import { AppContext } from './context/context'

function App() {
  const user = {
    name: "Tony Stark",
    hero: "Iron Man",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmj7XKS8uvnPt814M6AlN4ANslfv0vdpjf-jjZKgaRRNND48TY",
    isActive: true
  };

  const phone = useContext(AppContext);

  return (
    <div className='card'>
      {/*this is a comment*/}
      <img width="400" height="400" src={user.avatar} alt="avatar"/>

      <h2>{user.name}</h2>
      <p>Alias: {user.hero}</p>

      <span className={user.isActive ? 'active' : 'inactive'}>
        {user.isActive ? 'Online' : 'Offline'}
      </span>

      <p>phone: {phone}</p>
    </div>
  )
}

export default App
