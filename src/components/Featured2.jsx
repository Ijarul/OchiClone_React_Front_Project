import React,{useState} from 'react'
import {motion , useAnimation} from "framer-motion"

function Featured2() {

    const cards =[useAnimation(), useAnimation()];

 const handleHover =(index) =>{
  cards[index].start({y:"0"});
 }

 const handleHoverEnd =(index) =>{
  cards[index].start({y:"100%"})
 }

  return (
    <div className='w-full py-20'>
    {/* //   <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
    //     <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
    //   </div> */}
      <div className='w-full flex font-["Neue_Montreal"] text-xl '>
        <li className='w-1/2 px-20 mt-10'>TRAWA</li>
        <li className='w-1/2 px-5 mt-10'>PREMIUM BLEND</li>
      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-10 mt-2'>
             
             <motion.div onHoverStart={()=>handleHover(0)}
             onHoverEnd={()=> handleHoverEnd(0)}
             className='cardscontainer relative w-[50%]  h-[40vw] '>
              {/* <div className='card  w-full h-full rounded-xl overflow-hidden '> */}
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-["Test_Founders_Grotesk_X"]'>
                {"TRAWA".split('').map((item,index)=>(
                <motion.span
                initial={{y:"100%"}}
                animate={cards[0]}
                transition={{ease: [0.22,1,0.36,1],delay:index*.05}}
                className='inline-block'>
                  {item}
                  </motion.span>))}
                </h1>
                <img className='w-full h-full bg-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
              {/* </div> */}
             </motion.div>
             <motion.div onHoverStart={()=>handleHover(1)}
             onHoverEnd={()=> handleHoverEnd(1)}
             className='cardscontainer relative w-[50%]  h-[40vw] '>
             {/* <div className='card w-full h-full rounded-xl overflow-hidden '> */}
             <h1 className='absolute flex  overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-["Test_Founders_Grotesk_X"]'>
               {"PREMIUM".split('').map((item,index)=>(
                <motion.span
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease: [0.22,1,0.36,1],delay:index*.05}}
                className='inline-block'>
                  {item}
                  </motion.span>))}
             </h1>
             <img className='w-full h-full bg-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
             {/* </div> */}
             </motion.div>
       </div>
      </div>
      <div className='w-full px-20 py-[1.5vw] flex justify-between items-center text-zinc-600 '>
      <div className='w-1/2 font-["Neue_Montreal"]  '>
        <button className='mr-[1vw] rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw] '>BRAND IDENTITY</button>
        <button className='mr-[1vw] rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw] '>DESIGN RESEARCH</button>
        <button className='rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw] '>INVESTOR DECK</button>
      </div>
      <div className='w-1/2 font-["Neue_Montreal"] px-[1.4vw] '>
        
        <button className='rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw] '>BRAND TEMPLATE</button>
      </div>
    </div>
    <div className='w-full flex justify-center items-center '>
    <button className='flex gap-10 justify-center items-center px-10 py-4 bg-zinc-950 mt-[5vw] -mb-[5vw] rounded-full text-white uppercase '>view all case studies
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
    </div>
      </div>
  )
}

export default Featured2