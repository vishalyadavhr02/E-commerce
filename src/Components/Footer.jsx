import { Mail, MessageSquareText, Share2, ShoppingBag } from "lucide-react"

const columns = [
  { title: "Shop Categories", links: ["Shop Catalog", "Special Deals", "Gift Cards", "Trending", "What's New"] },
  { title: "Customer Service", links: ["Track Order", "Help & FAQ", "Returns", "Shipping Policy", "Contact Us"] },
  { title: "About & Legal", links: ["About ShopNest", "Careers", "Sustainability", "Privacy Policy", "Terms of Service"] },
]

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-6">
          {/* Brand */}
          <div className="w-full md:w-1/3">
            <a href="#" className="flex items-center gap-2.5 text-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
                <ShoppingBag />
              </div>
              <span className="text-headline-md font-bold tracking-tight text-primary">ShopNest</span>
            </a>
            <div className="py-4 pr-4">
              ShopNest provides modern retail curation for refined living. Discover verified hardware, timeless apparel, and contemporary living spaces with seamless delivery.
            </div>
            <div className="flex gap-5">
              <div className="w-fit rounded bg-gray-300 p-2"><Share2 size={16} strokeWidth={2.25} /></div>
              <div className="w-fit rounded bg-gray-300 p-2"><MessageSquareText size={16} strokeWidth={2.25} /></div>
              <div className="w-fit rounded bg-gray-300 p-2"><Mail size={16} strokeWidth={2.25} /></div>
            </div>
          </div>

          {/* Links */}
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="pb-3 text-lg font-bold">{col.title}</h2>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-gray-300"></div>
        <div className="flex items-center justify-center p-3 text-center text-sm">
          © 2024 ShopNest Inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer