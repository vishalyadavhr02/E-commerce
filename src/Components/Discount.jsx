import { Mail } from "lucide-react"

const Discount = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="my-10 flex w-full max-w-7xl flex-col items-center justify-evenly gap-4 rounded-2xl bg-radial-[at_20%_50%] from-[#5145E5] via-[#392DC2] to-[#292E43] px-4 py-10 md:min-h-100">
        <div className="flex items-center justify-center gap-1.5 rounded-3xl bg-blue-500 px-3 py-1 text-xs text-white">
          <Mail size={16} strokeWidth={2.25} />
          VIP NEWSLETTER
        </div>
        <div className="my-3 text-center text-2xl text-white sm:text-3xl md:text-4xl">
          Get 15% Off Your First Order
        </div>
        <div className="text-center text-sm text-white sm:text-base">
          Join over 150,000 subscribers. Receive secret drop alerts,
          <br className="hidden sm:block" /> weekend flash discounts, and member-only curated catalogs.
        </div>
        <div className="flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <input
            type="email"
            className="w-full rounded-2xl bg-white p-3 text-gray-800 sm:flex-1"
            placeholder="Enter your email address"
          />
          <button className="rounded-2xl bg-amber-400 p-3 text-gray-800 sm:shrink-0">
            Claim 15% Discount
          </button>
        </div>
        <div className="text-center text-xs text-gray-300">
          No spam, ever. Unsubscribe with 1-click anytime. View our Privacy Policy.
        </div>
      </div>
    </div>
  )
}

export default Discount