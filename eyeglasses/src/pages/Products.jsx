import { productsList,wave } from "../assets/asset"

const Products = () => {
  return (
    <>
        {/* Products */}
        <section className="relative flex flex-col gap-4 bg-products pt-28 pb-0 px-20">
           {/* Wave */}
            <div className="absolute top-0 left-0 right-0 h-24 rotate-180">
                <img src={wave} alt="image" className='w-full h-full'/>
            </div>
            {/* Products Heading */}
            <a href="" className="font-bold text-2xl underline">Products</a> 
            
            <div className="w-full h-fit grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 ">
              {productsList.map((product,index)=>
              <div className="bg-custom-black py-4 rounded-xl w-full h-fit flex flex-col">
                <div className="w-full flex flex-col items-center" key={index}>
                    <div className="w-40 h-28 rounded-xl">
                      <img src={product.imageUrl} alt="image" className="w-full h-full rounded-xl" />
                    </div>
                    <h3 className="text-white font-medium">{product.title}</h3>
                    <h2 className="custom-green font-bold text-2xl">&#8377;{product.price}</h2>
                  </div>

                   <div className="flex items-center justify-around">
                   <a href="" className="px-4 py-2 font-medium rounded-lg custom-black  bg-white">WishList</a>
                   <a href="" className="px-4 py-2 font-medium rounded-lg text-white bg-custom-green ">Buy Now</a>
                  </div>
              </div>
                  
              )}
            </div>
        </section>
    </>
  )
}

export default Products