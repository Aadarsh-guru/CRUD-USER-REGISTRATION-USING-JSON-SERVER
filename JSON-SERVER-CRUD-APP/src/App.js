import React from 'react'
import './App.css'
import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AddUser />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App