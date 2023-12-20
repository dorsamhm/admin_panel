import React, { useEffect, useState } from 'react'
import './assets/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Error404 from './404'
import Error500 from './500'
import Contact from './contact'
import Crypto from './crypto'
import Dashboard from './dashboard'
import FormValidation from './formValidation'
import LayOut from './layOut'
import Login from './login'
import Register from './register'
import Social from './social'


function App() {
  const [userIndex, setUserIndex] = useState(true)
  const [data, setData] = useState([])  
  const myChange = (e) => {
    let num = JSON.parse(e.target.getAttribute('data-num'))
    // console.log(num);
    setUserIndex(num)
  }

  useEffect(() => {
    async function myFetch() {
      let x = await fetch('https://6577648a197926adf62e3406.mockapi.io/adminPanel/users')
      let user = await x.json()
      setData(user)
    }
    myFetch()

  }, [])
  
  let x = new Date()
  let day = x.getDay()
  if (document.cookie == '') {
    document.cookie = ("status= on, expires=" + (day + 1))
    return (
      <Login myData={data} myChange={(event)=>myChange(event)}/>
    )
  }
  else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path="login" element={<Login myData={data} myChange={(event)=>myChange(event)}/>} />
            <Route path='register' element={<Register myData={data}/>} />
            <Route path='404' element={<Error404 />} />
            <Route path='500' element={<Error500 />} />
          </Route>

          <Route path='/' element={<LayOut myData={data} userIndex={userIndex} />}>
            <Route index element={<Dashboard/>} />
            <Route path='contact' element={<Contact />} />
            <Route path='crypto' element={<Crypto />} />
            <Route path='formValidation' element={<FormValidation />} />
            <Route path='social' element={<Social />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App