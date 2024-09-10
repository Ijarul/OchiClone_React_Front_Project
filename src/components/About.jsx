import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className='w-full  py-[8vw] px-[4vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight mr-[1vw]'>
          Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,
          sell products,    explain complex ideas, and hire great peoople.
        </h1>
        <div className='w-full border-t-[1px] mt-[4vw] border-[#a1b562] '>
        </div>
        <div className='w-full bg-[#CDEA68] flex justify-between py-6 overflow-hidden '>
          <div className='w-full font-["Neue_Montreal"] text-[1vw] '>What you can expect:</div>
          <div className='w-full font-["Neue_Montreal"] text-[1vw] pl-[20vw]  '>
            <p className='mr-[2vw]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
            <p className='mr-[3vw] mt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className='w-full font-["Neue_Montreal"] text-[1vw] py-20 '>
            <ul className='font-["Neue_Montreal"] text-[1.1vw] ml-[12vw]'>
              <li>S:</li>
             <li>Instagram</li>
             <li>Behance</li>
             <li>Facebook</li>
             <li>Linkedin</li>
             </ul>
            </div>
       
        </div>
        <div className='w-full border-t-[1px] mt-[2vw] pt-6 -mb-[43vw] border-[#a1b562] flex '>
        <div className='w-1/2 '>
            <h1 className='text-[3.5vw] font-["Neue_Montreal"]'>Our approach:</h1>
            <button className='flex gap-10 items-center px-10 py-4 bg-zinc-950 mt-7 rounded-full text-white uppercase '>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vw] '>
          <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
        </div>
        </div>
        
    </div>
  )
}

export default About