import React from 'react'
import { logo } from '../assets/asset'
import { footerContent } from '../assets/asset'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <>
        <footer className='bg-custom-black h-55vh flex justify-around pt-14'>

            {/* Contact */}
            <div className='flex flex-col gap-4'>
                {/* Logo */}
                <div className="logo-container w-28 h-fit ">
                    <img src={logo} className="w-full h-full" alt="logo" />

                {/* Content below Logo */}
                </div>
                {
                    footerContent.contact.map((content,index)=>
                        <a href="" key={index} className='text-white text-lg pl-2 font-normal'>{content.heading}</a>
                    )
                }
            </div>
            
            {/* Quick Links */}
            <div className='flex flex-col  gap-4 pt-8 items-center'>
                <h2 className='text-white text-lg font-bold'>Quick Links</h2>
            
                    {
                        footerContent.quick_links.map((content,index)=>
                            <a href="" className='text-white  text-lg' key={index}>{content.heading}</a>
                        )
                    }
            </div>

            {/* Follow Us */}
            <div className='flex flex-col gap-2 pt-8 items-center'>
                <h2 className='text-white text-lg font-bold'>Follow Us</h2>
                <div className='flex flex-col gap-0.5'>
               
                    {
                        footerContent.social_media_icons.map((icon,index)=>
                            <a href="" className='text-white text-xl' key={index}><FontAwesomeIcon icon={icon.icon} /></a>
                        )
                    }
                         
                </div>
            </div>

            {/* Subscribe Us */}
            <div className='flex flex-col items-center gap-4 pt-8'>
                <h2 className='text-white text-center text-lg font-bold'>Subscribe us</h2>
                <a href="" className='bg-custom-green rounded-lg text-white text-center py-0.5 px-16'>Email</a>
                <a href="" className='text-center bg-white custom-black font-bold w-24 py-1 rounded-xl '>Subscribe</a>
            </div>
        </footer>
    </>
  )
}

export default Footer