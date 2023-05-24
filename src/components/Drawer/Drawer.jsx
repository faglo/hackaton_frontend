import styles from './Drawer.module.scss'
import useCurrentPath from '../../hooks/useCurrentPath'
import SVGS from '../SVGS'
import { useNavigate } from 'react-router'
import React from 'react'

function NavItem ({
  name, icon, active, onClick
}) {
  return (
    <div className={active ? `${styles.item} ${styles.active}` : styles.item} onClick={onClick}>
      <SVGS name={icon} fill={active ? '#5030E5' : '#858585'}/>
      <div className={active ? `${styles.text} ${styles.active}` : styles.text }>
        {name}
      </div>
    </div>
  )
}

export default function Drawer () {
  const currentPath = useCurrentPath()
  const navigateTo = useNavigate()
  const menuElems = [
    {
      name: 'Главная',
      icon: 'main',
      path: '/'
    },
    {
      name: 'Документы',
      icon: 'apps',
      path: '/kanban'
    },
    {
      name: 'Задачи',
      icon: 'tasks',
      path: '/tasks'
    },
    {
      name: 'Пользователи',
      icon: 'users',
      path: '/users'
    },
    {
      name: 'Настройки',
      icon: 'settings',
      path: '/settings'
    },
    {
      name: 'Сообщения',
      icon: 'messages',
      path: '/messages'
    }
  ]

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        {
          menuElems.map((elem, index) => {
            return <NavItem
              key={index}
              name={elem.name}
              icon={elem.icon}
              active={currentPath === elem.path}
              onClick={ () => navigateTo(elem.path) }
            />
          })
        }
      </div>
    </div>
  )
}
