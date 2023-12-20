import React, { useEffect, useRef, useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { DefaultAccordion } from './menuAcc'

function LayOut({ myData, userIndex, setPadding }) {

  const [viewMenu, setViewMenu] = useState(false)
  const [menuStyle, setMenuStyle] = useState(true)
  const navBar = useRef()
  const [path, setPath] = useState('Dashboard')
  const pagePath = useRef()
  const location = useLocation();
  const userImg = useRef()
  const page = useRef()
  const pathname = useRef()
  const miniMenu = useRef()
  const openBig = useRef()
  const openSmall = useRef()
  let pages = document.querySelectorAll('.pages')

  let len = myData.length
  let fullName = ''
  let num = 0

  function setIndex() {
    let url = (window.location.href).toString();
    let spliting = url.slice(url.indexOf('=') + 1, url.length);
    let eq = spliting.slice(0, spliting.indexOf('&'))
    // console.log(eq);
    if (eq.indexOf('+') != -1) {
      eq = eq.replaceAll('+', ' ')
    }
    for (let i = 0; i < len; i++) {
      if (myData[i].name == eq) {
        num = myData[i].id
      }
    }
  }

  let w = document.body.offsetWidth
  useEffect(() => {
    let w = document.body.offsetWidth
    userImg.current.setAttribute('src', 'https://honareheyat.com/cache/991bd1cb/av6eb17e588ff7f88f538.jpeg')

    let x = (window.location.pathname)
    x = x.slice(1, x.length)
    if (x == '') {
      x = 'dashboard'
    }

    setPath(x)

    pagePath.current.innerHTML = path
    userImg.current.addEventListener('click', function () {
      setViewMenu(!viewMenu)
    })
    function openBigMenu() {
      setMenuStyle(!menuStyle)
      pages.forEach(function (val) {
        if (w > 992) {
          val.classList.add('pl-[17vw]')
          val.classList.remove('pl-[10vw]')
        }
      })
    }
    function openSmallMenu() {
      setMenuStyle(!menuStyle)
      pages.forEach(function (val) {
        if (w > 992) {
          val.classList.remove('pl-[17vw]')
          val.classList.add('pl-[10vw]')
        }
      })
    }

    openSmall.current.addEventListener('click', openSmallMenu)
    openBig.current.addEventListener('click', openBigMenu)


    if (w <= 992) {
      let npath = (window.location.pathname)
      npath = npath.slice(1, x.length + 1)
      let nesPath = 'path'
      if ((path == 'dashboard')) {
        nesPath = ''
      }

      // console.log(npath);
      // console.log(path);

      if ((path != npath) && (npath != nesPath)) {
        navBar.current.style.left = '-100%'
        pathname.current.style.paddingLeft = '10vw'
      }
      openSmall.current.classList.add('opacity-0')
      openSmall.current.classList.add('invisible')
      miniMenu.current.style.left = '-100%'
      openSmall.current.classList.remove('opacity-100')
      openSmall.current.classList.remove('visible')
    }
    else {
      openSmall.current.classList.remove('opacity-0')
      openSmall.current.classList.remove('invisible')
      miniMenu.current.style.left = '0'
      openSmall.current.classList.add('opacity-100')
      openSmall.current.classList.add('visible')
    }
  })

  setIndex()

  for (let i = 0; i < len; i++) {
    if (
      myData[i].id == num
    ) {
      fullName = myData[i].name
      userImg.current.setAttribute('src', myData[i].img)
      break
    }
  }

  let imgCnt = 0

  for (let i = 0; i < len; i++) {
    if (imgCnt == 0) {
      userImg.current.setAttribute('src', 'https://honareheyat.com/cache/991bd1cb/av6eb17e588ff7f88f538.jpeg')
    }
    if (
      userImg.current.getAttribute('src') == myData[i].img
    ) {
      userImg.current.setAttribute('src', myData[i].img)
      fullName = myData[i].name
    }
  }

  function _delete() {
    if (num != 0) {
      let name = ''
      for (let i = 0; i < len; i++) {
        if (
          myData[i].id == num
        ) {
          name = myData[i].name
          break
        }
      }
      fetch('https://6577648a197926adf62e3406.mockapi.io/adminPanel/users/' + (num), {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(task => {
        alert('User ' + name + ' deleted!');
        window.location.assign('/login')
        document.cookie = ''
      }).catch(error => {
        console.log(error);
        alert('error...')
      })
    }
  }

  function logout() {
    window.location.assign('/login')
    document.cookie = ''
  }

  function viewInfo() {
    if (num != 0) {
      // console.log(module);
      for (let i = 0; i < len; i++) {
        if (myData[i].id == num) {
          alert(myData[i].name + '\n' + 'Email: ' + myData[i].email + '\n' + 'Password: ' + myData[i].password)
        }
      }
    }
  }



  return (
    <div id='layout' className='flex flex-nowrap w-[100vw] absolute z-100 h-[100vh] bg-[#181821]' ref={page}>
      <nav ref={miniMenu} id='miniMenu' className='duration-300 fixed duration-100 top-0 w-[5vw] h-full bg-[#1f1f2b] px-3 text-[1vw] text-[#9a9cab]' style={menuStyle ? { opacity: '1', left: '0', zIndex: '100' } : { opacity: '0', left: '-100%', zIndex: '1' }}>
        <ul className='w-full h-full flex flex-wrap justify-center content-start'>
          <li className='w-full h-[10%] text-[#9092a0] duration-100 cursor-pointer  relative group hover:text-[#7fd1a9]'>
            <span className='w-full h-full flex absolute top-0 text-[2vw] left-0'><i className="w-full h-full flex justify-center items-center bi bi-house-door-fill"></i></span>
            <ul id='layout' className='min-w-[200px] min-h-[100px] py-3 px-5 duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible  absolute left-[100%] top-1/2 rounded-lg bg-[#1F1F2B] flex flex-wrap px-3 content-around'>
              <li className='h-[45%] w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer my-2 '>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/'>eCommerce</Link></li>
              <li className='h-[45%] w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/crypto'>Crypto</Link></li>
            </ul>
          </li>
          <li className='w-full h-[10%] text-[#9092a0] duration-100 cursor-pointer  relative group hover:text-[#7fd1a9]'>
            <span className='w-full h-full flex absolute top-0 text-[2vw] left-0'><i className="w-full h-full flex justify-center items-center bi bi-people-fill"></i></span>
            <ul id='layout' className='min-w-[200px] min-h-[100px] py-3 px-5 duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible  absolute left-[100%] top-1/2 rounded-lg bg-[#1F1F2B] flex flex-wrap px-3 content-around'>
              <li className='h-[45%] w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer my-2 '>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/contact'>Contact</Link></li>
              <li className='h-[45%] w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/social'>Social</Link></li>
            </ul>
          </li>
          <li className='w-full h-[10%] text-[#9092a0] duration-100 cursor-pointer  relative group hover:text-[#7fd1a9]'>
            <span className='w-full h-full flex absolute top-0 text-[2vw] left-0'><i className="w-full h-full flex justify-center items-center bi bi-star-fill"></i></span>
            <ul id='layout' className='min-w-[200px] min-h-[100px] py-3 px-5 duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible  absolute left-[100%] top-1/2 rounded-lg bg-[#1F1F2B] flex flex-wrap px-3 content-around'>
              <li className='h-[20%] w-full my-2 flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer my-2 '>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/404'>404 Page</Link></li>
              <li className='h-[20%] w-full flex my-2 justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/500'>500 Page</Link></li>
              <li className='h-[20%] w-full flex my-2 justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/login'>Login</Link></li>
              <li className='h-[20%] w-full flex my-2 justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/register'>Register</Link></li>
            </ul>
          </li>
          <li className='w-full h-[10%] text-[#9092a0] duration-100 cursor-pointer  relative group hover:text-[#7fd1a9]'>
            <span className='w-full h-full flex absolute top-0 text-[2vw] left-0'><i className="w-full h-full flex justify-center items-center bi bi-droplet-fill"></i></span>
            <ul id='layout' className='min-w-[250px] min-h-[50px] py-3 px-5 duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible  absolute left-[100%] top-1/2 rounded-lg bg-[#1F1F2B] flex flex-wrap px-3 content-around'>
              <li className='h-full w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer my-2 '>
                <span className='w-[10%] h-[80%]'><i className="w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full' to='/formValidation'>Form Validation</Link></li>
            </ul>
          </li>
          <span ref={openBig} onClick={setPadding} className='w-[30px] h-[30px] flex absolute bottom-[5%] left-1/2 translate-x-[-50%] cursor-pointer text-[2vw] font-bold '><i className="h-full w-full flex items-center justify-center bi bi-arrow-right"></i></span>
        </ul>
      </nav>
      {/* ################ Big Menu ################# */}
      <nav ref={navBar} id='bigMenu' className='duration-300 fixed left-0 top-0 w-[30vw] lg:w-[15vw] h-full bg-[#1f1f2b] px-3 text-[1vw] text-[#9a9cab]' style={menuStyle ? { opacity: '0', left: '-100%', zIndex: '1' } : { opacity: '1', left: '0', zIndex: '100' }}>
        <DefaultAccordion dashboard={
          <div className='flex justify-start w-full items-center px-1 text-[#9092a0] duration-100 hover:text-[#7fd1a9] cursor-pointer'>
            <span className='w-[20%] h-full flex mx-2'><i className="w-full h-full flex justify-center items-center bi bi-house-door-fill"></i></span>
            <h3 className='text-[2vw] md:text-[1.2vw]  font-bold h-full w-[70%]'>Dashboard</h3>
          </div>
        } dashboardTitles={
          <ul id='layout' className='w-full h-full flex flex-wrap px-3 content-around'>
            <li className='h-[45%] w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer my-2 '>
              <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
              <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/'>eCommerce</Link></li>
            <li className='h-[45%] w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer'>
              <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
              <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/crypto'>Crypto</Link></li>
          </ul>
        } apps={
          <div className='flex justify-start w-full items-center px-1 text-[#9092a0] duration-100 hover:text-[#7fd1a9] cursor-pointer'>
            <span className='w-[20%] h-full flex mx-2'><i className="w-full h-full flex justify-center items-center bi bi-people-fill"></i></span>
            <h3 className='text-[2vw] md:text-[1.2vw]  font-bold h-full w-[70%]'>Apps</h3>
          </div>
        }
          appsTitles={
            <ul id='layout' className='w-full h-full flex flex-wrap px-3 content-around'>
              <li className='h-[45%] w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer my-2 '>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/contact'>Contact</Link></li>
              <li className='h-[45%] w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/social'>Social</Link></li>
            </ul>
          }
          pages={
            <div className='flex justify-start w-full items-center px-1 text-[#9092a0] duration-100 hover:text-[#7fd1a9] cursor-pointer'>
              <span className='w-[20%] h-full flex mx-2'><i className="w-full h-full flex justify-center items-center bi bi-star-fill"></i></span>
              <h3 className='font-bold h-full w-[70%] text-[2vw] md:text-[1.2vw] '>Pages</h3>
            </div>
          }
          pagesTitles={
            <ul id='layout' className='w-full h-full flex flex-wrap px-3 content-around'>
              <li className='h-[20%] w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer my-1 '>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/404'>404 Page</Link></li>
              <li className='h-[20%] w-full my-1 flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/500'>500 Page</Link></li>
              <li className='h-[20%] my-1 w-full flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/login'>Login</Link></li>
              <li className='h-[20%] w-full my-1 flex justify-around items-center text-white duration-100 hover:pl-2 font-bold cursor-pointer'>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw]' to='/register'>Register</Link></li>
            </ul>
          }
          form={
            <div className='flex justify-start w-full items-center px-1 text-[#9092a0] duration-100 hover:text-[#7fd1a9] cursor-pointer'>
              <span className='w-[20%] h-full flex mx-2'><i className=" w-full h-full flex justify-center items-center bi bi-droplet-fill"></i></span>
              <h3 className='text-[2vw] md:text-[1.2vw] font-bold h-full w-[60%]'>Form</h3>
            </div>
          } formTitles={
            <ul id='layout' className='w-full h-full flex flex-wrap px-3 content-around'>
              <li className='h-full w-full flex justify-around items-center duration-100 hover:pl-2 text-white font-bold cursor-pointer my-1 '>
                <span className='w-[10%] h-[80%]'><i className="text-[1.3vw] lg:text-[.9vw]  w-full h-full flex justify-center items-center bi bi-circle"></i></span>
                <Link className='w-[70%] h-full text-[1.5vw] lg:text-[.9vw] ' to='/formValidation'>Form Validation</Link></li>
            </ul>
          } />
        <span ref={openSmall} onClick={setPadding} className='w-[30px] h-[30px] flex absolute bottom-[5%] left-1/2 translate-x-[-50%] cursor-pointer text-[2vw] font-bold '><i className="h-full w-full flex items-center justify-center bi bi-arrow-left"></i></span>
      </nav>
      <div id='pathName' ref={pathname} className=' absolute top-0 right-0 w-full h-[10vh] flex justify-between items-center pr-[10vw]' style={menuStyle ? { paddingLeft: '10vw' } : { paddingLeft: '20vw' }}>
        <h3 className='capitalize z-100 text-[3vw] lg:text-[1.5vw] text-white font-bold' ref={pagePath}></h3>
        <figure className='h-[5vh] rounded-full cursor-pointer' >
          <img ref={userImg} className='w-full h-full rounded-full object-dover' />
          <div className='absolute right-[22vw] md:right-[17vw] duration-300 bg-[#1F1F2B] top-[1vh] w-[100px] md:w-[20vw] p-1 rounded-md flex flex-wrap content-center h-[13vh] ' style={viewMenu ? { opacity: '1', visibility: 'visible' } : { opacity: '0', visibility: 'hidden' }}>
            <div className='w-full h-[30%] flex justify-evenly items-center group' onClick={viewInfo} >
              <span className='h-full w-[20%] flex text-[#838593] duration-100 group-hover:text-[#83d8ae]'><i className="w-full h-full flex justify-center items-center bi bi-person-fill"></i></span>
              <h4 className='h-full w-[75%] text-[1.5vw] mx-1 md:mx-0 md:text-[1vw] flex items-center duration-100 group-hover:text-[#83d8ae] text-[#838593]'>View Info</h4>
            </div>
            <div className='w-full h-[30%] flex justify-evenly items-center group' onClick={_delete} >
              <span className='h-full w-[20%] flex text-[#838593] duration-100 group-hover:text-[#83d8ae]'><i className="w-full h-full flex justify-center items-center bi bi-trash-fill"></i></span>
              <h4 className='h-full w-[75%] text-[1.5vw] mx-1 md:mx-0 md:text-[1vw] flex items-center duration-100 group-hover:text-[#83d8ae] text-[#838593]'>Delete account</h4>
            </div>
            <div className='w-full h-[30%] flex justify-evenly items-center group' onClick={logout} >
              <span className='h-full w-[20%] flex text-[#838593] duration-100 group-hover:text-[#83d8ae]'><i className="w-full h-full flex justify-center items-center bi bi-box-arrow-left"></i></span>
              <h4 className='h-full w-[75%] text-[1.5vw] mx-1 md:mx-0 md:text-[1vw] flex items-center duration-100 group-hover:text-[#83d8ae] text-[#838593]'>Logout</h4>
            </div>
          </div>
        </figure>
      </div>
      <Outlet />
    </div>
  )
}


export default LayOut