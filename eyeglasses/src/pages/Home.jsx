import {glasses,wave } from '../assets/asset'
import Header from './Header'
function Home(){
  return (
    <>
      {/* Header*/}
      <Header className='z-20'/>

      {/* Main */}
      <main>

          <div className="main-container-one relative">
              <div className="landing-page-container">
                  {/*Heading*/}
                  <h1>EYE GLASSES</h1>
                  
                  {/* Description */}
                  <h3>Fashionable eyewear for every mood, every day</h3>

                  {/* Shop Now */}
                  <a href="">Shop Now</a>
              </div>

                {/* View Product */}
                <div className='w-full  flex items-center justify-center'>
                  <a href="" className='view-product flex items-center gap-1 px-4'>
                    <span className='text-white font-semibold'>View</span>
                    <span className='text-black font-semibold'>Product</span>
                  </a>
                </div>
                

              {/* Glasses Image   */}
              <div className='absolute top-44 right-52 w-lg h-55vh'>
                <img src={glasses} alt="glasses" className='w-full h-full'/>
              </div>

              {/* Wave */}
              <div className=" absolute bottom-0 left-0 right-0">
                  <img src={wave} alt="image" className='w-full h-full'/>
              </div>
          </div>

        
      </main>
    </>
  )
}

export default Home