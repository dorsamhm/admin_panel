import React, { useEffect, useRef } from 'react'

import pic1 from './assets/img/avatar1.jpeg'
import pic2 from './assets/img/avatar2.jpeg'
import pic3 from './assets/img/avatar3.jpeg'
import pic4 from './assets/img/avatar4.jpeg'
import bg from './assets/img/socialBg.jpeg'
import blog from './assets/img/socialShoe.jpeg'


function Social() {
  const socialPage = useRef()
  let openMenu = useRef()
  let w = document.body.offsetWidth
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
      socialPage.current.classList.add('translate-x-[0]')
      socialPage.current.classList.remove('translate-x-[30vw]')
      pathName.style.paddingLeft = '10vw'
    }
    else {
      menuB.style.left = '0'
      menuB.style.opacity = '1'
      menuB.style.zIndex = '100'
      e.target.classList.remove('bi-arrow-right')
      e.target.classList.add('bi-arrow-left')
      menuB.setAttribute('open', true)
      socialPage.current.classList.remove('translate-x-[0]')
      socialPage.current.classList.add('translate-x-[30vw]')
      pathName.style.paddingLeft = '40vw'
    }
  }

  return (
    <div ref={socialPage} className='pages w-full z-10 flex pl-[10vw] pr-[10vw] justify-evenly lg:pr-[5vw] translate-y-[15vh] h-auto flex-wrap absolute z-20'>
      <span ref={openMenu} onClick={(event) => openMenuB(event)} className='opacity-0 fixed invisible absolute top-[-10vh] translate-y-[-50%] cursor-pointer duration-100 left-[18vw] w-[50px] h-[50px] '><i className="h-full w-full flex justify-center items-center text-white font-bold text-[3vw] md:text-[2vw] bi bi-arrow-right"></i></span>
      <div className=' w-full h-[35vh] md:h-[45vh] xl:h-[50vh] flex flex-wrap'>
        <figure className='relative w-full h-[20vh] md:h-[30vh] lg:h-[35vh] xl:h-[45vh] rounded-xl flex'>
          <img src={bg} className='absolute top-0 left-0 w-full h-full rounded-xl object-cover' />
          <span className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900 to-gray-400 mix-blend-multiply rounded-xl' ></span>
          <div className='w-full h-[25vh] xl:h-[15vh] flex flex-wrap z-10  items-center justify-between content-between absolute top-[10vh] md:top-[20vh] lg:top-[25vh] xl:top-[35vh] left-0 '>
            <div className='flex items-center w-full h-[15vh] xl:w-1/2 justify-start  '>
              <figure className='w-full h-full mx-5 rounded-full flex-wrap flex items-center justify-center ' >
                <img src={pic3} className='h-full object-cover rounded-full ' />
                <h3 className='w-full h-auto my-4 md:my-3 xl:w-[48%] px-3 xl:mx-4  rounded-full text-white font-bold text-[2.5vw] md:text-[1.5vw] flex justify-center xl:justify-start items-center ' >Johan Doe</h3>
              </figure>
            </div>
            <ul className='flex items-center w-full h-[5vh] xl:w-1/2 justify-between '>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-2 text-white flex justify-center font-thin duration-100 hover:text-white active cursor-pointer'>Feed</li>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] mx-2 flex justify-center font-thin duration-100 hover:text-white cursor-pointer'>About</li>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] mx-2 flex justify-center font-thin duration-100 hover:text-white cursor-pointer'>Friends</li>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] mx-2 flex justify-center font-thin duration-100 hover:text-white cursor-pointer'>Photos</li>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] mx-2 flex justify-center font-thin duration-100 hover:text-white cursor-pointer'>Videos</li>
              <li className=' grow text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#9a9cab] mx-2 flex justify-center font-thin duration-100 hover:text-white cursor-pointer'>Music</li>
            </ul>
          </div>
        </figure>
      </div>
      <div className='w-full h-[70vh] md:h-[85vh] lg:w-[25%] flex flex-wrap my-[5vh] md:my-0 lg:my-[10vh] xl:my-[5vh]'>
        <div className='flex flex-wrap h-1/2 px-3 my-0 md:my-3 w-full content-center'>
          <h3 className='w-full text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-bold text-white my-2' >About</h3>
          <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] ' >Quisque vel tellus sit amet quam efficitur sagittis. Fusce aliquam pulvinar suscipit.</p>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-pencil-square"></i></span>
            <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>Studied at <strong className='text-[#83d8ae] cursor-pointer ' >San Diego University</strong></p>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-building"></i></span>
            <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>Manager at <strong className='text-[#83d8ae] cursor-pointer ' >Stacks</strong></p>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-compass"></i></span>
            <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>From <strong className='text-[#83d8ae] cursor-pointer ' >New York</strong></p>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-person"></i></span>
            <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>Followed by 320 people</p>
          </div>
          <div className='w-full flex justify-start items-center  my-2 '>
            <a className='py-3 px-5 rounded-md cursor-pointer mx-1 flex items-center duration-100 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] justify-center text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-white bg-[#86c1ed] '>Follow</a>
            <a className='py-3 px-5 rounded-md cursor-pointer flex items-center duration-100 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] justify-center text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-slate-900 bg-white '>Message</a>
          </div>
        </div>
        <div className='flex flex-wrap h-1/2 mt-2 md:mt-0 px-3 w-full content-center'>
          <h3 className='w-full text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-bold text-white my-2' >Contact Info</h3>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-envelope"></i></span>
            <a href="mailto:dorsaamhmdi@gmail.com" className='cursor-pointer w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>dorsaamhmdi@gmail.com</a>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-instagram"></i></span>
            <a href="https://instagram.com/dorsamhmdi.web?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' className='cursor-pointer w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>dorsamhmdi.web</a>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-linkedin"></i></span>
            <a href="https://www.linkedin.com/in/dorsa-mohammadi-692854284" target='_blank' className='cursor-pointer w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>Dorsa Mohammadi</a>
          </div>
          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-github"></i></span>
            <a href="https://github.com/dorsamhm" target='_blank' className='cursor-pointer w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>dorsamhm</a>
          </div>

          <div className='w-full flex justify-start items-center my-2'>
            <span className='h-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-1 text-[#899cab] flex '><i className="w-full h-full flex items-center jusitfy-center bi bi-compass"></i></span>
            <p className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin text-[#899cab] '>Lives in <strong className='text-[#83d8ae] cursor-pointer ' >Tehran</strong></p>
          </div>
        </div>
      </div>
      <div className='w-full h-[110vh] md:h-[140vh] lg:h-[120vh] xl:h-[140vh] bg-[#1f1f2b] rounded-lg p-3 lg:w-[40%] flex flex-wrap my-[5vh] lg:my-[10vh] xl:my-[5vh]'>
        <div className='flex justify-start items-center h-[5%] w-full'>
          <figure className='h-full rounded-md mx-2 flex '>
            <img src={pic2} className='w-full rounded-md h-full object-cover' />
          </figure>
          <div className='flex justify-between mx-2 items-center w-[90%] '>
            <div className='h-full w-[70%] flex flex-wrap content-center '>
              <span className='text-[#899cab] w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-bold '>John Doe</span>
              <span className='text-[#494957] w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] '>3hrs</span>
            </div>
            <span className=' flex h-full text-[2.5vw] lg:text-[1.2vw] text-[#899cab] cursor-pointer '><i className=" w-full h-full flex items-center justify-center bi bi-three-dots"></i></span>
          </div>
        </div>
        <div className='w-full text-[#899cab] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-thin '>Proin eu fringilla dui. Pellentesque mattis lobortis mauris eu tincidunt. Maecenas hendrerit faucibus dolor, in commodo lectus mattis ac.</div>
        <figure className='w-full h-[50%] md:h-[55%] flex flex-wrap  content-center '>
          <img src={blog} className='w-full rounded-lg h-[65%] md:h-[75%] ' />
          <figcaption className='w-full h-[20%] flex justify-start items-center '>
            <div className=' text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-2 cursor-pointer flex text-[#899cab] duration-100 hover:text-[#83d8ae] '>
              <span className='h-full mr-2'>
                <i className=" flex items-center jusitfy-center bi bi-heart"></i>
              </span>
              <span className='h-full translate-y-[-20%] ' >Like</span>
            </div>
            <div className=' text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-2 cursor-pointer flex text-[#899cab] duration-100 hover:text-[#83d8ae] '>
              <span className='h-full mx-2'>
                <i className=" flex items-center jusitfy-center bi bi-chat"></i>
              </span>
              <span className='h-full translate-y-[-20%] ' >Comment</span>
            </div>
            <div className=' text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mx-2 cursor-pointer flex text-[#899cab] duration-100 hover:text-[#83d8ae] '>
              <span className='h-full mx-2'>
                <i className=" flex items-center jusitfy-center bi bi-send"></i>
              </span>
              <span className='h-full translate-y-[-20%] ' >Share</span>
            </div>
          </figcaption>
        </figure>
        <div className='w-full h-[25%] flex flex-wrap  '>
          <div className='flex justify-evenly items-center h-[30%] w-full'>
            <figure className='h-full rounded-md flex mr-1'>
              <img src={pic3} className='w-full rounded-md h-[80%] object-cover' />
            </figure>
            <div className='flex justify-between items-center w-[80%] '>
              <div className='h-full w-[70%] flex flex-wrap content-center '>
                <span className='text-white w-full text-[2.5vw] mb-0 md:mb-2 lg:mb-0 md:text-[1.5vw] lg:text-[1vw] font-bold '>Sonny Rosas</span>
                <span className='text-[#899cab] w-full text-[2vw] md:text-[1.2vw] lg:text-[.7vw] '>Mauris ultrices convallis massa, nec facilisis enim interdum ac.</span>
              </div>
              <span className='flex h-full items-start text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#899cab] '>5min</span>
            </div>
          </div>
          <div className='flex justify-evenly items-center h-[30%] w-full'>
            <figure className='h-full rounded-md flex mr-1'>
              <img src={pic4} className='w-full rounded-md h-[80%] object-cover' />
            </figure>
            <div className='flex justify-between items-center w-[80%] '>
              <div className='h-full w-[70%] flex flex-wrap content-center '>
                <span className='text-white w-full text-[2.5vw] mb-0 md:mb-2 lg:mb-0 md:text-[1.5vw] lg:text-[1vw] font-bold '>Jacob Lee</span>
                <span className='text-[#899cab] w-full text-[2vw] md:text-[1.2vw] lg:text-[.7vw] '>Cras tincidunt quam nisl, vitae aliquet enim pharetra at. Nunc varius bibendum turpis, vitae ultrices tortor facilisis ac.</span>
              </div>
              <span className='flex h-full items-start text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#899cab] '>27min</span>
            </div>
          </div>
          <div className='w-full h-[30%] flex items-end jusitfy-center '>
            <input type="text" name="comment" id="comment" className='h-[80%] w-[70%] focus:text-white text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#5e757d] bg-[#181821] px-3 ' placeholder='Type something' />
            <a className=' px-5 cursor-pointer w-[30%] mx-1 flex h-[80%] flex items-center duration-100 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] justify-center text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-white bg-[#83d8ae] '>Comment</a>
          </div>
        </div>
      </div>
      <div className='h-[50vh] rounded-md lg:w-[25%] my-0 md:my-[5vh] lg:my-[10vh] xl:my-[5vh] p-3 w-full flex flex-wrap content-evenly justify-center'>
        <h3 className='text-white px-3 font-bold w-full items-center flex text-[3vw] md:text-[2.5vw] lg:text-[1.2vw]'>Stories</h3>
        <div className='w-full flex justify-start px-2 items-center '>
          <figure className='w-[50px] flex rounded-full h-[50px] cursor-pointer items-center justify-center text-white font-bold text-[1.5vw]  border-[2px] border-[#86c1ed]'>
            <img src={pic1} className='w-[95%] h-[95%] object-cover rounded-full ' />
          </figure>
          <div className='w-[50%] h-full flex flex-wrap content-center mx-5'>
            <span className='w-full text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] text-[#9a9cab] items-center flex'>Johan Doe</span>
            <span className='w-full text-[2vw] md:text-[1.2vw] lg:text-[.8vw] text-[#444550] items-center flex'>17min</span>
          </div>
        </div>
        <div className='w-full flex justify-start px-2 items-center '>
          <figure className='w-[50px] flex rounded-full h-[50px] cursor-pointer items-center justify-center text-white font-bold text-[1.5vw]  border-[2px] border-[#86c1ed]'>
            <img src={pic2} className='w-[95%] h-[95%] object-cover rounded-full ' />
          </figure>
          <div className='w-[50%] h-full flex flex-wrap content-center mx-5'>
            <span className='w-full text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] text-[#9a9cab] items-center flex'>Nina Doe</span>
            <span className='w-full text-[2vw] md:text-[1.2vw] lg:text-[.8vw] text-[#444550] items-center flex'>54min</span>
          </div>
        </div>
        <div className='w-full flex justify-start px-2 items-center '>
          <figure className='w-[50px] flex rounded-full h-[50px] cursor-pointer items-center justify-center text-white font-bold text-[1.5vw]  border-[2px] border-[#86c1ed]'>
            <img src={pic3} className='w-[95%] h-[95%] object-cover rounded-full ' />
          </figure>
          <div className='w-[50%] h-full flex flex-wrap content-center mx-5'>
            <span className='w-full text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] text-[#9a9cab] items-center flex'>Nina Doe</span>
            <span className='w-full text-[2vw] md:text-[1.2vw] lg:text-[.8vw] text-[#444550] items-center flex'>2hrs</span>
          </div>
        </div>
        <div className='w-full flex justify-start px-2 items-center '>
          <figure className='w-[50px] flex rounded-full h-[50px] cursor-pointer items-center justify-center text-white font-bold text-[1.5vw]  border-[2px] border-[#86c1ed]'>
            <img src={pic4} className='w-[95%] h-[95%] object-cover rounded-full ' />
          </figure>
          <div className='w-[50%] h-full flex flex-wrap content-center mx-5'>
            <span className='w-full text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] text-[#9a9cab] items-center flex'>John Doe</span>
            <span className='w-full text-[2vw] md:text-[1.2vw] lg:text-[.8vw] text-[#444550] items-center flex'>7hrs</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social