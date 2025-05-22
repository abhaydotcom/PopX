import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../component/home'
import Login from '../component/login'
import Signup from '../component/signup'
import AccountCard from '../component/Accountpage'
import PageNotFound from '../component/pageNotFound'

const Routess = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/account" element={<AccountCard/>} />
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default Routess