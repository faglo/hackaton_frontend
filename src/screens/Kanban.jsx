import React from 'react'
import Filepicker from '../components/Filepicker/Filepicker'
import Categories from '../components/Categories/Categories'
import KanbanTable from '../components/KanbanTable'

export default function Kanban () {
  return (
    <>
      <Filepicker/>
      <Categories/>
      <KanbanTable/>
    </>
  )
}
