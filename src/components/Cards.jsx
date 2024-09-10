import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.4'>
    <div  className='w-full h-screen flex items-center px-20 gap-5 -mt-[20vw]'>
      <div className='cardcontainer h-[50vh] w-1/2 '>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute -ml-3 -mb-2  rounded-full px-5 py-1 border-2 border-[#a1b562] text-[#a1b562] text-[1vw] left-10 bottom-10'>&copy;2019-2023</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute -ml-3 -mb-2 rounded-full px-5 py-1 border-2 font-semibold text-white text-[1vw] tracking-tighter left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute -ml-3 -mb-2 rounded-full px-5 py-1 border-2 font-semibold text-white text-[1vw] tracking-tighter left-10 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards