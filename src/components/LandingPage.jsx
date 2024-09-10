import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.4' className='w-full h-screen bg-white pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["we create" , "eye-opening" , "presentations"].map((item,index)=>{
                return <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                    {index===1 && (
                        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} 
                        className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw] -top-[.09vw]  relative bg-cover bg-center bg-[url("https://mir-s3-cdn-cf.behance.net/user/276/d6cf91925253957.628fe2ddd3b7a.png")]'></motion.div>
                    )}
                    <h1 className="uppercase  tracking-tight leading-[6.4vw] text-[9vw] font-['Test_Founders_Grotesk_X'] ">
                    {item}
                    </h1>
                </div>
                </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-[7rem] flex justify-between items-center py-5 px-10 font-["Neue_Montreal"]'>
            {["For public and private companies" , "From the first pitch to IPO"].map((item,index)=> 
            (
            <p className='text-md font-light tracking-tight leading-none'>
                {item}
            </p>
            ))}
        

        <div className='start flex items-center gap-1'>
        <div className='px-6 py-[.3rem] border-[2px] border-zinc-400 rounded-full font-light text-sm uppercase font-["Neue_Montreal"]'>start the project</div>
        <div className='w-8 h-8 border-[2px] border-zinc-400 rounded-full flex justify-center items-center'>
            <span className='rotate-45'>
            <FaArrowUpLong />
            </span>
           
        </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage