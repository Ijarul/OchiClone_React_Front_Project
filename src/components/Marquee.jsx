import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className=' w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl text-white'>
      <div className='text border-t-2 border-b-2 border-zinc-500 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}} className='text-[20vw] leading-none font-["Test_Founders_Grotesk_X"]   font-semibold uppercase -mt-10 -mb-3 pr-20 '> we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}} className='text-[20vw] leading-none font-["Test_Founders_Grotesk_X"]   font-semibold uppercase -mt-10 -mb-3 pr-20 '> we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}} className='text-[20vw] leading-none font-["Test_Founders_Grotesk_X"]   font-semibold uppercase -mt-10 -mb-3 pr-20 '> we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}} className='text-[20vw] leading-none font-["Test_Founders_Grotesk_X"]   font-semibold uppercase -mt-10 -mb-3 pr-20 '> we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee