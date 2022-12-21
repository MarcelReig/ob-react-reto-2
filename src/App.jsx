import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Clock from './components/ClassComponent'
import FunctionalClock from './components/FunctionalComponent'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>OB Reto 2</h1>
      {/* <Clock></Clock> */}
      <FunctionalClock></FunctionalClock>
    </div>
  )
}

export default App
