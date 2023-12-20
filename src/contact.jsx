import React, { useEffect, useRef, useState } from 'react'
import BarsDataset from './barChart'


import premium from './assets/img/premium.svg'
import pic1 from './assets/img/avatar1.jpeg'
import pic2 from './assets/img/avatar2.jpeg'
import pic3 from './assets/img/avatar3.jpeg'
import pic4 from './assets/img/avatar4.jpeg'
import pic5 from './assets/img/avatar5.jpeg'


import bg from './assets/img/socialBg.jpeg'
import blog from './assets/img/socialShoe.jpeg'

import StackedAreas from './linesChart'
import BasicPie from './pieChart'

function Contact() {
  // console.log(style);
  const contactPage = useRef()
  let openMenu = useRef()
  let w = document.body.offsetWidth
  useEffect(() => {
    if (w <= 992) {
      openMenu.current.classList.add('opacity-100')
      openMenu.current.classList.add('visible')

      // contactPage.current.classList.add('pl-[5vw]')
      openMenu.current.classList.remove('opacity-0')
      openMenu.current.classList.remove('invisible')
      // contactPage.current.classList.remove('pl-[17vw]')
    }
    else {
      openMenu.current.classList.add('opacity-0')
      openMenu.current.classList.add('invisible')

      // contactPage.current.classList.add('pl-[17vw]')
      openMenu.current.classList.remove('opacity-100')
      openMenu.current.classList.remove('visible')

      // contactPage.current.classList.remove('pl-[5vw]')
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
      contactPage.current.classList.add('translate-x-[0]')
      contactPage.current.classList.remove('translate-x-[30vw]')
      pathName.style.paddingLeft = '10vw'
    }
    else {
      menuB.style.left = '0'
      menuB.style.opacity = '1'
      menuB.style.zIndex = '100'
      e.target.classList.remove('bi-arrow-right')
      e.target.classList.add('bi-arrow-left')
      menuB.setAttribute('open', true)
      contactPage.current.classList.remove('translate-x-[0]')
      contactPage.current.classList.add('translate-x-[30vw]')
      pathName.style.paddingLeft = '40vw'
    }
  }

  return (
    <div ref={contactPage} className='pages w-full pb-[5vh] z-10 flex pl-[10vw] pr-[10vw] justify-evenly lg:pr-[5vw] translate-y-[15vh] h-auto flex-wrap absolute z-20'>
      <span ref={openMenu} onClick={(event) => openMenuB(event)} className='opacity-0 fixed invisible absolute top-[-10vh] translate-y-[-50%] cursor-pointer duration-100 left-[20vw] md:left-[22vw] w-[50px] h-[50px] '><i className="h-full w-full flex justify-center items-center text-white font-bold text-[3vw] md:text-[2vw] bi bi-arrow-right"></i></span>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic1} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3] text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>

      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic2} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic3} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic4} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic5} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic2} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic4} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
      <figure className='w-[250px] h-[250px] lg:w-[300px] m-2 lg:h-[300px] bg-[#1f1f2b] rounded-lg flex flex-wrap justify-center content-center  '>
          <img src={pic1} className='w-[70px] h-[70px] rounded-lg object-cover ' />
          <figcaption className= ' w-full h-[50%] flex flex-wrap conntent-center justify-center my-3 '>
            <span className='text-white font-bold text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>John Doe</span>
            <span className='text-[#9a9aa3]  text-[2.5vw] md:text-[1.2vw] lg:text-[1vw] w-full flex justify-center '>Entrepreneur</span>
            <div className='w-full flex p-3 justify-center items-center '>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 -rotate-90 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#86c1ed] rounded-full '><i className="bi bi-telephone-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#83d8ae] rounded-full '><i className="bi bi-envelope-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
              <span className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex cursor-pointer mx-2 duration-100 hover:shadow-[0_0px_10px_rgb(255,255,255,0.2)] text-white bg-[#fc9494] rounded-full '><i className="bi bi-camera-video-fill w-full h-full flex items-center rounded-full justify-center "></i></span>
            </div>
          </figcaption>
      </figure>
    </div>
  )
}

export default Contact