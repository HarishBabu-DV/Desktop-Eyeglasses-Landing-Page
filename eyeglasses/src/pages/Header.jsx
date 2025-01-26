import { useState } from 'react'
import {logo } from '../assets/asset'
import { navLink } from '../assets/asset'

const Header = () => {
  const headerElement=document.querySelector('.headerElement')
  const [isNavBarColor,setIsNavBarColor]=useState(false)
  
  window.addEventListener("scroll",()=>{
    if(scrollY>200){
      setIsNavBarColor(true)
    }
    else{
      setIsNavBarColor(false)
    }

  } )
 

  
  return (
    <>
        <header style={{backgroundColor:(isNavBarColor)? "rgb(30, 30, 30)":"transparent" }} className=" isNavBarColor?bg-custom-black:bg-transparent headerElement flex items-center justify-between py-4 px-11 z-10 fixed top-0 left-0 right-0 ">
            <div className="logo-container w-28 h-fit">
                <img src={logo} className="w-full h-full" alt="logo" />
            </div>
            <nav className="nav-container flex items-center gap-12">
                {
                  navLink.map((nav,index)=>(
                    <a href="" className="text-white text-lg font-bold" key={index}>{nav.title}</a>
                  ))
                }
                <a href="" className="text-black text-lg font-bold bg-white p-1.5 rounded-sm">Sign in</a>
            </nav>
        </header>
    </>
  )
}

export default Header