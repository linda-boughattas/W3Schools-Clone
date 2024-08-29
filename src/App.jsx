import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import './global.css'
import Component from './component'
import data from"./data.jsx"

function App() {
  const Components= data.map(item => {
    return (
          <Component
                key={item.id}
                {...item}    
          />
  )}
  )
  return (
    <div>
      <Navbar/>
      {Components}
    </div>
  )
}

export default App
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}