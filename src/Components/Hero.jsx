import { BadgeCheck, Zap } from "lucide-react"

const Hero = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="my-6 flex w-full max-w-7xl flex-col gap-4 overflow-hidden rounded-3xl bg-sky-100 p-3.5 md:my-9 md:flex-row md:rounded-4xl lg:min-h-140">
        {/* Left */}
        <div className="w-full py-6 md:w-1/2 md:py-12 lg:py-20">
          <div className="flex w-fit rounded-2xl bg-purple-200 px-4 py-2.5 text-xs font-bold text-blue-900">
            <Zap size={15} /> SUMMER TECH WAVE
          </div>
          <div className="px-4 py-4 text-2xl font-bold text-black sm:text-3xl lg:py-6 lg:text-4xl">
            Next-Gen Audio & Wearables <br />
            <span className="text-blue-900">Up to 50% Off</span>
          </div>
          <div className="px-4 py-3 text-base leading-7 text-blue-900 lg:text-lg lg:leading-8">
            Experience studio-grade active noise cancellation, lossless acoustic fidelity, and multi-day battery life engineered for discerning daily performance.
          </div>
          <div className="flex flex-wrap gap-2.5 px-4">
            <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-base font-bold text-white sm:px-5 sm:py-3 lg:text-xl">
              Shop Tech Wave
            </button>
            <button className="rounded-xl bg-white px-4 py-2.5 text-base font-bold sm:px-5 sm:py-3 lg:text-xl">
              Explore Catalog
            </button>
          </div>
          <div className="mx-4 my-5 border-t border-gray-300"></div>
          <div className="flex flex-wrap gap-x-3 gap-y-2 px-4 text-sm">
            <button className="flex"><BadgeCheck size={20} />Official 2-yr warranty</button>
            <button className="flex"><Zap size={20} />Fast 2-day delivery</button>
          </div>
        </div>

        {/* Right */}
        <div className="group flex w-full items-center justify-center px-2 pb-4 md:w-1/2 md:px-4 md:pb-0">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-8 border-white bg-green-700 transition-transform duration-200 group-hover:scale-102">
            <img
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArIPhCIjbd89tItzzkMKjfTfDJe5L9QcG2ul71VkXNOP2zlp9y1H375UMhKSAOZFggefEk0fk1bYJpMSkgkF_PStn0NFNlXT_56Ke92JNg79BHexrbxNT6C5QpaiAIhPk3EXdtrhLJWwlqM0BddDJJ0IX3Yhk4v7ql79g-A0L06hfr1Q6tHYxZJAwVhTcT3AJ6RCouU9vOgaAaK6vTkvsg6pdc6s0vZO9Swutu5MiXD2f2iLgWg2gg6w"
              alt=""
            />
            <div className="absolute top-0 left-2 z-10 my-3 rounded-2xl bg-red-700 px-2 text-white">% -45 OFF</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero