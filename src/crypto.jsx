import React, { useEffect, useRef } from 'react'

import btc from './assets/img/btc.png'
import btcc from './assets/img/btcc.png'
import ltc from './assets/img/ltc.png'
import eth from './assets/img/eth.png'

function Crypto() {
  const cryptoPage = useRef()
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
      cryptoPage.current.classList.add('translate-x-[0]')
      cryptoPage.current.classList.remove('translate-x-[30vw]')
      pathName.style.paddingLeft = '10vw'
    }
    else {
      menuB.style.left = '0'
      menuB.style.opacity = '1'
      menuB.style.zIndex = '100'
      e.target.classList.remove('bi-arrow-right')
      e.target.classList.add('bi-arrow-left')
      menuB.setAttribute('open', true)
      cryptoPage.current.classList.remove('translate-x-[0]')
      cryptoPage.current.classList.add('translate-x-[30vw]')
      pathName.style.paddingLeft = '40vw'
    }
  }

  return (
    <div ref={cryptoPage} className='pages w-full z-10 flex pl-[10vw] pr-[10vw] lg:pr-[5vw] translate-y-[15vh] h-auto flex-wrap absolute z-20'>
      <span ref={openMenu} onClick={(event) => openMenuB(event)} className='opacity-0 fixed invisible absolute top-[-10vh] translate-y-[-50%] cursor-pointer duration-100 left-[20vw]  w-[50px] h-[50px] '><i className="h-full w-full flex justify-center items-center text-white font-bold text-[3vw] md:text-[2vw] bi bi-arrow-right"></i></span>
      <div className='w-full h-[60vh] md:h-[80vh] justify-between content-between bg-[#1f1f2b] rounded-lg lg:h-[30vh] flex flex-wrap p-[2%]'>
        <div className='w-[90%] h-[22%] lg:w-[24%] lg:h-[90%] flex items-center justify-evenly'>
          <div className='w-[60%] h-full flex flex-wrap content-center'>
            <div className='w-full h-1/2 flex justify-start items-center'>
              <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>ETC</span>
              <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#fc9494]'>-5.5%</span>
            </div>
            <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>$38,900</span>
          </div>
          <span className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex bg-[#fc9494] rounded-lg shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_down</span>
        </div>
        <div className='w-[90%] h-[22%] lg:w-[24%] lg:h-[90%] flex items-center justify-evenly'>
          <div className='w-[60%] h-full  flex flex-wrap content-center'>
            <div className='w-full h-1/2 flex justify-start items-center'>
              <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>Eth</span>
              <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#fc9494]'>-2.64%</span>
            </div>
            <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>$2,600</span>
          </div>
          <span className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex bg-[#fc9494] rounded-lg shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_down</span>
        </div>
        <div className='w-[90%] h-[22%]  lg:w-[24%] lg:h-[90%] flex items-center justify-evenly'>
          <div className='w-[60%] h-full  flex flex-wrap content-center'>
            <div className='w-full h-1/2 flex justify-start items-center'>
              <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>BNB</span>
              <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#83d8ae]'>+2%</span>
            </div>
            <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>$330</span>
          </div>
          <span className='w-[35px] h-[35px] md:w-[50px] flex bg-[#83d8ae] rounded-lg md:h-[50px] shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_up</span>
        </div>
        <div className='w-[90%] h-[22%] lg:w-[24%] lg:h-[90%] flex items-center justify-evenly'>
          <div className='w-[60%] h-full  flex flex-wrap content-center'>
            <div className='w-full h-1/2 flex justify-start items-center'>
              <span className='text-[2.5vw] lg:text-[1.5vw] font-bold text-white '>ADA</span>
              <span className='text-[2.2vw] lg:text-[1vw] mx-2 text-[#fc9494]'>-8%</span>
            </div>
            <span className='text-[2.2vw] lg:text-[1vw] xl:text-[.8vw]  mr-2 text-[#9292a2]'>$1.31</span>
          </div>
          <span className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex bg-[#fc9494] rounded-lg shadow-[0_0px_20px_rgb(255,255,255,0.2)] material-symbols-outlined items-center justify-center text-white font-bold text-[3vw] lg:text-[1.5vw]'>trending_down</span>
        </div>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-evenly my-3 content-center items-evenly'>
        <div className='h-[50vh] md:h-[60vh] rounded-md lg:w-[67%] my-3 w-full flex flex-wrap content-evenly p-1 md:p-3 bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center flex text-[2.5vw] lg:text-[1.2vw]'>Get Started</h3>
          <div className='w-[90%] h-[10%] flex justify-center px-2 border-b-[.5px]'>
            <span className='h-full w-[10%] font-bold text-[2vw] lg:text-[1vw] text-[#8a9cab] '>#</span>
            <span className='h-full w-[50%] font-bold text-[2vw] lg:text-[1vw] text-[#8a9cab] '>Name</span>
            <span className='h-full w-[20%] font-bold text-[2vw] lg:text-[1vw] text-[#8a9cab] '>Price</span>
            <span className='h-full w-[20%] font-bold text-[2vw] lg:text-[1vw] text-[#8a9cab] '>Change</span>
            <span className='h-full w-[20%] font-bold text-[2vw] lg:text-[1vw] text-[#8a9cab] '>Trade</span>
          </div>
          <div className='w-[90%] h-[10%] flex justify-center px-2 border-b-[.5px]'>
            <span className='h-full w-[10%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>1</span>
            <div className='h-full w-[50%] font-bold text-[1vw] flex justify-start text-[#8a9cab] '>
              <figure className='md:w-[30px] md:h-[30px] h-[20px] w-[20px] translate-y-[-25%] xl:translate-y-[-15%] rounded-full mx-2'>
                <img src={btc} className='w-full h-ful object-cover rounded-full' />
              </figure>
              <span className='h-full w-auto text-[1.5vw] lg:text-[.8vw] xl:text-[1vw] text-[#8a9cab] '>Bitcoin</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>$38,900</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#fc9494] '>-0.53%</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>Buy</span>
          </div>
          <div className='w-[90%] h-[10%] flex justify-center px-2 border-b-[.5px]'>
            <span className='h-full w-[10%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>2</span>
            <div className='h-full w-[50%] font-bold text-[1vw] flex justify-start text-[#8a9cab] '>
              <figure className='md:w-[30px] md:h-[30px] h-[20px] w-[20px] rounded-full mx-2 translate-y-[-25%] xl:translate-y-[-15%]'>
                <img src={eth} className='w-full h-full object-contain rounded-full' />
              </figure>
              <span className='h-full w-auto text-[1.5vw] lg:text-[.8vw] xl:text-[1vw] text-[#8a9cab] '>Ethereum</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>$2,600</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>+4.55%</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>Buy</span>
          </div>
          <div className='w-[90%] h-[10%] flex justify-center px-2 border-b-[.5px]'>
            <span className='h-full w-[10%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>3</span>
            <div className='h-full w-[50%] font-bold text-[1vw] flex justify-start text-[#8a9cab] '>
              <figure className='md:w-[30px] md:h-[30px] h-[20px] w-[20px] rounded-full flex items-center mx-2 translate-y-[-25%] xl:translate-y-[-15%]'>
                <img src={btcc} className='w-full h-full object-contain rounded-full' />
              </figure>
              <span className='h-full w-auto  text-[1.5vw] lg:text-[.8vw] xl:text-[1vw] flex text-[#8a9cab] '>Bitcoin Cash</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>$542.20</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#fc9494] '>-0.30%</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>Buy</span>
          </div>
          <div className='w-[90%] h-[10%] flex justify-center px-2 '>
            <span className='h-full w-[10%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>4</span>
            <div className='h-full w-[50%] font-bold text-[1vw] flex justify-start text-[#8a9cab] '>
              <figure className='md:w-[30px] md:h-[30px] h-[20px] w-[20px] translate-y-[-25%] xl:translate-y-[-15%] rounded-full mx-2'>
                <img src={ltc} className='w-full h-full object-cover rounded-full' />
              </figure>
              <span className='h-full w-auto text-[1.5vw] lg:text-[.8vw] xl:text-[1vw] text-[#8a9cab] '>Litecoin</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>$139.40</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>+2.19%</span>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#83d8ae] '>Buy</span>
          </div>
        </div>
        <div className='h-[60vh] rounded-md lg:w-[30%] my-3 w-full flex flex-wrap content-evenly p-1 bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center flex text-[2.5vw] lg:text-[1.2vw]'>Transactions</h3>
          <div className='w-[90%] h-[10%] flex justify-center border-b-[.5px] py-3'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>Name</span>
            <span className='h-full w-[40%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>Status</span>
            <span className='h-full w-[20%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] '>Amount</span>
          </div>
          <div className='w-[90%] h-[15%] flex justify-center items-center border-b-[.5px]'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>Bitcoin</span>
            <div className='h-full w-[40%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex justify-start items-center '>
              <span className=' px-3 py-2 flex bg-[#eae8ff] rounded-lg cursor-pointer shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-[#7e7ac8] font-bold text-[1.5vw] lg:text-[1vw] flex items-center '>Recieve</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>0.01</span>
          </div>
          <div className='w-[90%] h-[15%] flex justify-center items-center border-b-[.5px]'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>Ethereum</span>
            <div className='h-full w-[40%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex justify-start items-center '>
              <span className='px-3 py-2 flex bg-[#e1f7ec] rounded-lg cursor-pointer shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-[#3a9c68] font-bold text-[1.5vw] lg:text-[1vw] flex items-center '>Buy</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>0.3</span>
          </div>
          <div className='w-[90%] h-[15%] flex justify-center items-center border-b-[.5px]'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>Ripple</span>
            <div className='h-full w-[40%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex justify-start items-center '>
              <span className='px-3 py-2 flex bg-[#e1f7ec] rounded-lg cursor-pointer shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-[#3a9c68] font-bold text-[1.5vw] lg:text-[1vw] flex items-center '>Buy</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>100</span>
          </div>
          <div className='w-[90%] h-[15%] flex justify-center items-center border-b-[.5px]'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>BNB</span>
            <div className='h-full w-[40%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex justify-start items-center '>
              <span className='px-3 py-2 flex bg-[#ffebeb] rounded-lg cursor-pointer shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-[#c95b59] font-bold text-[1.5vw] lg:text-[1vw] flex items-center '>Failed</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>3</span>
          </div>
          <div className='w-[90%] h-[15%] flex justify-center items-center'>
            <span className='h-full w-[30%] font-bold text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>Cardano</span>
            <div className='h-full w-[40%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex justify-start items-center '>
              <span className='px-3 py-2 flex bg-[#fff6e8] rounded-lg cursor-pointer shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-[#b5814f] font-bold text-[1.5vw] lg:text-[1vw] flex items-center '>Recieve</span>
            </div>
            <span className='h-full w-[20%] text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center '>300</span>
          </div>
        </div>
        <div className='h-auto rounded-md lg:w-[65%] my-3 w-full flex flex-wrap content-evenly bg-[#1f1f2b] justify-center'>
          <div className='h-[25vh] md:h-[30vh] w-full md:w-[20%] px-3 flex flex-wrap content-center justify-center ' >
            <span className='h-[80px] w-[80px] rounded-full duratipn-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#86c1ed] bg-[#262635] cursor-pointer ' >
              <i className ="w-full h-full rounded-full flex justify-center items-center bi bi-send-fill"></i>
            </span>
            <span className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center my-3 justify-center '>Send</span>
          </div>
          <div className='h-[25vh] md:h-[30vh] w-full md:w-[20%] px-3 flex flex-wrap content-center justify-center ' >
            <span className='h-[80px] w-[80px] rounded-full duratipn-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#83d8ae] bg-[#262635] cursor-pointer ' >
              <i className ="w-full h-full rounded-full flex justify-center items-center bi bi-credit-card-2-front"></i>
            </span>
            <span className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center my-3 justify-center '>Deposit</span>
          </div>
          <div className='h-[25vh] md:h-[30vh] w-full md:w-[20%] px-3 flex flex-wrap content-center justify-center ' >
            <span className='h-[80px] w-[80px] rounded-full duratipn-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#fad292] bg-[#262635] cursor-pointer ' >
              <i className ="w-full h-full rounded-full flex justify-center items-center bi bi-lock-fill"></i>
            </span>
            <span className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center my-3 justify-center '>Stake</span>
          </div>
          <div className='h-[25vh] md:h-[30vh] w-full md:w-[20%] px-3 flex flex-wrap content-center justify-center ' >
            <span className='h-[80px] w-[80px] rounded-full duratipn-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#ada6f2] bg-[#262635] cursor-pointer ' >
              <i className ="w-full h-full rounded-full flex justify-center items-center bi bi-person-fill-add"></i>
            </span>
            <span className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center my-3 justify-center '>Add</span>
          </div>
          <div className='h-[25vh] md:h-[30vh] w-full md:w-[20%] px-3 flex flex-wrap content-center justify-center ' >
            <span className='h-[80px] w-[80px] rounded-full duratipn-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#83d8ae] bg-[#262635] cursor-pointer ' >
              <i className ="w-full h-full rounded-full flex justify-center items-center bi bi-calendar-fill"></i>
            </span>
            <span className='w-full text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] text-[#8a9cab] flex items-center my-3 justify-center '>History</span>
          </div>
        </div>
        <div className='h-[20vh] md:h-[30vh] rounded-md lg:w-[32%] my-3 w-full flex p-5 flex-wrap font-bold content-evenly bg-[#1f1f2b] justify-center'>
          <h3 className='text-white px-3 w-full items-center justify-center flex text-[2.5vw] lg:text-[1.2vw] text-center'>Claim Your Gift</h3>
          <p className='w-full text-[2.2vw] md:text-[2vw] lg:text-[1vw] text-center px-2 text-[#969aab] items-center justify-center flex'>5% off for the first buy</p>
          <span className='cursor-pointer px-3 text-center flex bg-[#83d8ae] rounded-lg py-2 duration-300 hover:shadow-[0_0px_20px_rgb(255,255,255,0.2)] items-center justify-center text-white text-[2.2vw] md:text-[2vw] lg:text-[1vw]'>Register Now</span>
        </div>
      </div>
    </div >
  )
}

export default Crypto