import React from 'react'

function Client() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full px-20 border-b-[1px] border-zinc-400 pb-10 '>
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight pt-[8vw]'>Client's reviews</h1>
      </div>
      <div className='w-full flex gap-10 justify-between py-[1vw] px-20'>
        <div className='w-1/2 '>
            <div className=' w-full h-full flex justify-between items-center font-["Neue_Montreal"] text-lg'>
                <div className='w-1/2 -mt-[27vw]'>Karman Ventures
                
                </div>
               <div className='flex-col'>  
               <div className='w-1/2 -mt-[14.5vw]'>Services:
                </div>
                <div className='pt-[4vw]'>
                <h1 className='flex-col'>
                <button className='mb-[.8vw] mr-[2vw] rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw]'>INVESTOR DECK</button>
                <button className=' rounded-full border-[2px] border-zinc-600 px-3 py-[.1vw]'>SALES DECK</button>
                </h1>
                </div>
               </div>
                
                </div>
            
        </div>
        <div className='w-1/2 font-["Neue_Montreal"] text-lg'>
            <h1>William Barnes</h1>
            <div className='mt-[4.5vw] w-[8vw] rounded-md h-[8vw] -top-[.09vw]  relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png")]'></div>
             <p className='mt-5 w-[75%]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Client