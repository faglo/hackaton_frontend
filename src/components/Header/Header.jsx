import React from 'react'
import logo from '../../assets/logo.svg'
import bell from '../../assets/icons/bell.svg'
import calendar from '../../assets/icons/calendar.svg'
import search from '../../assets/icons/search.svg'
import User from '../User/User'
import styles from "./Header.module.scss"

export default function Header () {
  return (
    <div className={styles.header}>
      <img src={logo}/>
      <div className={styles.inputContainer}>
        <img src={search} className={styles.icon}/>
        <input
          className={styles.input}
          placeholder="Поиск"
          type="text"
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.buttons}>
          <img src={calendar}/>
          <img src={bell}/>
        </div>
        <User/>
      </div>
    </div>
  )
}
