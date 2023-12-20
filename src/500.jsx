import React from 'react'

import error from './assets/img/error.svg'

function Error500() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#181821] flex justify-center items-center content-center flex-wrap '>
      <div className='lg:w-[30vw] w-[80%] flex flex-wrap content-center justify-center '>
        <h2 className=' w-full text-[#83D8AE] text-[150px] lg:text-[10vw] font-bold flex justify-center items-center lg:justify-start  '>500</h2>
        <p className=' w-full text-[#747487] text-[14px] md:text-[20px] lg:text-[1vw] font-bold text-center lg:text-start '>
          Ooopss... Something went wrong <br />
          Try refreshing the page or contact our <strong className='text-[#83D8AE] mx-1 cursor-pointer '>help center</strong>
        </p>
      </div>
      <figure className='lg:w-[40vw] lg:flex hidden m-3 flex flex-wrap content-center justify-center '>
        <img src={error} className='w-full h-full object-contain' />
      </figure>
    </div>
  )
}

export default Error500