import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Register({ myData }) {
  let emailError = useRef()
  let passError = useRef()
  let confirmError = useRef()
  const tryAgain = useRef()
  let nameError = useRef()
  let terms = useRef()
  let regButton = useRef()
  const [userIndex, setUserIndex] = useState(0)

  let myErr = 0
  function sendServer(x, y, z, q, mydata) {
    let cnt = 0
    let len = mydata.length
    for (let i = 0; i < len; i++) {
      if (
        (mydata[i].name == x)
      ) {
        cnt++
        break
      }
    }

    if (
      (x != '') &&
      (y != '') &&
      (z != '') &&
      (q != '') &&
      (cnt == 0)
    ) {
      let newImg = ''
      fetch('https://6577648a197926adf62e3406.mockapi.io/adminPanel/users', {
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(task => {
        let len2 = task.length
        for (let i = 0; i < len; i++) {
          if (myData[i].name == x) {
            newImg = task[i].img
          }
        }
      })

      const newUsers = {
        name: x,
        email: y,
        password: z,
        img: newImg
      };

      fetch('https://6577648a197926adf62e3406.mockapi.io/adminPanel/users', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newUsers)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(task => {
        // console.log(task);
        alert('User ' + x + ' added')
        location.assign('/login')
        regButton.current.setAttribute('data-num', JSON.stringify(userIndex))
      })
    }
  }

  function myVal(e) {
    e.preventDefault()

    emailError.current.innerHTML = ''
    let _email = emailError.current.previousElementSibling.value
    let _pass = passError.current.previousElementSibling.value
    let _conPass = confirmError.current.previousElementSibling.value
    let _name = nameError.current.previousElementSibling.value
    let nameErr = 0
    let len = myData.length

    if (
      _email.search(/script/) == -1
    ) {
      if (
        (_email.length < 10) ||
        ((_email.search(/@/)) == -1) ||
        (((_email.search(/[.]/))) == -1)
      ) {
        emailError.current.innerHTML = 'Please enter correctly'
        myErr++
      }
    } else {
      e.preventDefault()
      location.assign('/404')
    }

    regButton.current.addEventListener('submit', sendServer(_name, _email, _pass, _conPass, myData))
    if (_name == '') {
      nameError.current.innerHTML = 'Please fill'
      nameErr++
    }
    else {
      nameError.current.innerHTML = ''
      nameErr = 0
    }

    let cnt = 0
    for (let i = 0; i < len; i++) {
      if (
        (myData[i].name == _name)
      ) {
        nameError.current.innerHTML = 'This username is already taken'
        cnt++
        break
      }
    }
    if (cnt == 0) {
      nameError.current.innerHTML = ''
    }

    if ((myErr > 0) || (_pass == '') || (_conPass == '') || (nameErr > 0) || (cnt > 0)) {
      e.preventDefault()
      // console.log(myErr);
      tryAgain.current.innerHTML = '**Please try again'
    }
  }

  function _confirmPass(e) {
    myErr = 0
    if (e.target.value != passError.current.previousElementSibling.value) {
      myErr++
      confirmError.current.innerHTML = 'Please enter correctly'
    }
    else {
      confirmError.current.innerHTML = ''
      myErr = 0
    }
  }


  function _checkPass(e) {
    let passFlag = 0
    myErr = 0
    if (
      (e.target.value.search(/[!@#$%^&*()]/)) >= 0
    ) {
      passFlag++
    } if (
      (e.target.value.search(/[a-z]/i)) >= 0
    ) {
      passFlag++
    } if (
      (e.target.value.search(/[0-9]/i)) >= 0
    ) {
      passFlag++
    }
    if (
      e.target.value.length > 8
    ) {
      passFlag++
    }

    // **************

    switch (passFlag) {
      case 1: passError.current.innerHTML = 'weak'
        passError.current.style.color = '#af301e'
          ; myErr++; break;
      case 2: passError.current.innerHTML = 'normal'
        passError.current.style.color = 'orange'
          ; myErr++; break;
      case 3: passError.current.innerHTML = 'good'
        passError.current.style.color = 'yellow'; break;
      case 4: passError.current.innerHTML = 'very good'
        passError.current.style.color = 'green'; break;
    }
  }

  return (
    <div className='bg-[#181821] flex justify-center items-center h-[100vh] w-[100vw]'>
      <div className='w-[90vw] lg:w-[50vw] h-[80vh] lg:h-[60vh] flex flex-wrap justify-center content-center'>
        <h2 className='w-full text-[3vw] md:text-[1.5vw] font-bold text-[#83d8ae] text-center'>Neo</h2>
        <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.2vw]'>Welcome to Neo</span>
        <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.2vw]'>Enter your details to create your account</span>
        <form action="/" name='register' className='px-[5%] h-auto py-5 w-full flex flex-wrap justify-center content-center' onSubmit={(event) => myVal(event)}>
          <input className='my-1  w-[80%] md:w-[60%] h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' type="text" name='name' placeholder='Fullname' />
          <span className='w-[80%] md:w-[60%]  text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={nameError}></span>
          <input className='my-1  w-[80%] md:w-[60%]  h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' type="text" name='email' placeholder='Email address' />
          <span className='w-[80%] md:w-[60%] text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={emailError}></span>
          <input className='my-1  w-[80%] md:w-[60%] h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' onInput={(event) => _checkPass(event)} type="password" name='pass' placeholder='Password' />
          <span className='w-[80%] md:w-[60%] text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={passError}></span>
          <input className='my-1  w-[80%] md:w-[60%] h-[50px] border-[.5px] border-[#9a9ca2] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] px-5 bg-[#181821] rounded-md' onInput={(event) => _confirmPass(event)} type="password" placeholder='Confirm Password' />
          <span className='w-full px-[10%] md:px-[20%] text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={confirmError}></span>
          <input className='my-1 cursor-pointer w-[15px] translate-x-[15%] text-[#181821] border-[1px] border-[#1f1f2b] focus:bg-[#83d8ae] focus:text-white duration-300' ref={terms} type="checkbox" name="terms" id="terms" />
          <label className=' my-1 w-[50%] text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw] bg-[#181821] rounded-md mx-2' htmlFor="terms">I agree to the <strong className='cursor-pointer text-[#83d8ae] font-thin'>Terms and Conditions</strong></label>
          <span className='w-full px-[20%] text-[#af301e] text-[1.8vw] md:text-[1vw] lg:text-[.8vw]' ref={tryAgain}></span>
          <button className='my-2 w-[60%] duration-100 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] h-[50px] text-white bg-[#86C1ED] rounded-md text-[2vw] lg:text-[1vw] font-bold' ref={regButton}>Register</button>
          <span className='w-full text-center text-[#9a9ca2] text-[2vw] md:text-[1.5vw] lg:text-[1vw]' >Already have an account? <Link className='text-[#83d8ae]' to='/login'>Sign In</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register