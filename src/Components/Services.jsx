import { Headset, RefreshCw, ShieldHalf, Truck } from "lucide-react"


const Services = () => {
  return (
    <div className="flex  items-center justify-center p-8">
        <div className="w-300 flex gap-4">
            <div className="flex border w-1/4 border-gray-400 p-2 rounded-lg hover:border-blue-800">
                <div className="p-3 rounded-2xl bg-sky-100"><Truck size={30} strokeWidth={2.25} /></div>
                <div className="px-3 ">
                    <div className="font-bold text-lg">Free Delivery</div>
                    <div className="text-xs">On all orders over $50</div>
                </div>
            </div>
            <div className="flex border w-1/4 border-gray-400 p-2 rounded-lg hover:border-blue-800">
                <div className="p-3 rounded-2xl bg-sky-100"><ShieldHalf size={30} strokeWidth={2.50} /></div>
                <div 
                className="px-3 ">
                    <div className="font-bold text-lg">100% Secure</div>
                    <div className="text-xs">256-bit encrypted checkout</div>
                </div>
            </div>
            <div className="flex border w-1/4 border-gray-400 p-2 rounded-lg hover:border-blue-800">
                <div className="p-3 rounded-2xl bg-sky-100"><RefreshCw size={30} strokeWidth={2.25} /></div>
                <div className="px-3 ">
                    <div className="font-bold text-lg">30-Day Returns</div>
                    <div className="text-xs">Hassle-free money back</div>
                </div>
            </div> 
            <div className="flex border w-1/4 border-gray-400 p-2 rounded-lg hover:border-blue-800">
            <div className="p-3 rounded-2xl bg-sky-100"><Headset size={30} strokeWidth={2.25} /></div>
            <div className="px-3 ">
                <div className="font-bold text-lg">24/7 Support</div>
                <div className="text-xs">Dedicated expert help team</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services