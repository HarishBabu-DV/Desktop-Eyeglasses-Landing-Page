import React from 'react'
import { aboutUsDescription } from '../assets/asset'
const AboutUs = () => {
  return (
    <>
        {/* About us */}
        <section className=' bg-products'>
          <div className='flex flex-col gap-20 w-full h-full justify-around py-16'>
            {/* About us link */}
            <div className="text-center">
                <a href="" className='font-bold underline text-3xl'>About us</a>
            </div>
            {/* Description */}
            <div className='flex items-center gap-8 justify-around'>
                {
                  aboutUsDescription.map((content,index)=>
                    <div key={index} className='flex flex-col justify-center items-center gap-1'>
                      <div className='w-60 h-40'>
                        <img src={content.imageUrl} alt="image" className='w-full h-full rounded-md' />
                      </div>
                      <h2 className='font-bold capitalize text-2xl' >{content.title}</h2>
                      <p className='text-lg'>{content.description1}</p>
                      <p className='text-lg capitalize '>{content.description2}</p>
                    </div>
                  )
                }
            </div>
            <p className="px-68 text-center text-md">
               An eyeglasses e-commerce platform provides a convenient and accessible way for customers to browse. select, and purchase prescription eyewear online. This type of business leverages digital technology to offer a wide range of eyeglasses frames, lenses, and related products to consumers.
            </p>
          </div>
          
        </section>
    </>
  )
}

export default AboutUs