import React from 'react'
import styles from './Filepicker.module.scss'
import plusIcon from '../../assets/icons/plus.svg'

export default function Filepicker () {
  return (
    <div className={styles.filepicker}>
      <div className={styles.content}>
        <div className={styles.add}>
          <img src={plusIcon}/>
        </div>
        <span className={styles.text}>
          Перетащите файл сюда или нажмите на кнопку
        </span>
      </div>
      <div className={styles.btn}>
        Выбрать файл
      </div>
    </div>
  )
}
