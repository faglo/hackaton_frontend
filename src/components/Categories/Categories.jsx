import React from 'react'
import styles from './Categories.module.scss'
import dropdown from '../../assets/icons/dropdown.svg'
export default function Categories () {
  const [active, setActive] = React.useState('новые')
  const cats = ['новые', 'в работе', 'доп. проверка', 'на согласовании', 'готово']
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {cats.map((cat, index) =>
          <div 
            className={active === cat ? `${styles.item} ${styles.active}` : styles.item} 
            key={index}
            onClick={() => setActive(cat)}
          >
              {cat}
          </div>
        )}
      </div>
      <div className={styles.dropdown}>
        <div className={styles.text}>
          Отдел
        </div>
        <img src={dropdown} />
      </div>
    </div>
  )
}
