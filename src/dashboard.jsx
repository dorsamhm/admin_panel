import React, { useEffect, useRef } from 'react'
import BarsDataset from './barChart'

import premium from './assets/img/premium.svg'
import pic1 from './assets/img/avatar1.jpeg'
import pic2 from './assets/img/avatar2.jpeg'
import pic3 from './assets/img/avatar3.jpeg'
import pic4 from './assets/img/avatar4.jpeg'
import pic5 from './assets/img/avatar5.jpeg'

import StackedAreas from './linesChart'
import BasicPie from './pieChart'

function Dashboard() {

  const dashPage = useRef()
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
      dashPage.current.classList.add('translate-x-[0]')
      dashPage.current.classList.remove('translate-x-[30vw]')
      pathName.style.paddingLeft = '10vw'
    }
    else {
      menuB.style.left = '0'
      menuB.style.opacity = '1'
      menuB.style.zIndex = '100'
      e.target.classList.remove('bi-arrow-right')
      e.target.classList.add('bi-arrow-left')
      menuB.setAttribute('open', true)
      dashPage.current.classList.remove('translate-x-[0]')
      dashPage.current.classList.add('translate-x-[30vw]')
      pathName.style.paddingLeft = '40vw'
    }
  }

  return (
    <div ref={dashPage} className='pages w-full z-10 flex pl-[10vw] pr-[10vw] lg:pr-[5vw] translate-y-[15vh] h-auto flex-wrap absolute z-20'>
      <span ref={openMenu} onClick={(event) => openMenuB(event)} className='opacity-0 fixed invisible absolute top-[-10vh] translate-y-[-50%] cursor-pointer duration-100 left-[25vw] md:left-[26vw] w-[50px] h-[50px] '><i className="h-full w-full flex justify-center items-center text-white font-bold text-[3vw] md:text-[2vw] bi bi-arrow-right"></i></span>
      <div className=' w-full h-auto flex flex-wrap'>
        <div className='w-full h-[35vh] md:h-[50vh] lg:w-[45%] lg:h-[45vh] bg-[#1F1F2B] flex justify-center items-center rounded-lg'>
          <BarsDataset />
        </div>
        <div className='w-full h-[70vh] lg:w-[55%] justify-between content-between lg:h-[45vh] flex flex-wrap p-[2%]'>
          <div className='w-[90%] h-[22%] lg:w-[48%] lg:h-[48%] flex items-center justify-evenly'>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <div className='w-full h-1/2 flex justify-start items-center'>
                <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>$30K</span>
                <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#fc9494]'>-8%</span>
              </div>
              <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>Total revenue</span>
            </div>
            <span className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex bg-[#fc9494] rounded-lg shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_down</span>
          </div>
          <div className='w-[90%] h-[22%] lg:w-[48%] lg:h-[48%] flex items-center justify-evenly'>
            <div className='w-[60%] h-full  flex flex-wrap content-center'>
              <div className='w-full h-1/2 flex justify-start items-center'>
                <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>$21K</span>
                <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#fc9494]'>-8%</span>
              </div>
              <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>Total revenue</span>
            </div>
            <span className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex bg-[#fc9494] rounded-lg shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_down</span>
          </div>
          <div className='w-[90%] h-[22%]  lg:w-[48%] lg:h-[48%] flex items-center justify-evenly'>
            <div className='w-[60%] h-full  flex flex-wrap content-center'>
              <div className='w-full h-1/2 flex justify-start items-center'>
                <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>1681</span>
                <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#83d8ae]'>+16%</span>
              </div>
              <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2  text-[#9292a2]'>Unique visitors</span>
            </div>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#83d8ae] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_up</span>
          </div>
          <div className='w-[90%] h-[22%]  lg:w-[48%] lg:h-[48%] flex items-center justify-evenly'>
            <div className='w-[60%] h-full  flex flex-wrap content-center'>
              <div className='w-full h-1/2 flex justify-start items-center'>
                <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>4743</span>
                <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#83d8ae]'>+12%</span>
              </div>
              <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2  text-[#9292a2]'>Total investments</span>
            </div>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#83d8ae] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_up</span>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-evenly my-3 content-center items-evenly'>
        <div className='h-[50vh] rounded-md lg:w-[50%] my-3 w-full flex flex-wrap content-evenly bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center flex text-[2vw] lg:text-[1.2vw]'>Transactions</h3>
          <div className='w-full flex justify-evenly items-center '>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#86c1ed] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[1.5vw]'><i className="w-full h-full flex justify-center items-center text-white text-[2vw] lg:text-[1.5vw] font-bold bi bi-hand-thumbs-up"></i></span>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Facebook</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>02 March</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#83d8aa] w-[10%] flex items-center justify-center ' >+$24</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#83d8ae] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[1.5vw]'><i className="w-full h-full flex justify-center items-center text-white text-[2vw] lg:text-[1.5vw] font-bold bi bi-credit-card"></i></span>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Visa</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>02 March</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#83d8aa] w-[10%] flex items-center justify-center ' >+$300</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#fc9494] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[1.5vw]'><i className="w-full h-full flex justify-center items-center text-white text-[2vw] lg:text-[1.5vw] font-bold bi bi-tv"></i></span>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Netflix</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>02 March</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#fc9494] w-[10%] flex items-center justify-center ' >-$17</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#fad292] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[1.5vw]'><i className="w-full h-full flex justify-center items-center text-white text-[2vw] lg:text-[1.5vw] font-bold bi bi-cart "></i></span>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Themeforest</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>02 March</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#fc9494] w-[10%] flex items-center justify-center ' >-$220</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
            <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#ada6f2] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[1.5vw]'><i className="w-full h-full flex justify-center items-center text-white text-[2vw] lg:text-[1.5vw] font-bold bi bi-currency-dollar"></i></span>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Pay Pal</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>02 March</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#83d8aa] w-[10%] flex items-center justify-center ' >+$20</span>
          </div>
        </div>
        <div className='h-[50vh] rounded-md lg:w-[47%] my-3 w-full flex p-5 flex-wrap font-bold content-evenly bg-[#1f1f2b] justify-center'>
          <figure className='w-[80%] h-[20%] '>
            <img src={premium} className='w-full h-full object-contain' />
          </figure>
          <h3 className='text-white px-3 w-full items-center justify-center flex text-[2.5vw] lg:text-[1.2vw] text-center'>Advanced Security</h3>
          <p className='w-full text-[2vw] lg:text-[1vw] text-center px-2 text-[#969aab] items-center flex'>Lorem ipsum dolor sit amet. Nunc cursus tempor sapien, et mattis libero dapibus ut. Ut a ante sit amet arcu imperdiet ipsum ante</p>
          <span className='cursor-pointer px-3 text-center flex bg-[#86c1ed] rounded-lg h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white text-[2vw] lg:text-[1vw]'>Try Premium for free</span>
        </div>
       
        <div className='h-[55vh] rounded-md lg:w-[50%] my-3 w-full flex flex-wrap content-evenly bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center flex text-[2vw] lg:text-[1.2vw]'>Top Authors</h3>
          <div className='w-full flex justify-evenly items-center '>
          <figure className='w-[35px] h-[35px] md:w-[50px] flex rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white font-bold text-[1.5vw]'>
              <img src={pic1} className='w-full h-full object-contain rounded-lg ' />
            </figure>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>John Doe</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>23 items sold</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#969aab] w-[10%] flex items-center justify-center ' >$300</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
          <figure className='w-[35px] h-[35px] md:w-[50px] flex rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white font-bold text-[1.5vw]'>
              <img src={pic2} className='w-full h-full object-contain rounded-lg ' />
            </figure>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Ann Doe</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>19 items sold</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#969aab] w-[10%] flex items-center justify-center ' >$270</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
          <figure className='w-[35px] h-[35px] md:w-[50px] flex rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white font-bold text-[1.5vw]'>
              <img src={pic3} className='w-full h-full object-contain rounded-lg ' />
            </figure>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>Lisa Doe</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>14 items sold</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#969aab] w-[10%] flex items-center justify-center ' >$404</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
          <figure className='w-[35px] h-[35px] md:w-[50px] flex rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white font-bold text-[1.5vw]'>
              <img src={pic4} className='w-full h-full object-contain rounded-lg ' />
            </figure>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>John Doe</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>10 items sold</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#969aab] w-[10%] flex items-center justify-center ' >$500</span>
          </div>
          <div className='w-full flex justify-evenly items-center '>
          <figure className='w-[35px] h-[35px] md:w-[50px] flex rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white font-bold text-[1.5vw]'>
              <img src={pic5} className='w-full h-full object-contain rounded-lg ' />
            </figure>
            <div className='w-[60%] h-full flex flex-wrap content-center'>
              <span className='w-full text-[1.5vw] lg:text-[1.2vw] text-white font-bold items-center flex'>John Doe</span>
              <span className='w-full text-[1.2vw] lg:text-[.8vw] text-[#969aab] items-center flex'>8 items sold</span>
            </div>
            <span className='h-full text-[1.5vw] lg:text-[1vw] text-[#969aab] w-[10%] flex items-center justify-center ' >$299</span>
          </div>
        </div>
        <div className='h-[55vh] rounded-md lg:w-[47%] my-3 w-full flex p-2 flex-wrap font-bold content-center bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center justify-start flex text-[2vw] lg:text-[1.2vw]'>Sales</h3>
          <StackedAreas />
        </div>
        <div className='h-[55vh] rounded-md lg:w-[95%] my-3 w-full flex p-5 flex-wrap font-bold content-start bg-[#1f1f2b] justify-center'>
          <h3 className='text-white pr-3 w-full items-center flex text-[2vw] lg:text-[1.2vw]'>Projects</h3>
          <BasicPie />
        </div>
      </div>
    </div>
  )
}

export default Dashboard