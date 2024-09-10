import { useEffect, useRef, useState } from "react"



function Eyes2() {


    const [rotate,setRotate] = useState(0);

  useEffect(()=>{
     window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;

        let deltaX = mouseX-window.innerWidth/2;
        let deltaY = mouseY-window.innerHeight/2;

        var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
        setRotate(angle-180);
     })
  })

  return (
    <div className='w-full overflow-hidden '>
        <div data-scroll  data-scroll-speed='-.6' className='relative w-full bg-[#CDEA68] '>
          <div className="text-[15vw] leading-none text-zinc-800 font-['Test_Founders_Grotesk_X'] flex justify-center items-center flex-col uppercase">
          <h1 className="mt-2">ready</h1>
          <h1 className="-mt-[4.5vw]">to start</h1>
          <h1 className="-mt-[4.5vw]">the project</h1>

          </div>
          <div className='w-full   bg-[#CDEA68] flex justify-center items-center flex-col '>
             <button className='flex gap-10 justify-center items-center px-10 py-4 bg-zinc-800 mt-[1vw]  rounded-full text-white uppercase '>start the project
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
            <h1 className="mt-3 text-2xl">OR</h1>
            <button className='flex gap-10 justify-center items-center px-10 py-4 border-[1px] border-zinc-800 bg-[#CDEA68] mt-[1vw] rounded-full text-black uppercase '>hello@ochi.design
            <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
            </button>
           </div>
            <div  className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
              <div data-scroll data-scroll-section data-scroll-speed='-.4' className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div  className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                  <h1 className="flex justify-center items-center text-white mt-[4vw] text-2xl uppercase font-['Neue_Montreal']">play</h1>
                    <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute  w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                      <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
            <div data-scroll data-scroll-section data-scroll-speed='-.4' className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                <h1 className="flex justify-center items-center text-white mt-[4vw] text-2xl uppercase font-['Neue_Montreal']">play</h1>
                <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute  w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                      <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes2