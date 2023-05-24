import React from 'react'
import img1 from '../../assets/images/img1.png'
import styles from './User.module.scss'
import dropdown from '../../assets/icons/dropdown.svg'

export default function User() {
  const [user, setUser] = React.useState('Мария Иванова')
  const [city, setCity] = React.useState('Краснодар')
  return (
    <div className={styles.userData}>
      <div className={styles.container}>
        <div className={styles.topText}>
          {user}
        </div>
        <div className={styles.bottomText}>
          {city}
        </div>
      </div>
      <img src={img1} className={styles.img} />
      <img src={dropdown} />
    </div>
  )
}
