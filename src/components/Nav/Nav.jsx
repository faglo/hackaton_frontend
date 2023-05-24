import React from 'react'
import Header from '../Header/Header.jsx'
import Drawer from '../Drawer/Drawer.jsx'
import styles from './Nav.module.scss'

export default function Nav ({ children }) {
  return (
    <div>
      <Header />
        <div className={styles.mainNav}>
          {children}
        </div>
      <Drawer />
    </div>
  )
}
