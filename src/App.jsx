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