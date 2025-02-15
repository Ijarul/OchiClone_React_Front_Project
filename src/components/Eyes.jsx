import { useEffect, useRef, useState } from "react"



function Eyes() {


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
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll  data-scroll-speed='-.6' className='relative w-full h-screen bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
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

export default Eyes