import React from 'react'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import star from '../../assets/icons/star.svg'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import styles from './KanbanCard.module.scss'

export default function KanbanCard ({
  id,
  did,
  company,
  date,
  name,
  pricePerUnit,
  price,
  btnName = 'Взять в работу',
  colID,
  minified = false,
  onClick = undefined
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
  const style = {
    transform: CSS.Translate.toString(transform)
  }
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} onClick={onClick}>
      <div className={styles.container} style={{
        height: (colID === 1 ? '240px' : '200px'),
        width: (minified ? '278px' : 'auto'),
        cursor: (onClick ? 'pointer' : 'default')
      }}>
        <div className={styles.header_container}>
          <img src={img2}/>
          <div className={styles.header_txt_container}>
            <div className={styles.header_title}>
              {company}
            </div>
            <div className={styles.header_subtitle}>
              Договор № {did}
            </div>
          </div>
          {
            !minified && (
              <div className={styles.header_stars}>
                <img src={star}/>
                <img src={star}/>
              </div>
            )
          }
          <div className={styles.header_date}>
            {date}
          </div>
        </div>
        <div className={styles.body_container}>
          <img className={styles.img} src={img3}/>
          <span className={styles.desc}>{name}</span>
        </div>
        <div className={styles.actions}>
          <div className={styles.txt_container}>
            <div className={styles.txt}>{pricePerUnit} ₽/шт</div>
            <div className={styles.txt}>{price} ₽</div>
          </div>
          <div className={styles.buttons} style={{
            display: (colID === 1 ? 'flex' : 'none')
          }}>
            <div className={styles.reject}>Отклонить</div>
            <div className={styles.accept}>{btnName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
