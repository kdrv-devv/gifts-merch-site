import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from "./imges/header-logo.svg"
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";


const Header = () => {
  return (
        <>
            <header className='bg-[rgba(250,251,253,0.44)] md:bg-gradient-to-br from-[#9796f0] to-[#ffe0e8]'>
                <div className='header py-5 flex items-center justify-between w-[90%] gap-7 m-auto'>
                    <Link to={"/"}> <img className='w-[8.125rem]' src={headerLogo} alt="header-logo" /> </Link>

                    <form action=""className='hidden header-center flex items-center rounded-full gap-2 py-4  px-7  w-[26.69rem] h-16 border-[4px] border-solid border-[#272525]'>
                        <CiSearch style={{fontSize:23 ,color:"#8e8e8e"}} />
                        <input  type="text" name="" id="" placeholder='Поиск' className='bg-transparent outline-none w-[90%]' />
                    </form>


                    <nav className='hidden header-right sm:flex items-center gap-[3rem]
'>
                        <button className='rounded-full py-4  px-10 lg:w-64 xl:w-64  h-14 shadow-lg shadow-[0_6px_25px_rgba(121,129,173,0.45)] bg-[#1fab8a] xl:font-semibold xl:text-lg xl:leading-[105%] xl:text-[#eef1f6] hover:text-[#1fab8a] hover:bg-transparent hover:border-[2px] hover:border-solid hover:border-[#1fab8a] transition-all duration-300 '>+380 630 130 103</button>

                        <nav className='login flex items-center gap-[2.44rem]'>
                            <button className='w-[45px] h-[45px] flex items-center duration-300 transition-all justify-center rounded-[100%] hover:bg-[#f4d8e864]'> <AiOutlineUser  style={{fontSize:35}}/></button>
                        <div className='language flex items-center gap-1'>
                            <button className='font-semibold text-lg  leading-[105%] text-[#272525]'>RU</button>
                            <button className='font-normal text-lg leading-[105%] text-[#8e8e8e]'>/ENG</button>
                        </div>
                        </nav>

                    </nav>

                    <div className='flex items-center gap-3'>
                        <button> <IoSearch style={{fontSize:17 ,color:"#272525"}} /></button>
                        <button><HiBars3 style={{fontSize:25,color:"#272525"}} /></button>
                    </div>

                </div>
            </header>
        </>
)
}

export default Header