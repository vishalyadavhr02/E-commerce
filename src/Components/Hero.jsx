import { BadgeCheck, Zap } from "lucide-react"


const Hero = () => {
  return (
    <div className='flex items-center justify-center' >
        <div className='w-300 my-9 rounded-4xl flex flex-row gap-4 overflow-hidden p-3.5 bg-sky-100  h-140'>
           <div className='w-2/4 h-full py-25'>
            <div>
                <div className="flex bg-purple-200 rounded-2xl font-bold text-xs w-fit px-4 py-2.5 text-blue-900 ">
                    <Zap size={15}/> SUMMER TECH WAVE
                </div>
                <div className="py-6 px-4 text-4xl font-bold text-black">
                    Next-Gen Audio & Wearables <br /> 
                    <span className="text-blue-900">Up to 50% Off</span>
                </div>
                <div className="text-blue-900 py-3 px-4 leading-8 text-lg">
                    Experience studio-grade active noise cancellation, lossless acoustic fidelity, and multi-day battery life engineered for discerning daily performance.
                </div>
                <div className="flex gap-2.5 px-4">
                    <button className="bg-blue-600 font-bold px-5 py-3 text-white text-xl rounded-xl ">Shop Tech Wave</button>
                    <button className=" px-5 py-3 bg-white font-bold text-xl rounded-xl ">Explore Catalog</button>
                </div>
                <div className="w-full mx-4  my-5 border-t border-gray-300"></div>
                <div className="flex text-sm px-4">
                    <button className="flex "><BadgeCheck size={20}/>Official 2-yr warranty</button>
                    <button className="flex px-3"><Zap size={20}/>Fast 2-day delivery</button>
                </div>

            </div>
           </div>
           <div className='w-2/4 h-full flex justify-center items-center px-4 group'>
                <div className='bg-green-700 relative  border-white border-8 rounded-3xl overflow-hidden  transition-transform  duration-200 group-hover:scale-102'>
                    <img className="h-80 w-100 object-cover " src="https://lh3.googleusercontent.com/aida-public/AB6AXuArIPhCIjbd89tItzzkMKjfTfDJe5L9QcG2ul71VkXNOP2zlp9y1H375UMhKSAOZFggefEk0fk1bYJpMSkgkF_PStn0NFNlXT_56Ke92JNg79BHexrbxNT6C5QpaiAIhPk3EXdtrhLJWwlqM0BddDJJ0IX3Yhk4v7ql79g-A0L06hfr1Q6tHYxZJAwVhTcT3AJ6RCouU9vOgaAaK6vTkvsg6pdc6s0vZO9Swutu5MiXD2f2iLgWg2gg6w" alt="" />
                    <div className="absolute top-0 left-2 z-10 text-white rounded-2xl px-2 my-3 bg-red-700">% -45 OFF</div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Hero