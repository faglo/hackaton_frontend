import React from 'react'
import styles from './KanbanColumn.module.scss'
import { useDroppable } from '@dnd-kit/core'

export default function KanbanColumn ({
  children,
  name,
  count,
  color,
  id
}) {
  const { isOver, setNodeRef } = useDroppable({ id })
  const style = {
    backgroundColor: !isOver ? 'transparent' : '#fafafa',
    transotion: 'all 1s ease',
    marginTop: '40px',
    borderRadius: '20px'
  }
  return (
    <div ref={setNodeRef} style={style}>
      <div className={styles.header}>
        <div className={styles.title}>
          {name}
        </div>
        <div className={styles.subtitle}>
          {count} документ(а,ов)
        </div>
        <div style={{
          border: `3px solid ${color}`,
          borderRadius: '200px'
        }}>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
