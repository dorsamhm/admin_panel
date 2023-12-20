import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


function Login({ myData, myChange }) {

  let userError = useRef()
  let passError = useRef()
  let tryAgain = useRef()
  const [userIndex, setUserIndex] = useState(0)
  let flag = 0
  let len = myData.length

  let cnt = 0
  function checkUser(e) {
    let _user = userError.current.previousElementSibling.value
    let _pass = passError.current.previousElementSibling.value
    for (let i = 0; i < len; i++) {
      if (
        (myData[i].name == _user) &&
        (myData[i].password == _pass)
      ) {
        alert('Welcome back ' + myData[i].name)
        const logUser = {
          name: myData[i].name,
          email: myData[i].email,
          password: myData[i].password,
          img: myData[i].img
        }
        flag++
        break
      }
    }

    if (flag == 0) {
      e.preventDefault()
      if (cnt != 0) {
        passError.current.innerHTML = 'Wrong password'
      }
      tryAgain.current.innerHTML = '**Please try again'
    }
  }
  function checkuser(e) {
    let cnt2 = 0
    for (let i = 0; i < len; i++) {
      if (
        (myData[i].name == userError.current.previousElementSibling.value)
      ) {
        userError.current.innerHTML = 'This username is available'
        setUserIndex(i)
        cnt2++
        break
      }
    }
    if (cnt2 == 0) {
      userError.current.innerHTML = ''
    }
  }

  return (
    <div id='login' className='bg-[#181821] flex justify-center items-center h-[100vh] w-[100vw]'>
      <div className='w-[100vw] md:w-[80vw] lg:w-[50vw] h-[80vh] lg:h-[60vh]  flex flex-wrap justify-center content-center'>
        <h2 className='w-full text-[3vw] md:text-[1.5vw] font-bold text-[#83d8ae] text-center'>Neo</h2>
        <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.2vw]'>Welcome to Neo</span>
        <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.2vw]'>Please Sign-in to your account.</span>
        <form action="/" className='px-[5%] h-auto py-5 w-full flex flex-wrap justify-center content-center' name='login' onSubmit={(event) => checkUser(event)}>
          <input className=' w-[80%] md:w-[60%] h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' onInput={(event) => checkuser(event)} type="text" name='user' placeholder='Username' />
          <span className='w-[80%] md:w-[60%] mt-1 text-[#0d9b54] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={userError}></span>
          <input className='my-2 w-[80%] md:w-[60%] h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' type="password" name='pass' placeholder='Password' />
          <span className='w-full text-[#af301e] text-[.8vw]' ref={passError}></span>
          <span className='w-[80%] md:w-[60%]  text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={tryAgain}></span>
          <button className='my-2 w-[60%] h-[50px] text-white bg-[#ada6f2] duration-100 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] rounded-md text-[2vw] lg:text-[1vw] font-bold' onMouseMove={myChange} data-num={JSON.stringify(userIndex)}>Sign In</button>
          <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw]'>Not Registered? <Link className='text-[#83d8ae]' to='/register'>Create an account</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login