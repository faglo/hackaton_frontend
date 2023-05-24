import React from 'react'
import styles from './Modal.module.scss'
import close from '../../assets/icons/close.svg'

export default function Modal ({ children, open, onClose }) {
  if (!open) return null
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <img className={styles.close} src={close} onClick={onClose}/>
        {children}
      </div>
    </div>
  )
}
