import React from 'react'
import './assets/fonts/stylesheet.css'
import './styles/App.css'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router'
import Kanban from './screens/Kanban'
import Documents from './screens/Documents'
import Main from './screens/Main'
import Tasks from './screens/Tasks'
import Chat from './screens/Chat'

export default function App () {
  return (
    <div>
      <Nav>
        <Routes>
            <Route element={<Chat/>} path="/chat/:chatID" />
            <Route element={<Kanban />} path="/kanban" />
            <Route element={<Kanban />} path="/kanban" />
            <Route element={<Documents/>} path="/settings" />
            <Route element={<Tasks/>} path='/tasks' />
            <Route element={<Main/>} path="/" />
          </Routes>
      </Nav>
    </div>
  )
}
