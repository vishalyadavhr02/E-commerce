import { Mail } from "lucide-react"


const Discount = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-300 h-100 flex flex-col  justify-evenly items-center my-10 bg-radial-[at_20%_50%] from-[#5145E5] via-[#392DC2] to-[#292E43] rounded-2xl'>
            <div className="rounded-3xl px-3 py-1 bg-blue-500 flex text-xs  justify-center items-center gap-1.5 text-white">
                <Mail size={16} strokeWidth={2.25} /> 
                VIP NEWSLETTER
            </div>
            <div className="text-4xl text-white my-3 ">Get 15% Off Your First Order</div>
            <div className="text-white">Join over 150,000 subscribers. Receive secret drop alerts,<br/> weekend flash discounts, and member-only curated catalogs.</div>
            <div className="flex gap-3 justify-center items-center">
                <input type="text" className="bg-white p-3 text-gray-800 rounded-2xl" placeholder="Enter your email address"/>
                <button className="bg-amber-400 text-gray-800 rounded-2xl p-3">Claim 15% Discount </button>
            </div>
            <div className="text-gray-300 text-x ">No spam, ever. Unsubscribe with 1-click anytime. View our Privacy Policy.</div>
        </div>
    </div>
  )
}

export default Discount