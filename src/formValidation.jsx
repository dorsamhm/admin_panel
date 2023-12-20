import React, { useEffect, useRef, useState } from 'react'


function FormValidation() {

  const usernameError = useRef()
  const lnameError = useRef()
  const fnameError = useRef()
  const cityError = useRef()
  const terms = useRef()
  const termsError = useRef()
  const submit = useRef()
  const formPage = useRef()
  let openMenu = useRef()
  let w = document.body.offsetWidth


  function checkFname() {
    let fname = fnameError.current.previousElementSibling
    if (fname.value == '') {
      fname.classList.add('focus:border-[2px]')
      fname.classList.add('border-[#682430]')
      fname.classList.remove('border-[#195e41]')
      fnameError.current.innerHTML = ''
    }
    else {
      fname.classList.remove('border-[#682430]')
      fname.classList.add('border-[#195e41]')
      fname.classList.add('focus:border-[2px]')
      fnameError.current.innerHTML = 'Looks good!'
      fnameError.current.style.color = '#4fc3ae'
    }
  }
  function checkLname() {
    let lname = lnameError.current.previousElementSibling
    if (lname.value == '') {
      lname.classList.add('focus:border-[2px]')
      lname.classList.add('border-[#682430]')
      lname.classList.remove('border-[#195e41]')
      lnameError.current.innerHTML = ''
    }
    else {
      lname.classList.remove('border-[#682430]')
      lname.classList.add('border-[#195e41]')
      lname.classList.add('focus:border-[2px]')
      lnameError.current.innerHTML = 'Looks good!'
      lnameError.current.style.color = '#4fc3ae'
    }
  }
  function checkUsername() {
    let username = usernameError.current.previousElementSibling.children
    username = Object.entries(username)
    username = username[1]
    username = username[1]
    // console.log(username);
    if (username.value == '') {
      username.classList.add('focus:border-[2px]')
      username.classList.add('border-[#682430]')
      username.classList.remove('border-[#195e41]')
      usernameError.current.innerHTML = 'Please choose a username.'
      usernameError.current.style.color = '#fc9290'
    }
    else {
      username.classList.remove('border-[#682430]')
      username.classList.add('border-[#195e41]')
      username.classList.add('focus:border-[2px]')
      usernameError.current.innerHTML = ''
    }
  }
  function checkCity() {
    let city = cityError.current.previousElementSibling
    if (city.value == '') {
      city.classList.add('focus:border-[2px]')
      city.classList.add('border-[#682430]')
      city.classList.remove('border-[#195e41]')
      cityError.current.innerHTML = 'Please provide a valid city.'
      cityError.current.style.color = '#fc9290'
    }
    else {
      city.classList.remove('border-[#682430]')
      city.classList.add('border-[#195e41]')
      city.classList.add('focus:border-[2px]')
      cityError.current.innerHTML = ''
    }
  }
  function checkTerms() {
    let term = termsError.current.previousElementSibling.children
    term = Object.entries(term)
    term = term[0]
    term = term[1]

    if (term.checked == true) {
      term.style.backgroundColor = '#4fc3ae'
      term.nextElementSibling.style.color = '#4fc3ae'
      termsError.current.innerHTML = ''
    }
    else {
      term.style.backgroundColor = '#fc9290'
      term.nextElementSibling.style.color = '#fc9290'
      termsError.current.innerHTML = 'You must agree before submitting.'
      termsError.current.style.color = '#fc9290'
    }
  }
  function checkForm() {

    checkFname()
    checkLname()
    checkUsername()
    checkCity()
    checkTerms()

    let fname = fnameError.current.previousElementSibling
    let lname = lnameError.current.previousElementSibling
    let username = usernameError.current.previousElementSibling.children
    username = Object.entries(username)
    username = username[1]
    username = username[1]
    let city = cityError.current.previousElementSibling
    let term = termsError.current.previousElementSibling.children
    term = Object.entries(term)
    term = term[0]
    term = term[1]
    if ((term.checked == true) && (city.value != '') && (username.value != '') && (lname.value != '') && (fname.value != '')){
      alert('Form Submitted')
    }
  }

  useEffect(() => {
    if (w <= 992) {
      openMenu.current.classList.add('opacity-100')
      openMenu.current.classList.add('visible')
      openMenu.current.classList.remove('opacity-0')
      openMenu.current.classList.remove('invisible')
    }
    else {
      openMenu.current.classList.add('opacity-0')
      openMenu.current.classList.add('invisible')
      openMenu.current.classList.remove('opacity-100')
      openMenu.current.classList.remove('visible')
    }
  }, [])

  function openMenuB(e) {
    let menuB = document.getElementById('bigMenu')
    let pathName = document.getElementById('pathName')
    let status = menuB.getAttribute('open')
    if (status == 'true') {
      menuB.style.left = '-100%'
      menuB.style.opacity = '0'
      menuB.style.zIndex = '1'
      e.target.classList.remove('bi-arrow-left')
      e.target.classList.add('bi-arrow-right')
      menuB.setAttribute('open', false)
      formPage.current.classList.add('translate-x-[0]')
      formPage.current.classList.remove('translate-x-[30vw]')
      pathName.style.paddingLeft = '10vw'
    }
    else {
      menuB.style.left = '0'
      menuB.style.opacity = '1'
      menuB.style.zIndex = '100'
      e.target.classList.remove('bi-arrow-right')
      e.target.classList.add('bi-arrow-left')
      menuB.setAttribute('open', true)
      formPage.current.classList.remove('translate-x-[0]')
      formPage.current.classList.add('translate-x-[30vw]')
      pathName.style.paddingLeft = '40vw'
    }
  }

  return (
    <div ref={formPage} className='pages w-full pb-[5vh] z-10 flex pl-[10vw] pr-[10vw] justify-evenly lg:pr-[5vw] translate-y-[15vh] h-auto flex-wrap absolute z-20'>
      <span ref={openMenu} onClick={(event) => openMenuB(event)} className='opacity-0 fixed invisible absolute top-[-10vh] translate-y-[-50%] cursor-pointer duration-100 left-[30vw] md:left-[32vw] w-[50px] h-[50px] '><i className="h-full w-full flex justify-center items-center text-white font-bold text-[3vw] md:text-[2vw] bi bi-arrow-right"></i></span>
      <div className='w-full h-auto flex flex-wrap justify-between content-center'>
        <h2 className=' w-full text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] text-white my-2 font-bold '>Validation</h2>
        <p className=' w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] font-bold my-2 '>Provide valuable, actionable feedback to your users with HTML5 form validation.</p>
        <div className='h-[20vh] w-full lg:w-[30%]  flex flex-wrap p-3'>
          <h4 className=' w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] font-bold '>First name</h4>
          <input type="text" onInput={checkFname} className='text-white  outline-none w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] px-3 h-[50px] bg-[#181821] border rounded-md ' />
          <span ref={fnameError} className='w-full  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-bold '></span>
        </div>
        <div className='h-[20vh] w-full lg:w-[30%]  flex flex-wrap p-3'>
          <h4 className=' w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] font-bold '>Last name</h4>
          <input type="text" onInput={checkLname} className='text-white  outline-none w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] px-3 h-[50px] bg-[#181821] border rounded-md ' />
          <span ref={lnameError} className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-bold '></span>
        </div>
        <div className='h-[20vh] w-full lg:w-[30%]  flex flex-wrap p-3'>
          <h4 className=' w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] font-bold '>Username</h4>
          <div className='w-full flex justify-start '>
            <span className=' h-[50px] w-[20%] border text-white rounded-s-md text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] flex items-center justify-center '>@</span>
            <input type="text" onInput={checkUsername} className=' outline-none text-white w-[70%] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] px-3 h-[50px] bg-[#181821] border rounded-e-md ' />
          </div>
          <span ref={usernameError} className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-bold'></span>
        </div>
        <div className='h-[20vh] w-full lg:w-[70%]  flex justify-start flex-wrap p-3'>
          <h4 className=' w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] font-bold '>City</h4>
          <input type="text" onInput={checkCity} className='text-white  outline-none w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] px-3 h-[50px] bg-[#181821] border rounded-md ' />
          <span ref={cityError} className='w-full  text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-bold '></span>
        </div>
        <div className='h-[20vh] w-full lg:w-[30%] flex-wrap flex justify-start items-center flex-wrap p-5'>
          <div className='h-1/2 w-full flex-wrap flex justify-start items-center flex-wrap pt-3'>
            <input onChange={checkTerms} className=' my-1 cursor-pointer w-[15px]  cursor-pointer translate-x-[15%] text-[#181821] border-[1px] border-[#1f1f2b] focus:bg-[#83d8ae] focus:text-white duration-300 mr-2' ref={terms} type="checkbox" name="terms" id="terms" />
            <label className=' my-1 text-[#9a9ca2] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] cursor-pointer bg-[#181821] rounded-md' htmlFor="terms">Agree to terms and conditions</label>
          </div>
          <span ref={termsError} className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mb-2'></span>
          <button className='text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] py-3 rounded-md duration-100 hover:shadow-[0_0px_15px_rgb(255,255,255,0.2)] px-5 bg-white text-slate-900 flex justify-center ' ref={submit} onClick={checkForm}>Submit form</button>
        </div>
      </div>
    </div>
  )
}

export default FormValidation