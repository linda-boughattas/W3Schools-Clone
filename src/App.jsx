import { useState } from 'react'
import Navbar from './navbar'
import './global.css'
import Component from './component'
import data from"./data.jsx"
import Bdata from "./Bdata.jsx"
import Bottom from "./bottom.jsx"

function App() {
  const Components= data.map(item => {
    return (
          <Component
                key={item.id}
                {...item}    
          />
  )}
  )
  const Bcomp=Bdata.map(item =>{
    return(
      <Bottom
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className='wrapper'>
      <Navbar/>
      {Components}
      <section className='Bcomp-list'>{Bcomp}</section>
    </div>
  )
}

export default App