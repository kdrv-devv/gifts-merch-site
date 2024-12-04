import React from 'react'
import humans from './imges/humans.png'
import circleWhite from "./imges/sircle-white.svg"
const Showcase = () => {
  return (
   <>
        <section className='bg-gradient-to-br from-gradientStart to-gradientEnd  w-full '>
            <div className='showcase w-[90%] m-auto'>
                <div className='showcase-top flex flex-col gap-3'>
                <h1 className='font-black text-2xl uppercase text-[#272525]'>Свежее дыхание в корпоративной жизни</h1>
                <h5 className='font-normal text-[0.94rem] leading-5 leading-[130%] text-[#272525]
'>Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей.</h5>
                </div>
            </div>

            <div className='showcase-bottom '>
                    <div className="showcase-bottom-left relative ">
                        <img src={humans} alt="img" className=' -z-1 absolute right-0 ' />
                            <div className='flex flex-col items-start mt-[1.375rem] gap-2'>

                        <div className='z-1 showcase-item flex flex-col text-center items-center justify-center ga-1 w-[70%] '>
                            <img src={circleWhite} alt="" />
                            <h5 className='w-[60%] italic font-normal text-base text-center text-[#272525]'>Высокое качество <span>ONLY</span></h5>
                        </div>
                        
                        <div className='z-1 showcase-item flex flex-col text-center items-center justify-center ga-1 w-[70%] '>
                            <img src={circleWhite} alt="" />
                            <h5 className='w-[60%] italic font-normal text-base text-center text-[#272525]'>Поддержка менеджера 24/7</h5>
                        </div>
                        
                        <div className=' z-10 showcase-item flex flex-col text-center items-center justify-center ga-1 w-[70%] '>
                            <img src={circleWhite} alt="" />
                            <h5 className='w-[60%] italic font-normal text-base text-center text-[#272525]'>Выполнение заказа
                            в turbo-режиме<span>ONLY</span></h5>
                        </div>
                        </div>

                    </div>
                    <div className='absolute  bottom-0 left-0 right-0 h-32 bg-white rounded-t-full'>

                    </div>
            </div>

        </section>


   </>
  )
}

export default Showcase