import React from 'react'
import styles from './DocumentList.module.scss'
import marker from '../../assets/icons/marker.svg'

export default function DocumentList () {
  return (
        <div>
            <div className={styles.container}>
                <button className={styles.marker}>
                    <img src={marker} alt=""/>
                </button>
            </div>

            <div className={styles.doc_container}>
                <div className={styles.list}>
                    <div className={styles.content}>

                    </div>
                </div>
            </div>

        </div>
  )
}
