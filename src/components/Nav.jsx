import React from 'react'
import Header from './Header/Header.jsx'
import Drawer from './Drawer/Drawer.jsx'
import '../styles/Nav.css'

export default function Nav ({ children }) {
  return (
    <div>
      <Header />
        <div className='main'>
          {children}
        </div>
      <Drawer />
    </div>
  )
}
